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

// Ajouter des sections
planAffaire.ajouterSection('Présentation du Projet');
planAffaire.ajouterSection('Analyse de Marché');

// Ajouter un tableau à la première section
planAffaire.sections[0].ajouterTableau('Objectifs');
planAffaire.sections[0].tableaux[0].ajouterLigne();
planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 1');
planAffaire.sections[0].tableaux[0].lignes[0].ajouterElement('Objectif 2');

// Ajouter une sous-section à la première section
planAffaire.sections[0].ajouterSectionContenu('Introduction', 'Description détaillée du projet');

// Ajouter un tableau à la deuxième section
planAffaire.sections[1].ajouterTableau('Études de marché');
planAffaire.sections[1].tableaux[0].ajouterLigne();
planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 1');
planAffaire.sections[1].tableaux[0].lignes[0].ajouterElement('Étude 2');

// Ajouter une sous-section à la deuxième section
planAffaire.sections[1].ajouterSectionContenu('Résumé', 'Résumé des études de marché');

console.log(JSON.stringify(planAffaire.afficherPlan(), null, 2));
console.log(planAffaire)