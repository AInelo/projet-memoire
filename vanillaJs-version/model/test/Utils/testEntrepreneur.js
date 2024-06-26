import Entrepreneur from "../../Utils/Entrepreneur/Entrepreneur.js";
import PlanAffaire from "../../Utils/PlanAffaires/PlanAffaire.js";

const planAffaire = new PlanAffaire(
    3,
    123,
    'Plan Affaire Technologie',
    'Technologie',
    'chemin/vers/le/fichier.pdf',
    'chemin/vers/le/fichier.docx',
    'chemin/vers/les/donnees_financieres.csv',
    'chemin/vers/les/donnees_financieres_traite.csv'
);

const section1 = planAffaire.ajouterSection('Présentation du Projet');
const tableau1 = section1.ajouterTableau('Objectifs');

const ligne1_1 = tableau1.ajouterLigne();
ligne1_1.ajouterElementLigne('Objectif 1');
ligne1_1.ajouterElementLigne('Objectif 2');
ligne1_1.ajouterElementLigne('Objectif 3');

const ligne1_2 = tableau1.ajouterLigne();
ligne1_2.ajouterElementLigne('Objectif 4');
ligne1_2.ajouterElementLigne('Objectif 5');

section1.ajouterSectionContenu(
    'Introduction',
     'Description détaillée du projet'
);
const section2 = planAffaire.ajouterSection('Analyse de Marché');
const tableau2 = section2.ajouterTableau('Études de marché');

const ligne2_1 = tableau2.ajouterLigne();
ligne2_1.ajouterElementLigne('Analyse 1');
ligne2_1.ajouterElementLigne('Analyse 2');
ligne2_1.ajouterElementLigne('Analyse 3');

const ligne2_2 = tableau2.ajouterLigne();
ligne2_2.ajouterElementLigne('Analyse 4');
ligne2_2.ajouterElementLigne('Analyse 5');


section2.ajouterSectionContenu(
    'Résumé',
   'Résumé des études de marché'
);

const section3 = planAffaire.ajouterSection('Plan Financier');
const tableau3 = section3.ajouterTableau('Prévisions financières');

const ligne3_1 = tableau3.ajouterLigne();
ligne3_1.ajouterElementLigne('Prévision 1');
ligne3_1.ajouterElementLigne('Prévision 2');


section3.ajouterSectionContenu(
    'Détails Financiers',
    'Description des prévisions financières'
);

Entrepreneur.printPlanAffaire(planAffaire);
