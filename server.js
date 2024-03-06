const express = require("express");
const path = require("path");
const fileupload = require("express-fileupload");

let initial_path = path.join(__dirname, "public");

const app = express();

app.use(express.static(initial_path));
app.use(fileupload());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(initial_path, "index.html"));
// })
app.get("/simulateur", (req, res) => {
  res.sendFile(path.join(initial_path, "simulation.html"));
});

app.get("/Administrateur", (req, res) => {
  res.sendFile(path.join(initial_path, "Administrator.html"));
});

app.get("/simulateur_irf", (req, res) => {
  res.sendFile(path.join(initial_path, "simulateur_irf.html"));
});

app.get("/simulateur_iba", (req, res) => {
  res.sendFile(path.join(initial_path, "simulateur_iba.html"));
});

app.get("/simulateur_vps", (req, res) => {
  res.sendFile(path.join(initial_path, "simulateur_vps.html"));
});

app.get("/simulateur_is", (req, res) => {
  res.sendFile(path.join(initial_path, "simulateur_is.html"));
});

app.use((req, res) => {
  res.status(404).json("Not Found.");
});

app.use((req, res) => {
  res.json("404");
});

const ipAdress = "10.61.16.247";
const port = 4000;
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Le serveur écoute sur localhost:${Port}.....`);
});
