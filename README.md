# MindPal+

# MindPal+ Mental Health Chatbot

**MindPal+** is a responsive, AI-powered mental health chatbot designed to provide supportive conversations, suggestions, and resources to users. Built with **Flask**, **OpenAI's GPT-3.5-turbo**, and **JavaScript**, this chatbot includes features such as mood tracking, actionable suggestions, and interactive mental health resources.

---

## **Features**
- **AI-Powered Chat:** Engage in conversations with MindPal+, an empathetic mental health chatbot.
- **Mood Tracker:** Users can log their daily moods and view summaries or visual reports.
- **Actionable Suggestions:** Based on user input, the chatbot provides personalized strategies for improving mental well-being.
- **Mental Health Resources:** Links and coping strategies for common mental health concerns like anxiety, depression, and stress.
- **Interactive UI:** Styled with **Tailwind CSS**, the interface offers a modern, user-friendly experience.
- **Dynamic Visualizations:** Bar charts summarizing mood data for better insights.

---

## **Technologies Used**
- **Backend:**
  - Flask
  - Python
  - OpenAI API (GPT-3.5-turbo for chatbot responses)
- **Frontend:**
  - HTML5, CSS3
  - Tailwind CSS
  - Animate.css
  - JavaScript (ES6+)
- **Visualization:**
  - Chart.js for mood reports
- **Environment Management:**
  - `python-dotenv` for secure API key handling
- **Database:**
  - LocalStorage (for mood data persistence)

---

## **Setup Instructions**
### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/mindpal-chatbot.git
cd mindpal-chatbot
```

### **2. Set Up Environment Variables**
1. Create a `.env` file in the root directory.
2. Add your OpenAI API key:
   ```plaintext
   OPENAI_API_KEY=your_openai_api_key
   ```

### **3. Install Dependencies**
```bash
pip install -r requirements.txt
```

### **4. Run the Application**
Start the Flask development server:
```bash
python app.py
```

Visit `http://127.0.0.1:5000` in your browser to interact with the chatbot.

---

## **Usage**
### **Chat Interface**
1. Start a conversation with MindPal+ by typing a message.
2. Receive supportive, AI-generated responses based on your input.
3. Suggestions appear dynamically after multiple similar responses.

### **Mood Tracker**
1. Log your daily mood by selecting one of the mood buttons (e.g., Happy, Neutral, Sad, Angry).
2. Generate a summary report or view visualized data to analyze your mood trends over time.

### **Resources**
Access curated links and coping strategies for managing mental health challenges:
- [Anxiety Resources](https://www.mentalhealth.gov/anxiety)
- [Depression Resources](https://www.mentalhealth.gov/depression)
- [Stress Resources](https://www.mentalhealth.gov/stress)


## **Security**
- **Environment Variables:** Sensitive information (e.g., API keys) is securely stored in a `.env` file and loaded using `python-dotenv`.
- **.gitignore:** Ensures `.env` and other sensitive files are excluded from version control.

---

## **Future Enhancements**
- Integration with more APIs for expanded resources.
- Multi-language support.
- A comprehensive database for user history and progress tracking.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Acknowledgments**
- **OpenAI** for providing GPT-3.5-turbo.
- **Chart.js** for interactive data visualizations.
- **Tailwind CSS** for elegant UI styling.

---

Feel free to suggest or contribute to making **MindPal+** a more supportive mental health tool for everyone! ❤️
