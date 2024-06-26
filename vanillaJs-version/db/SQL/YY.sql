DROP DATABASE business;

CREATE DATABASE business;

USE business;

CREATE TABLE plan_affaire (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    plan_affaire_nom VARCHAR(255),
    domaine VARCHAR(255),
    chemin_acces_pdf_file VARCHAR(255),
    chemin_acces_word_file VARCHAR(255),
    chemin_acces_donnees_financiere VARCHAR(255),
    chemin_acces_donnees_financiere_traite VARCHAR(255) 
);


CREATE TABLE section (
    id INT AUTO_INCREMENT PRIMARY KEY,
    planAffaire_id INT,
    titre VARCHAR(255),
    FOREIGN KEY (planAffaire_id) REFERENCES plan_affaire(id)
);


CREATE TABLE contenus_sous_section (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre_partie TEXT,
    contenus TEXT,
    section_id INT,
    FOREIGN KEY (section_id) REFERENCES section(id)
);

CREATE TABLE tableau (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_tableau VARCHAR(255),
    section_id INT,
    FOREIGN KEY (section_id) REFERENCES section(id)
);


CREATE TABLE ligne (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tableau_id INT,
    FOREIGN KEY (tableau_id) REFERENCES tableau(id)
);

CREATE TABLE element_ligne (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ligne_id INT,
    element TEXT,
    FOREIGN KEY (ligne_id) REFERENCES ligne(id)
);