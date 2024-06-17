// const worker = new Worker

class Entrepreneur {
    constructor(id, nom, email, motDePasse) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.plansAffaire = [];
    }

    saisirDonnees(donnees)  {

    }

    personnaliserPlan(plan) {
        // Logique pour personnaliser le plan
    }

    rechercherModels() {
        // Logique pour rechercher des modèles
    }

    ajouterModels(modele) {
        // Logique pour ajouter des modèles
    }

    creerPlanAffaire() {
        const plan = new PlanAffaires();
        this.plansAffaire.push(plan);
        return plan;
    }

}