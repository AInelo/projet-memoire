// Tableau.js
// import Lignes from "./Lignes";
// import ElementLigne from './ElementLigne.js';

import Ligne from './Line.js';

// class Ligne {
//     constructor() {
//         this.elements = [];
//     }

//     ajouterElement(element) {
//         const elementLigne = new ElementLigne(element);
//         this.elements.push(elementLigne);
//     }

//     supprimerElement(index) {
//         this.elements.splice(index, 1);
//     }

//     afficherElements() {
//         return this.elements.map(element => element.afficherElement()).join(', ');
//     }
// }





// class Tableau {
//     constructor(nomTableau) {
//         this.nomTableau = nomTableau;
//         this.lignes = [];
//     }

//     ajouterLigne(ligneElement) {
//         const ligne = new Ligne();
//         ligne.ajouterElement(ligneElement);
//         this.lignes.push(ligne);
//     }

//     supprimerLigne(index) {
//         this.lignes.splice(index, 1);
//     }

//     afficherLignes() {
//         return this.lignes.map(ligne => ligne.afficherElements()).join(', ');
//     }
// }


// class Tableau {
//     constructor(nomTableau) {
//         this.nomTableau = nomTableau;
//         this.lignes = [];
//     }

//     ajouterLigne() {
//         const ligne = new Ligne();
//         this.lignes.push(ligne);
//         return ligne
//     }

//     afficherDetails() {
//         return {
//             nomTableau: this.nomTableau,
//             lignes: this.lignes.map(ligne => ligne.afficherElements())
//         };
//     }
// }



class Tableau {
    constructor(nomTableau) {
        this.nomTableau = nomTableau;
        this.lignes = [];
    }

    ajouterLigne(elements) {
        const ligne = new Ligne(elements); // Assurez-vous que Ligne reçoit des éléments
        this.lignes.push(ligne);
        return ligne;
    }

    afficherDetails() {
        return {
            nomTableau: this.nomTableau,
            lignes: this.lignes.map(ligne => ligne.afficherElements())
        };
    }

    imprimer(doc) {
        doc.fontSize(14).text(this.nomTableau, { underline: true });
        doc.moveDown();

        const tableTop = doc.y;
        const cellPadding = 5;
        const colWidths = [100, 100, 100]; // Largeurs des colonnes (adapter selon le contenu)

        // Imprimer chaque ligne du tableau
        this.lignes.forEach((ligne, rowIndex) => {
            ligne.elements.forEach((element, colIndex) => {
                const x = doc.x + colWidths.slice(0, colIndex).reduce((a, b) => a + b, 0);
                const y = tableTop + (rowIndex * 20);
                const width = colWidths[colIndex];

                doc.rect(x, y, width, 20).stroke();
                doc.text(element.afficherElement(), x + cellPadding, y + cellPadding, {
                    width: width - 2 * cellPadding,
                    height: 20 - 2 * cellPadding,
                    ellipsis: true
                });
            });
        });

        doc.moveDown();
    }

    // imprimer(doc) {
    //     doc.fontSize(14).text(this.nomTableau, { underline: true });
    //     doc.moveDown();

    //     this.lignes.forEach(ligne => {
    //         ligne.imprimer(doc);
    //     });

    //     doc.moveDown();
    // }

}


export default Tableau;