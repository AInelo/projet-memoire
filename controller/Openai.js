import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// Charger la clé API depuis le fichier .env
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    console.error('API key not found. Please add your API key to the .env file.');
    process.exit(1);
}

// Fonction pour créer une image en utilisant l'API OpenAI
async function createImage(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                prompt: prompt,
                n: 1,
                size: "1024x1024"
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const imageUrl = response.data.data[0].url;
        console.log("URL de l'image générée :", imageUrl);
    } catch (error) {
        console.error('Error generating image:', error.response ? error.response.data : error.message);
    }
}

// Prompt à utiliser pour générer l'image
const prompt = "Je suis un artisant graphiste béninois, et j'ai besoin d'inspiration pour mettre en valeur la femme béninoise dans sa valeur culturel intrinsèque. Fourni moi l'image pour m'inspirer";

// Appeler la fonction pour créer l'image
createImage(prompt);
