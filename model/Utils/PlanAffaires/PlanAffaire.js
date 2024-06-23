import Section from "./Section.js";

// class PlanAffaire {
//     constructor(id, titreSection, domaine, donneesFinancieres) {
//         this.id = id;
//         this.domaine = domaine;
//         this.donneesFinancieres = donneesFinancieres;
//         this.sections = [];
//         this.ajouterSection(titreSection); // Créer une section initiale
//     }

//     personnaliserSections(sections) {
//         this.sections = sections;
//     }

//     ajouterSection(titreSection, contenus = []) {
//         const section = new Section(titreSection, contenus);
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


// class PlanAffaire {
//     constructor(id, domaine) {
//         this.id = id;
//         this.domaine = domaine;
//         this.sections = [];
//     }

//     ajouterSection(titreSection) {
//         const section = new Section(titreSection);
//         this.sections.push(section);
//     }

//     afficherSections() {
//         return this.sections.map(section => ({
//             titre: section.titre,
//             tableaux: section.afficherTableaux(),
//             sectionContenus: section.afficherSectionContenus()
//         }));
//     }
// }


// export default PlanAffaire


// class PlanAffaire {
//     constructor(id, entrepreneurId, nom, domaine, cheminAccesPdf, cheminAccesWord, cheminAccesDonneesFinancieres, cheminAccesDonneesFinancieresTraite) {
//         this.id = id;
//         this.entrepreneurId = entrepreneurId;
//         this.nom = nom;
//         this.domaine = domaine;
//         this.cheminAccesPdf = cheminAccesPdf;
//         this.cheminAccesWord = cheminAccesWord;
//         this.cheminAccesDonneesFinancieres = cheminAccesDonneesFinancieres;
//         this.cheminAccesDonneesFinancieresTraite = cheminAccesDonneesFinancieresTraite;
//         this.sections = [];
//     }

//     personnaliserSections(sections) {
//         this.sections = sections;
//     }

//     ajouterSection(titreSection) {
//         const section = new Section(titreSection);
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
//             entrepreneurId: this.entrepreneurId,
//             nom: this.nom,
//             domaine: this.domaine,
//             cheminAccesPdf: this.cheminAccesPdf,
//             cheminAccesWord: this.cheminAccesWord,
//             cheminAccesDonneesFinancieres: this.cheminAccesDonneesFinancieres,
//             cheminAccesDonneesFinancieresTraite: this.cheminAccesDonneesFinancieresTraite,
//             sections: this.sections.map(section => ({
//                 titre: section.titre,
//                 tableaux: section.tableaux.map(tableau => tableau.nomTableau),
//                 sectionContenus: section.sectionContenus.map(content => ({
//                     titreSousSection: content.titreSousSection,
//                     contenuSousSection: content.contenuSousSection
//                 }))
//             }))
//         };
//     }

//     afficherContenuSection(titreSection) {
//         const section = this.sections.find(section => section.titre === titreSection);
//         return section ? section.afficherContenus() : 'Section non trouvée';
//     }
// }



class PlanAffaire {
    constructor(id, entrepreneurId, nom, domaine, cheminAccesPdf, cheminAccesWord, cheminAccesDonneesFinancieres, cheminAccesDonneesFinancieresTraite) {
        this.id = id;
        this.entrepreneurId = entrepreneurId;
        this.nom = nom;
        this.domaine = domaine;
        this.cheminAccesPdf = cheminAccesPdf;
        this.cheminAccesWord = cheminAccesWord;
        this.cheminAccesDonneesFinancieres = cheminAccesDonneesFinancieres;
        this.cheminAccesDonneesFinancieresTraite = cheminAccesDonneesFinancieresTraite;
        this.sections = [];
    }

    personnaliserSections(sections) {
        this.sections = sections;
    }

    ajouterSection(titreSection) {
        const section = new Section(titreSection);
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
            entrepreneurId: this.entrepreneurId,
            nom: this.nom,
            domaine: this.domaine,
            cheminAccesPdf: this.cheminAccesPdf,
            cheminAccesWord: this.cheminAccesWord,
            cheminAccesDonneesFinancieres: this.cheminAccesDonneesFinancieres,
            cheminAccesDonneesFinancieresTraite: this.cheminAccesDonneesFinancieresTraite,
            sections: this.sections.map(section => section.afficherContenus())
        };
    }

    afficherContenuSection(titreSection) {
        const section = this.sections.find(section => section.titre === titreSection);
        return section ? section.afficherContenus() : 'Section non trouvée';
    }
}




export default PlanAffaire;



























// Invoke-WebRequest -Uri "https://media.licdn.com/dms/image/C4D03AQHrE2NfToNKsw/profile-displayphoto-shrink_400_400/0/1640715883525?e=1724284800&v=beta&t=bVPwRn3cUEMs8lViJ4H_B-15cIjSuHgQOfaazn6qWhY" -OutFile "C:\Users\HP\Documents\Project_Contact Saving_DATA\marius.jpg"



// // Exemple d'utilisation

// // Créer un plan d'affaires avec une section initiale
// let plan = new PlanAffaire(1, "Résumé exécutif", "Technologie", { budget: 100000, revenus: 150000, fondDeRoulement: 50000 });

// // Ajouter des contenus à la section initiale
// plan.sections[0].ajouterContenuSection("Introduction de la section");
// plan.sections[0].ajouterContenuSection("Mission du projet");
// plan.sections[0].ajouterContenuSection("Vision de plan du projet");

// // Ajouter une nouvelle section
// plan.ajouterSection("Analyse de marché", ["Marché cible", "Analyse SWOT"]);

// // Afficher les sections du plan d'affaires
// console.log('---------Affichage Des Sections--------------')
// console.log(plan.afficherSections()); // "Résumé exécutif, Analyse de marché"

// // Afficher le plan d'affaires complet
// console.log('------------Affichage du Plan Affaire-------------')
// console.log(plan.afficherPlan());

// // Afficher le contenu d'une section spécifique
// const sectionTitre = "Résumé exécutif";
// console.log("Contenu de la section '" + sectionTitre + "':\n");
// console.log(plan.afficherContenuSection(sectionTitre));
