CREATE TABLE Entrepreneur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    motDePasse VARCHAR(255) NOT NULL
);

CREATE TABLE EntrepreneurIndividuel (
    id INT PRIMARY KEY,
    ifuPersonnel VARCHAR(255),
    age INT,
    sex CHAR(1),
    FOREIGN KEY (id) REFERENCES Entrepreneur(id)
);



CREATE TABLE CollectifStartup (
    id INT PRIMARY KEY,
    nomAssociation VARCHAR(255),
    ifu VARCHAR(255),
    nombreDeMembre INT DEFAULT 0,
    FOREIGN KEY (id) REFERENCES Entrepreneur(id)
);


CREATE TABLE MembreStartup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomDuMembre VARCHAR(255),
    age INT,
    collectifId INT,
    FOREIGN KEY (collectifId) REFERENCES CollectifStartup(id)
);


CREATE TABLE PlanAffaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entrepreneurId INT,
    section VARCHAR(255),
    domaine VARCHAR(255),
    donneesFinancieres TEXT,
    FOREIGN KEY (entrepreneurId) REFERENCES Entrepreneur(id)
);



CREATE TABLE Sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    planAffairesId INT,
    titre VARCHAR(255),
    contenus TEXT,
    FOREIGN KEY (planAffairesId) REFERENCES PlanAffaires(id)
);


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
