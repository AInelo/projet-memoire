// const worker = new Worker
import PlanAffaire from "../PlanAffaires/PlanAffaire.js";
// class Entrepreneur {
//     constructor(id, nom, email, motDePasse) {
//         this.id = id;
//         this.nom = nom;
//         this.email = email;
//         this.motDePasse = motDePasse;
//         this.plansAffaire = [];
//     }

//     saisirDonnees(donnees)  {

//     }

//     personnaliserPlan(plan) {

//     }

//     rechercherModels() {
    
//     }

//     ajouterModels(modele) {

//     }

//     creerPlanAffaire() {
//         const plan = new PlanAffaire();
//         this.plansAffaire.push(plan);
//         return plan;
//     }

//     imprimerPlanAffaire() {

//     }

// }


// import PlanAffaire from './PlanAffaire.js';

class Entrepreneur {
    constructor(id, nom, email, motDePasse) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.plansAffaire = [];
    }

    saisirDonnees(donnees) {
        // Méthode pour saisir des données entrepreneuriales
        console.log("Données saisies:", donnees);
    }

    personnaliserPlan(planId, sections) {
        const plan = this.plansAffaire.find(p => p.id === planId);
        if (plan) {
            plan.personnaliserSections(sections);
        } else {
            console.log('Plan non trouvé');
        }
    }

    rechercherModels() {
        // Méthode pour rechercher des modèles de plans d'affaires
        console.log("Recherche de modèles...");
        // Retourne un tableau de modèles fictifs pour l'exemple
        return [
            { id: 1, nom: 'Modèle 1', domaine: 'Technologie' },
            { id: 2, nom: 'Modèle 2', domaine: 'Commerce' }
        ];
    }

    ajouterModels(modele) {
        // Méthode pour ajouter des modèles de plans d'affaires
        console.log("Modèle ajouté:", modele);
    }

    creerPlanAffaire(titreSection, domaine, donneesFinancieres) {
        const plan = new PlanAffaire(this.plansAffaire.length + 1, titreSection, domaine, donneesFinancieres);
        this.plansAffaire.push(plan);
        return plan;
    }

    imprimerPlanAffaire(planId) {
        const plan = this.plansAffaire.find(p => p.id === planId);
        if (plan) {
            console.log("Plan d'affaires:", plan.afficherPlan());
        } else {
            console.log('Plan non trouvé');
        }
    }
}

export default Entrepreneur;

// Créer un entrepreneur
const entrepreneur = new Entrepreneur(1, 'John Doe', 'john.doe@example.com', 'password123');

// Saisir des données entrepreneuriales
entrepreneur.saisirDonnees({ age: 35, sex: 'M', ifuPersonnel: '1234567890' });

// Créer un plan d'affaires
const plan = entrepreneur.creerPlanAffaire('Résumé exécutif', 'Technologie', { budget: 100000, revenus: 150000, fondDeRoulement: 50000 });

// Ajouter une section au plan d'affaires
plan.ajouterSection('Analyse de marché', ['Marché cible', 'Analyse SWOT']);

// Imprimer le plan d'affaires
entrepreneur.imprimerPlanAffaire(plan.id);

// Rechercher des modèles de plans d'affaires
const models = entrepreneur.rechercherModels();
console.log("Modèles trouvés:", models);

// Ajouter un modèle
entrepreneur.ajouterModels(models[0]);


// const entrepreuneur1 = new Entrepreneur();

// const result = entrepreuneur1.creerPlanAffaire();
// console.log( "the result is" + result)