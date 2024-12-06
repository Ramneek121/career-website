document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully");

    const userInput = document.getElementById("user-input");
    const chatHistory = document.getElementById("chat-history");
    let similarResponseCounter = 0; // Counter to track similar responses

    function sendInput() {
        // Get the value from the input

        const input = userInput.value;

        // Check if the input is not empty
        if (!input.trim()) return; // Prevent sending empty messages

        // Display the user's message in the chat
        chatHistory.innerHTML += `<div style="display: flex; align-items: center; justify-content: flex-end; margin-bottom: 10px; max-width: 60%; padding: 10px; background-color: #34D399; color: white; margin-left: auto; border-radius: 15px; border-bottom-right-radius: 0;">
            <div style="text-align: left;">${input}</div>
            <img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" alt="User Avatar" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-left: 10px;">
        </div>`;

        userInput.value = "";

        // Make the POST request to the server
        fetch("/generate-response", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_input: input }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Display the bot's response
                chatHistory.innerHTML += `
                <div style="display: flex; align-items: center; margin-bottom: 10px; max-width: 60%; padding: 10px; background-color: #3B82F6; color: white; margin-right: auto; border-radius: 15px; border-bottom-left-radius: 0;">
                    <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" alt="MindPal Avatar" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-right: 10px;">
                    <div>MindPal: ${data.message}</div>
                </div>`;

                // Increment the counter
                similarResponseCounter++;

                // If the counter reaches 5-6, fetch suggestions
                if (similarResponseCounter >= 3) {
                    fetchSuggestions(input);
                    similarResponseCounter = 0; // Reset the counter after fetching suggestions
                }

                // Scroll to the bottom of the chat history
                scrollToBottom();
            })
            .catch((error) => console.error("Error:", error));
    }

    function fetchSuggestions(input) {
        fetch("/get_suggestions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: input }),
        })
            .then((response) => response.json())
            .then((data) => {
                const suggestionsList =
                    document.getElementById("suggestions-list");
                suggestionsList.innerHTML = ""; // Clear previous suggestions

                // Join the suggestions and replace line breaks with <br>
                const rawSuggestions = data.suggestions.join(" ").trim();
                const formattedSuggestions = rawSuggestions
                    .replace(/(\d+\.\s)/g, "<br>$1")
                    .trim();

                // Create a <p> element to display the suggestions
                const paragraph = document.createElement("p");
                paragraph.innerHTML = formattedSuggestions; // Use innerHTML to render the <br> tags
                suggestionsList.appendChild(paragraph);

                // Only show the suggestions list if there is content to show
                if (formattedSuggestions.length > 0) {
                    suggestionsList.classList.remove("hidden");
                }
            });
        // Populate the suggestions list
        data.suggestions.forEach((suggestion) => {
            const li = document.createElement("li");
            li.innerText = suggestion;
            suggestionsUl.appendChild(li);
        });

        suggestionsList.classList.remove("hidden"); // Show the suggestions list
    }

    // Attach an event listener to the input field to handle the Enter key press
    userInput.addEventListener("keydown", function (event) {
        // Check if the key pressed is Enter
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action of the Enter key
            sendInput(); // Call sendInput function
        }
    });

    // Attach a click event listener to the send button
    document.getElementById("send-button").addEventListener("click", sendInput);

    function scrollToBottom() {
        const chatHistory = document.getElementById("chat-history");
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});
