// import PlanAffaire from './PlanAffaires/PlanAffaire.js';
import PlanAffaire from '../../Utils/PlanAffaires/PlanAffaire.js';
// import PlanAffaireModel from './PlanAffaireModel.js';
import PlanAffaireModel from '../../bases/PlanAffaires/PlanAffaireModel.js';

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

// Ajoutez des sections, des tableaux, des lignes et des éléments à votre plan d'affaire

const planAffaireModel = new PlanAffaireModel();
planAffaireModel.createPlanAffaire(planAffaire)
    .then(planAffaireId => {
        console.log(`Plan d'affaire créé avec l'ID: ${planAffaireId}`);
    })
    .catch(error => {
        console.error('Erreur lors de la création du plan d\'affaire', error);
    });
