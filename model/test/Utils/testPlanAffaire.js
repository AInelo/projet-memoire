import PlanAffaire from '../../Utils/PlanAffaires/PlanAffaire.js';

// // Créer un nouveau plan d'affaire
// const planAffaire = new PlanAffaire(
//     1,
//     123,
//     'Plan Affaire Technologie',
//     'Technologie',
//     'chemin/vers/le/fichier.pdf',
//     'chemin/vers/le/fichier.docx',
//     'chemin/vers/les/donnees_financieres.csv',
//     'chemin/vers/les/donnees_financieres_traite.csv'
// );

// // Ajouter des sections
// planAffaire.ajouterSection('Présentation du Projet');
// planAffaire.ajouterSection('Analyse de Marché');

// // Ajouter un tableau à la première section
// planAffaire.sections[0].ajouterTableau('Objectifs');
// planAffaire.sections[0].tableaux[0].ajouterLigne();
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 1');
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 2');

// // Ajouter une sous-section à la première section
// planAffaire.sections[0].ajouterSectionContenu('Introduction', 'Description détaillée du projet');

// // Ajouter un tableau à la deuxième section
// planAffaire.sections[1].ajouterTableau('Études de marché');
// planAffaire.sections[1].tableaux[0].ajouterLigne();
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 1');
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 2');

// // Ajouter une sous-section à la deuxième section
// planAffaire.sections[1].ajouterSectionContenu('Résumé', 'Résumé des études de marché');

// console.log(JSON.stringify(planAffaire.afficherPlan(), null, 2));
// console.log(planAffaire)



// Créer un nouveau plan d'affaire
// const planAffaire = new PlanAffaire(
//     1,
//     123,
//     'Plan Affaire Technologie',
//     'Technologie',
//     'chemin/vers/le/fichier.pdf',
//     'chemin/vers/le/fichier.docx',
//     'chemin/vers/les/donnees_financieres.csv',
//     'chemin/vers/les/donnees_financieres_traite.csv'
// );

// // Ajouter des sections
// planAffaire.ajouterSection('Présentation du Projet');
// planAffaire.ajouterSection('Analyse de Marché');

// // Ajouter un tableau à la première section
// planAffaire.sections[0].ajouterTableau('Objectifs');
// planAffaire.sections[0].tableaux[0].ajouterLigne();
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 1');
// planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 2');

// // Ajouter une sous-section à la première section
// planAffaire.sections[0].ajouterSectionContenu('Introduction', 'Description détaillée du projet');

// // Ajouter un tableau à la deuxième section
// planAffaire.sections[1].ajouterTableau('Études de marché');
// planAffaire.sections[1].tableaux[0].ajouterLigne();
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 1');
// planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 2');

// // Ajouter une sous-section à la deuxième section
// planAffaire.sections[1].ajouterSectionContenu('Résumé', 'Résumé des études de marché');

// console.log(JSON.stringify(planAffaire.afficherPlan(), null, 2));
// console.log(planAffaire)
























const planAffaire = new PlanAffaire(
    1,
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

section1.ajouterSectionContenu({
    titreSousSection: 'Introduction',
    contenuSousSection: 'Description détaillée du projet'
});

const section2 = planAffaire.ajouterSection('Analyse de Marché');
const tableau2 = section2.ajouterTableau('Études de marché');

const ligne2_1 = tableau2.ajouterLigne();
ligne2_1.ajouterElementLigne('Analyse 1');
ligne2_1.ajouterElementLigne('Analyse 2');
ligne2_1.ajouterElementLigne('Analyse 3');

const ligne2_2 = tableau2.ajouterLigne();
ligne2_2.ajouterElementLigne('Analyse 4');
ligne2_2.ajouterElementLigne('Analyse 5');

section2.ajouterSectionContenu({
    titreSousSection: 'Résumé',
    contenuSousSection: 'Résumé des études de marché'
});

const section3 = planAffaire.ajouterSection('Plan Financier');
const tableau3 = section3.ajouterTableau('Prévisions financières');

const ligne3_1 = tableau3.ajouterLigne();
ligne3_1.ajouterElementLigne('Prévision 1');
ligne3_1.ajouterElementLigne('Prévision 2');

section3.ajouterSectionContenu({
    titreSousSection: 'Détails Financiers',
    contenuSousSection: 'Description des prévisions financières'
});
console.log(JSON.stringify(planAffaire))
console.log("----------------------------------------------------------")
console.log('Plan d\'affaire en cours de création :', planAffaire);