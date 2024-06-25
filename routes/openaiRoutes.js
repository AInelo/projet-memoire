// routes/api.js
import express from 'express';
// import OpenaiTexteController from '../controller/OpenaiTexteController';
import OpenaiTexteController from '../controller/OpenaiTexte.js';
const router = express.Router();

router.post('/generate-text', OpenaiTexteController.generateText);

export default router;
