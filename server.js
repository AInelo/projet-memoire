// import express, { static } from "express";
import express from 'express';
import { join } from "path";
import fileupload from "express-fileupload";
import browserSync from "browser-sync";
import path from 'path';
import { fileURLToPath } from 'url';

// // Charger les variables d'environnement
// dotenv.config();

// Définir __dirname en utilisant import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let initial_path = join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));app.use(fileupload());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(initial_path, "index.html"));
// })
// app.get("/simulateur", (req, res) => {
//   res.sendFile(join(initial_path, "simulation.html"));
// });

// app.get("/Administrateur", (req, res) => {
//   res.sendFile(join(initial_path, "Administrator.html"));
// });

// app.get("/simulateur_irf", (req, res) => {
//   res.sendFile(join(initial_path, "simulateur_irf.html"));
// });

// app.get("/simulateur_iba", (req, res) => {
//   res.sendFile(join(initial_path, "simulateur_iba.html"));
// });

// app.get("/simulateur_vps", (req, res) => {
//   res.sendFile(join(initial_path, "simulateur_vps.html"));
// });

// app.get("/simulateur_is", (req, res) => {
//   res.sendFile(join(initial_path, "simulateur_is.html"));
// });

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
