CREATE TABLE entrepreneur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    motDePasse VARCHAR(255) NOT NULL
);

CREATE TABLE entrepreneur_individuel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    ifu_personnel VARCHAR(255),
    age INT,
    sex CHAR(1),
    FOREIGN KEY (entrepreneur_id) REFERENCES entrepreneur(id)
);

CREATE TABLE collectif_startup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    nom_association VARCHAR(255),
    ifu VARCHAR(255),
    nombre_de_membre INT DEFAULT 0,
    FOREIGN KEY (entrepreneur_id) REFERENCES entrepreneur(id)
);


CREATE TABLE membre_startup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_du_membre VARCHAR(255),
    age INT,
    collectif_id INT,
    FOREIGN KEY (collectif_id) REFERENCES collectif_startup(id)
);



CREATE TABLE plan_affaire (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneur_id INT,
    plan_affaire_nom VARCHAR(255),
    domaine VARCHAR(255),
    chemin_acces_pdf_file VARCHAR(255),
    chemin_acces_word_file VARCHAR(255),
    chemin_acces_donnees_financiere VARCHAR(255),
    chemin_acces_donnees_financiere_traite VARCHAR(255),
    FOREIGN KEY (entrepreneur_id) REFERENCES entrepreneur(id)
);

CREATE TABLE section (
    id INT AUTO_INCREMENT PRIMARY KEY,
    planAffaire_id INT,
    titre VARCHAR(255),
    contenus TEXT,
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

---






CREATE TABLE ExpertFinancier (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    prenoms VARCHAR(255),
    contact VARCHAR(255)
);



CREATE TABLE ModelePlanAffaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255),
    domaine VARCHAR(255)
);


CREATE TABLE UtilisateurModel (
    entrepreneurId INT,
    modelId INT,
    PRIMARY KEY (entrepreneurId, modelId),
    FOREIGN KEY (entrepreneurId) REFERENCES Entrepreneur(id),
    FOREIGN KEY (modelId) REFERENCES ModelePlanAffaires(id)
);
