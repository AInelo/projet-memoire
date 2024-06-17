

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

//     afficherContenus() {
//         return this.contenus.join(', ');
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

//     supprimerSection(titreSection) {
//         this.sections = this.sections.filter(section => section.titre !== titreSection);
//     }

//     afficherSections() {
//         return this.sections.map(section => section.titre).join(', ');
//     }

//     afficherPlan() {
//         return {
//             id: this.id,
//             section: this.section,
//             domaine: this.domaine,
//             donneesFinancieres: this.donneesFinancieres,
//             sections: this.sections.map(section => ({
//                 titre: section.titre,
//                 contenus: section.afficherContenus()
//             }))
//         };
//     }

//     afficherContenuSection(titreSection) {
//         const section = this.sections.find(section => section.titre === titreSection);
//         return section ? section.afficherContenus() : 'Section non trouvée';
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
    constructor(id, titreSection, domaine, donneesFinancieres) {
        this.id = id;
        this.domaine = domaine;
        this.donneesFinancieres = donneesFinancieres;
        this.sections = [];
        this.ajouterSection(titreSection); // Créer une section initiale
    }

    personnaliserSections(sections) {
        this.sections = sections;
    }

    ajouterSection(titreSection, contenus = []) {
        const section = new Sections(titreSection, contenus);
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
            domaine: this.domaine,
            donneesFinancieres: this.donneesFinancieres,
            sections: this.sections.map(section => ({
                titre: section.titre,
                contenus: section.afficherContenus()
            }))
        };
    }

    afficherContenuSection(titreSection) {
        const section = this.sections.find(section => section.titre === titreSection);
        return section ? section.afficherContenus() : 'Section non trouvée';
    }
}


// Invoke-WebRequest -Uri "https://media.licdn.com/dms/image/C4D03AQHrE2NfToNKsw/profile-displayphoto-shrink_400_400/0/1640715883525?e=1724284800&v=beta&t=bVPwRn3cUEMs8lViJ4H_B-15cIjSuHgQOfaazn6qWhY" -OutFile "C:\Users\HP\Documents\Project_Contact Saving_DATA\marius.jpg"



// Exemple d'utilisation

// Créer un plan d'affaires avec une section initiale
let plan = new PlanAffaires(1, "Résumé exécutif", "Technologie", { budget: 100000, revenus: 150000, fondDeRoulement: 50000 });

// Ajouter des contenus à la section initiale
plan.sections[0].ajouterContenuSection("Introduction de la section");
plan.sections[0].ajouterContenuSection("Mission du projet");
plan.sections[0].ajouterContenuSection("Vision de plan du projet");

// Ajouter une nouvelle section
plan.ajouterSection("Analyse de marché", ["Marché cible", "Analyse SWOT"]);

// Afficher les sections du plan d'affaires
console.log('---------Affichage Des Sections--------------')
console.log(plan.afficherSections()); // "Résumé exécutif, Analyse de marché"

// Afficher le plan d'affaires complet
console.log('------------Affichage du Plan Affaire-------------')
console.log(plan.afficherPlan());

// Afficher le contenu d'une section spécifique
const sectionTitre = "Résumé exécutif";
console.log("Contenu de la section '" + sectionTitre + "':\n");
console.log(plan.afficherContenuSection(sectionTitre));
