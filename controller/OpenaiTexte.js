import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    console.error('API key not found. Please add your API key to the .env file.');
    process.exit(1);
}

async function generateText(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 2000
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const generatedText = response.data.choices[0].message.content;
        console.log("Texte généré :", generatedText);
    } catch (error) {
        console.error('Error generating text:', error.response ? error.response.data : error.message);
    }
}

const prompt = `Fourni moi une légère définition du Quadrant magique de Gartner
`

generateText(prompt);
