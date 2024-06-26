// controller/OpenaiTexteController.js
// import OpenaiTexteModel from '../models/OpenaiTexteModel';
import OpenaiTexteModel from "../model/OpenaiTexteModel.js";

const OpenaiTexteController = {
    generateText: async (req, res) => {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Le prompt est requis' });
        }

        try {
            const generatedText = await OpenaiTexteModel.generateText(prompt);
            res.json({ generated_text: generatedText });
        } catch (error) {
            console.error('Erreur lors de la génération du texte :', error);
            res.status(500).json({ error: 'Erreur interne du serveur' });
        }
    }
};

export default OpenaiTexteController;
