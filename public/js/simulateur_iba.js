                                            // Formule  LM * 12 * 0.12 
const montantLoyer = document.getElementById('montantLoyer');
const voletResultatPrevision = document.getElementById('voletResultatPrevision');
const btnCalcul = document.getElementById('irfCalculer');
const voletResultatPrevision5 = document.getElementById('voletResultatPrevision5');
const voletResultatPrevision10 = document.getElementById('voletResultatPrevision10');

const taux = 0.12;
const resultat = montantLoyer * 12 * taux;

document.addEventListener("DOMContentLoaded", function () {

    btnCalcul.addEventListener("click", function () {
        const montantLoyerValue = parseFloat(montantLoyer.value);

        if (!isNaN(montantLoyerValue)) {
            const machineCalcul = document.getElementById('machineCalcul');
            const resultatPrevision = document.getElementById('resultatPrevision');

            const resultat = (montantLoyerValue * 12 * taux) + 4000;
            const resultat5 = resultat*5;
            const resultat10 = resultat*10;
            
             // Efface le contenu précédent
             voletResultatPrevision.innerHTML = '';

              textToInsert = `${resultat} FCFA`;
              textToInsert5 = `${resultat5} FCFA`;
              textToInsert10 = `${resultat10} FCFA`;

             voletResultatPrevision.insertAdjacentHTML("beforeend", textToInsert);
             voletResultatPrevision5.insertAdjacentHTML("beforeend", textToInsert5);
             voletResultatPrevision10.insertAdjacentHTML("beforeend", textToInsert10);
            
             // POUR FAIRE DISPARAITRE L'input
             machineCalcul.style.display = "none";
             resultatPrevision.style.display = "block";
              // Réinitialise le champ d'entrée
              
            montantLoyer.value = '';
        } else {
            voletResultatPrevision.textContent = "Veuillez entrer un montant de loyer valide.";
        }
    } )

} )
document.addEventListener("DOMContentLoaded", function () {
        // Votre code JavaScript ici
        const btnRepriseIrfCalculer = document.getElementById('repriseIrfCalculer');
    
        const machineCalcul = document.getElementById('machineCalcul');
        const resultatPrevision = document.getElementById('resultatPrevision');
       
        btnRepriseIrfCalculer.addEventListener("click", function () {
                machineCalcul.style.display = "block";
                resultatPrevision.style.display = "none" ;
                
            });
    
    });
    







                                // POUR AVOIR UNE DESCRIPTION ET DES INFOS SUR L'IMPOT

document.addEventListener("DOMContentLoaded", function () {
    const btnDescription = document.getElementById('btnDescription');
    const btnPersonneImposable = document.getElementById('btnPersonneImposable');
    const btnPersonneExonere = document.getElementById('btnPersonneExonere');
    const btnModeCalcul = document.getElementById('btnModeCalcul');

    const volets = {
        description: document.getElementById('description'),
        personneImposable: document.getElementById('personneImposable'),
        personneExonere: document.getElementById('personneExonere'),
        modeDeCalcul: document.getElementById('modeDeCalcul'),
    };

    function afficherVolet(volet) {
        for (const key in volets) {
            volets[key].style.display = key === volet ? "block" : "none";
        }
    }

    btnDescription.addEventListener("click", function () {
        afficherVolet("description");
    });

    btnPersonneImposable.addEventListener("click", function () {
        afficherVolet("personneImposable");
    });

    btnPersonneExonere.addEventListener("click", function () {
        afficherVolet("personneExonere");
    });

    btnModeCalcul.addEventListener("click", function () {
        afficherVolet("modeDeCalcul");
    });
});



















// const btnDescription = document.getElementById('btnDescription');
// const btnPersonneImposable = document.getElementById('btnPersonneImposable');
// const btnPersonneExonere = document.getElementById('btnPersonneExonere');
// const btnModeCalcul = document.getElementById('btnModeCalcul');


// const voletmodeDeCalcul = document.getElementById('modeDeCalcul');
// const voletDescription = document.getElementById('description');
// const voletPersonneImposable = document.getElementById('personneImposable');
// const voletPersonneExonere = document.getElementById('personneExonere');


// // POUR AFFICHER LA DESCRIPTION DE L'IMPOT


// document.addEventListener("DOMContentLoaded", function () {
    
//     const btnDescription = document.getElementById('btnDescription');

    
//     const voletmodeDeCalcul = document.getElementById('modeDeCalcul');
//     const voletDescription = document.getElementById('description');
//     const voletPersonneImposable = document.getElementById('personneImposable');
//     const voletPersonneExonere = document.getElementById('personneExonere');
   
//         btnDescription.addEventListener("click", function () {
//             voletmodeDeCalcul.style.display = "none";
//             voletDescription.style.display = "block" ;
//             voletPersonneImposable.style.display = "none";
//             voletPersonneExonere.style.display = "none";
//         });
// });






// // POUR AFFICHER LES PERSONNES IMPOSABLES 

// document.addEventListener("DOMContentLoaded", function () {
//     // Votre code JavaScript ici
//     const btnPersonneImposable = document.getElementById('btnPersonneImposable');

//     const voletmodeDeCalcul = document.getElementById('modeDeCalcul');
//     const voletDescription = document.getElementById('description');
//     const voletPersonneImposable = document.getElementById('personneImposable');
//     const voletPersonneExonere = document.getElementById('personneExonere');
   
//         btnPersonneImposable.addEventListener("click", function () {
//             voletmodeDeCalcul.style.display = "none";
//             voletDescription.style.display = "none" ;
//             voletPersonneImposable.style.display = "block";
//             voletPersonneExonere.style.display = "none";
//         });

// });




// // POUR AFFICHER LES PERSONNES EXONERES

// document.addEventListener("DOMContentLoaded", function () {
//     // Votre code JavaScript ici
//     const btnPersonneExonere = document.getElementById('btnPersonneExonere');

//     const voletmodeDeCalcul = document.getElementById('modeDeCalcul');
//     const voletDescription = document.getElementById('description');
//     const voletPersonneImposable = document.getElementById('personneImposable');
//     const voletPersonneExonere = document.getElementById('personneExonere');
   
//         btnPersonneExonere.addEventListener("click", function () {
//             voletmodeDeCalcul.style.display = "none";
//             voletDescription.style.display = "none" ;
//             voletPersonneImposable.style.display = "none";
//             voletPersonneExonere.style.display = "block";
//         });

// });




// // POUR AFFICHER LE MODE DE CALCUL

// document.addEventListener("DOMContentLoaded", function () {
//     // Votre code JavaScript ici
//     const btnModeCalcul = document.getElementById('btnModeCalcul');

//     const voletmodeDeCalcul = document.getElementById('modeDeCalcul');
//     const voletDescription = document.getElementById('description');
//     const voletPersonneImposable = document.getElementById('personneImposable');
//     const voletPersonneExonere = document.getElementById('personneExonere');
   
//         btnModeCalcul.addEventListener("click", function () {
//             voletmodeDeCalcul.style.display = "block";
//             voletDescription.style.display = "none" ;
//             voletPersonneImposable.style.display = "none";
//             voletPersonneExonere.style.display = "none";
//         });
// });
