// models/OpenaiTexteModel.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    console.error('API key not found. Please add your API key to the .env file.');
    process.exit(1);
}

const OpenaiTexteModel = {
    generateText: async (prompt) => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
                {
                    prompt: prompt,
                    max_tokens: 200
                },
                {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const generatedText = response.data.choices[0].text;
            return generatedText;
        } catch (error) {
            console.error('Error generating text:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export default OpenaiTexteModel;
