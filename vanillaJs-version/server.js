// import express, { static } from "express";
import express from 'express';
import { join } from "path";
import fileupload from "express-fileupload";
import browserSync from "browser-sync";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// dotenv.config();
// const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

// // Charger les variables d'environnement
// dotenv.config();

// Définir __dirname en utilisant import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let initial_path = join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));app.use(fileupload());
app.use(express.json());

import plan_affaire from './routes/PlanAffaireRoutes.js';
import openai from './routes/openaiRoutes.js'

app.use('/plan', plan_affaire)
app.use('/api-openai', openai)




app.use((req, res) => {
  res.status(404).json("Not Found.");
});

app.use((req, res) => {
  res.json("404");
});

const ipAdress = "192.168.1.247";
const port = 4000;
const Port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Le serveur tourne aussi sur: http://localhost:${port} `);

  // browserSync({
  //   proxy: `http://${ipAdress}:${Port}`,
  //   files: ["public/*"],
  //   port: Port + 1,
  //   open: false
  // });

})
