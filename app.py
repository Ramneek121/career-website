from flask import Flask, render_template, request, jsonify
import pandas as pd
import openai
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

resources_df = pd.DataFrame({
    'category': ['anxiety', 'depression', 'stress'],
    'resources': [
        'https://www.mentalhealth.gov/anxiety',
        'https://www.mentalhealth.gov/depression',
        'https://www.mentalhealth.gov/stress'
    ],
    'coping_strategies': ['Deep breathing exercises', 'Journaling', 'Physical activity']
})

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/generate-response', methods=['POST'])
def generate_response():
    user_input = request.json.get('user_input')
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "You are a supportive mental health chatbot."},
                  {"role": "user", "content": user_input}],
        max_tokens=150
    )
    message = response.choices[0].message.content.strip()
    return jsonify(message=message)

@app.route('/get_suggestions', methods=['POST'])
def get_suggestions():
    user_message = request.json.get('message')

    # Generate suggestions based on user input
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a supportive mental health coach."},
            {"role": "user", "content": f"Based on this input, provide actionable suggestions for improvement: {user_message}"}
        ],
        max_tokens=250
    )

    suggestions = response.choices[0].message.content.strip().split("\n")

    return jsonify(suggestions=suggestions)
    

if __name__ == '__main__':
    app.run(debug=True)


