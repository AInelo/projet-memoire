// const worker = new Worker
import PlanAffaire from "../PlanAffaires/PlanAffaire.js";
import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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


    static async printPlanAffaire(planAffaire) {
        try {
            // const publicDir = join(__dirname, '../../../public/pdf');
            // await fs.mkdir(publicDir, { recursive: true });
            // const pdfFilePath = join(publicDir, `plan_affaire_${planAffaire.id}.pdf`);
            // const output = fs.createWriteStream(pdfFilePath);

            const publicDir = join(__dirname, '../../../public/pdf');

            // Vérifier si le répertoire public existe, sinon le créer
            await fs.mkdir(publicDir, { recursive: true });

            // Chemin complet du fichier PDF de sortie
            const pdfFilePath = join(publicDir, `plan_affaire_${planAffaire.id}.pdf`);

            // Créer un writable stream pour le fichier de sortie
            const output = createWriteStream(pdfFilePath);

            const doc = new PDFDocument();

            // Pipe le document PDF vers le fichier de sortie
            doc.pipe(output);

            // // Ajoute le contenu du plan d'affaire dans le PDF
            // doc.fontSize(20).text(`Plan d'affaire ${planAffaire.id}`, { align: 'center' });
            // doc.moveDown();

            // // Pour chaque section du plan d'affaire
            // planAffaire.sections.forEach(section => {
            //     doc.fontSize(16).text(section.titre, { underline: true });
            //     doc.moveDown();

            //     // Pour chaque tableau dans la section
            //     section.tableaux.forEach(tableau => {
            //         doc.fontSize(14).text(tableau.nom_tableau, { underline: true });
            //         doc.moveDown();

            //         // Construire le tableau avec ses lignes et éléments
            //         tableau.lignes.forEach(ligne => {
            //             // Construction de chaque ligne du tableau
            //             ligne.elements.forEach(element => {
            //                 // Ajouter les éléments du tableau avec des positions et des styles ajustables
            //                 doc.text(element.element, { width: 200, align: 'left' });
            //             });
            //             doc.moveDown();
            //         });

            //         doc.moveDown();
            //     });

            //     doc.moveDown();
            // });

            planAffaire.imprimer(doc);
            // Finaliser le document PDF
            doc.end();


            console.log(`Le fichier PDF pour le plan d'affaire ${planAffaire.id} a été généré avec succès.`);
        } catch (error) {
            console.error('Erreur lors de la génération du fichier PDF :', error);
        }
    }




    static async printPlanAffaireCurrent(planAffaire) {
        // // Créer le chemin de sortie pour le fichier PDF
        // const outputPath = join(__dirname, 'pdf', `plan_affaire_${planAffaire.id}.pdf`);

        // // Créer un writable stream pour le fichier de sortie
        // const output = createWriteStream(outputPath);
        const publicDir = join(__dirname, '../../../public/pdf');

            // Vérifier si le répertoire public existe, sinon le créer
            await fs.mkdir(publicDir, { recursive: true });

            // Chemin complet du fichier PDF de sortie
            const pdfFilePath = join(publicDir, `plan_affaire_${planAffaire.id}.pdf`);

            // Créer un writable stream pour le fichier de sortie
            const output = createWriteStream(pdfFilePath);

        // Créer un nouveau document PDF
        const doc = new PDFDocument();

        // Pipe le document PDF vers le fichier de sortie
        doc.pipe(output);

        // Ajouter le titre du plan d'affaire
        doc.fontSize(30)
           .text(`Plan d'affaire ${planAffaire.nom}`, {
               align: 'center',
               underline: true
           });

        doc.moveDown(2);

        // Itérer sur les sections du plan d'affaire
        planAffaire.sections.forEach(section => {
            // Ajouter le titre de la section
            doc.fontSize(20)
               .text(section.titre, {
                   align: 'center',
                   underline: true
               });

            doc.moveDown(1);

            // Vérifier si la section a des sous-sections
            if (section.sous_sections && section.sous_sections.length > 0) {
                // Itérer sur les sous-sections
                section.sous_sections.forEach(sousSection => {
                    // Ajouter le titre de la sous-section
                    doc.fontSize(16)
                       .text(sousSection.titre_partie, {
                           align: 'left',
                           underline: true
                       });

                    doc.moveDown(0.5);

                    // Ajouter le contenu de la sous-section
                    doc.fontSize(12)
                       .text(sousSection.contenus, {
                           align: 'justify'
                       });

                    doc.moveDown(1);
                });
            }

            // Vérifier si la section a des tableaux
            if (section.tableaux && section.tableaux.length > 0) {
                // Itérer sur les tableaux
                section.tableaux.forEach(tableau => {
                    // Ajouter le titre du tableau
                    doc.fontSize(16)
                       .text(tableau.nom_tableau, {
                           align: 'center',
                           underline: true
                       });

                    doc.moveDown(0.5);

                    // Itérer sur les lignes du tableau
                    tableau.lignes.forEach(ligne => {
                        // Construire une chaîne avec les éléments de la ligne
                        const elements = ligne.elements.map(element => element.element).join(', ');

                        // Ajouter la ligne au tableau
                        doc.fontSize(12)
                           .text(elements, {
                               align: 'left'
                           });

                        doc.moveDown(0.5);
                    });

                    doc.moveDown(1);
                });
            }

            doc.moveDown(1);
        });

        // Finaliser le document PDF
        doc.end();

        console.log(`Le fichier PDF pour le plan d'affaire ${planAffaire.id} a été généré avec succès.`);
    }


    static printPlanAffaireCurrent(planAffaire) {
        // Créer le chemin de sortie pour le fichier PDF
        const outputPath = join(__dirname, 'pdf', `plan_affaire_${planAffaire.id}.pdf`);

        // Créer un writable stream pour le fichier de sortie
        const output = createWriteStream(outputPath);

        // Créer un nouveau document PDF
        const doc = new PDFDocument();

        // Pipe le document PDF vers le fichier de sortie
        doc.pipe(output);

        // Ajouter le titre du plan d'affaire
        doc.fontSize(30)
           .text(`Plan d'affaire ${planAffaire.plan_affaire_nom}`, {
               align: 'center',
               underline: true
           });

        doc.moveDown(2);

        // Itérer sur les sections du plan d'affaire
        planAffaire.sections.forEach(section => {
            // Ajouter le titre de la section
            doc.fontSize(20)
               .text(section.titre, {
                   align: 'center',
                   underline: true
               });

            doc.moveDown(1);

            // Itérer sur les sous-sections
            section.sous_sections.forEach(sousSection => {
                // Ajouter le titre de la sous-section
                doc.fontSize(16)
                   .text(sousSection.titre_partie, {
                       align: 'left',
                       underline: true
                   });

                doc.moveDown(0.5);

                // Ajouter le contenu de la sous-section
                doc.fontSize(12)
                   .text(sousSection.contenus, {
                       align: 'justify'
                   });

                doc.moveDown(1);
            });

            // Itérer sur les tableaux
            section.tableaux.forEach(tableau => {
                // Ajouter le titre du tableau
                doc.fontSize(16)
                   .text(tableau.nom_tableau, {
                       align: 'center',
                       underline: true
                   });

                doc.moveDown(0.5);

                // Itérer sur les lignes du tableau
                tableau.lignes.forEach(ligne => {
                    // Construire une chaîne avec les éléments de la ligne
                    const elements = ligne.elements.map(element => element.element).join(', ');

                    // Ajouter la ligne au tableau
                    doc.fontSize(12)
                       .text(elements, {
                           align: 'left'
                       });

                    doc.moveDown(0.5);
                });

                doc.moveDown(1);
            });

            doc.moveDown(1);
        });

        // Finaliser le document PDF
        doc.end();

        console.log(`Le fichier PDF pour le plan d'affaire ${planAffaire.id} a été généré avec succès.`);
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