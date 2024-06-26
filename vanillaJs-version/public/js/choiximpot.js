const btnParticulier = document.getElementById('impotParticulier');
const btnEntreprise = document.getElementById('impotEntreprise');
const btnOng = document.getElementById('impotOng');

const voletParticulier = document.querySelector('.voletParticulier');
const voletEntreprise = document.querySelector('.voletEntreprise');
const voletOng = document.querySelector('.voletOng');


// POUR AFFICHER LES IMPOTS POUR LES PARTICULIER 


document.addEventListener("DOMContentLoaded", function () {
    // Votre code JavaScript ici
    const btnParticulier = document.getElementById('impotParticulier');

    const voletParticulier = document.querySelector('.voletParticulier');
    const voletEntreprise = document.querySelector('.voletEntreprise');
    const voletOng = document.querySelector('.voletOng');
   
        btnParticulier.addEventListener("click", function () {
            // Votre gestionnaire d'événements ici
            voletParticulier.style.display = "block";
            voletEntreprise.style.display = "none" ;
            voletOng.style.display = "none";
        });

});






// POUR AFFICHER LES IMPOTS DES ENTREPRISES 

document.addEventListener("DOMContentLoaded", function () {
    // Votre code JavaScript ici
    const btnEntreprise = document.getElementById('impotEntreprise');

    const voletParticulier = document.querySelector('.voletParticulier');
    const voletEntreprise = document.querySelector('.voletEntreprise');
    const voletOng = document.querySelector('.voletOng');
   
        btnEntreprise.addEventListener("click", function () {
            // Votre gestionnaire d'événements ici
            voletParticulier.style.display = "none";
            voletEntreprise.style.display = "block" ;
            voletOng.style.display = "none";
        });

});




// POUR AFFICHER LES IMPOTS DES ONGs

document.addEventListener("DOMContentLoaded", function () {
    // Votre code JavaScript ici
    const btnOng = document.getElementById('impotOng');

    const voletParticulier = document.querySelector('.voletParticulier');
    const voletEntreprise = document.querySelector('.voletEntreprise');
    const voletOng = document.querySelector('.voletOng');
   
        btnOng.addEventListener("click", function () {
            
            voletParticulier.style.display = "none";
            voletEntreprise.style.display = "none" ;
            voletOng.style.display = "block";
        });

});
