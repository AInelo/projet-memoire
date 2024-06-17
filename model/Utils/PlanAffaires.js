// class Sections {
//     constructor(titre, contenus = []) {
//         this.titre = titre;
//         this.contenus = contenus;
//     }

//     ajouterContenuSection(contenu) {
//         this.contenus.push(contenu);
//     }

//     supprimerContenu(contenu) {
//         const index = this.contenus.indexOf(contenu);
//         if (index > -1) {
//             this.contenus.splice(index, 1);
//         }
//     }
// }

// class PlanAffaires {
//     constructor(id, section, domaine, donneesFinancieres) {
//         this.id = id;
//         this.section = section;
//         this.domaine = domaine;
//         this.donneesFinancieres = donneesFinancieres;
//         this.sections = [];
//     }

//     personnaliserSections(sections) {
//         this.sections = sections;
//     }

//     ajouterSection(section) {
//         this.sections.push(section);
//     }
// }


class Sections {
    constructor(titre, contenus = []) {
        this.titre = titre;
        this.contenus = contenus;
    }

    ajouterContenuSection(contenu) {
        this.contenus.push(contenu);
    }

    supprimerContenu(contenu) {
        const index = this.contenus.indexOf(contenu);
        if (index > -1) {
            this.contenus.splice(index, 1);
        }
    }

    afficherContenus() {
        return this.contenus.join(', ');
    }
}


class PlanAffaires {
    constructor(id, section, domaine, donneesFinancieres) {
        this.id = id;
        this.section = section;
        this.domaine = domaine;
        this.donneesFinancieres = donneesFinancieres;
        this.sections = [];
    }

    personnaliserSections(sections) {
        this.sections = sections;
    }

    ajouterSection(section) {
        this.sections.push(section);
    }

    supprimerSection(titreSection) {
        this.sections = this.sections.filter(section => section.titre !== titreSection);
    }

    afficherSections() {
        return this.sections.map(section => section.titre).join(', ');
    }

    afficherPlan() {
        return {
            id: this.id,
            section: this.section,
            domaine: this.domaine,
            donneesFinancieres: this.donneesFinancieres,
            sections: this.sections.map(section => ({
                titre: section.titre,
                contenus: section.afficherContenus()
            }))
        };
    }
}


// Créer des sections
let section1 = new Sections("Résumé exécutif", ["Introduction", "Mission", "Vision"]);
let section2 = new Sections("Analyse de marché", ["Marché cible", "Analyse SWOT"]);

// Créer un plan d'affaires
let plan = new PlanAffaires(1, "Section principale", "Technologie", { budget: 100000, revenus: 150000, fondDeRoulement: 50000 });

// Ajouter des sections au plan d'affaires
plan.ajouterSection(section1);
plan.ajouterSection(section2);

// Personnaliser les sections (remplacer toutes les sections actuelles)
let section3 = new Sections("Plan de marketing", ["Stratégie de marketing", "Budget marketing"]);
plan.personnaliserSections([section1, section3]);

// Afficher les sections du plan d'affaires
// console.log(plan.afficherSections()); // "Résumé exécutif, Plan de marketing"

// Afficher le plan d'affaires complet
console.log(plan.afficherPlan());
const result = plan.afficherPlan();
console.log("-------------------------------------------------")
console.log(result.donneesFinancieres);
