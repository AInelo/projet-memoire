//THIS APP IS NOT THE EXACT COPY OF THE APP STORE BUT IS SIMILAR TO IT ;).... and btw inspired by Aysenur Turk's pen (who i follow A LOT).

const side_bar_btns = document.querySelectorAll("#sidebar-btn");

// side_bar_btns.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     for (let index = 0; index < side_bar_btns.length; index++) {
//       side_bar_btns[index].classList.remove("active");
//     }
//     elem.classList.add("active");
//   });
// });

let min = true;

// document.querySelector(".window__close").addEventListener("click", () => {
//   document.querySelector(".container").style.display = "none";

//   setTimeout(() => {
//     window.alert(
//       "Oh No! What did you do? Now you have to refresh to open the app again"
//     );
//   }, 500);
// });

document.querySelector(".window__maximize").addEventListener("click", () => {
  if (min == false) {
    min = true;
    console.log(min);
    document.querySelector(".container").style.width = "90%";
    document.querySelector(".container").style.height = "90%";
  } else {
    min = false;
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".container").style.height = "100%";
  }
});



document.addEventListener("DOMContentLoaded", function() {
  // Obtenez une référence à l'élément de lien "contact-link"
  //const windowsButton = document.getElementById("contact-link");
  const windowsButton = document.querySelector('.window__minimize');
  // Obtenez une référence à l'élément de formulaire de contact
  // const contactForm = document.getElementById("contact-form");
  const navbar = document.querySelector('.navbar');
  
  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  windowsButton.addEventListener("click", function(event) {
    // Empêche le comportement par défaut du lien
    
   event.preventDefault();
  
    // Affiche le formulaire de contact
    navbar.style.display = "block";
  });
  
});



document.addEventListener("DOMContentLoaded", function() {
  // Obtenez une référence à l'élément de lien "contact-link"
  //const windowsButton = document.getElementById("contact-link");
  const windowsButton = document.querySelector('.window__close');
  // Obtenez une référence à l'élément de formulaire de contact
  // const contactForm = document.getElementById("contact-form");
  const navbar = document.querySelector('.navbar');
  
  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  windowsButton.addEventListener("click", function(event) {
    // Empêche le comportement par défaut du lien
    
   event.preventDefault();
  
    // Affiche le formulaire de contact
    navbar.style.display = "none";
  });
  
  
  
});
                        //  BLOG
document.addEventListener("DOMContentLoaded", function() {
           // Obtenez une référence à l'élément de lien "contact-link"
     //      const historiqueLink = document.getElementById("");
           const historiqueLink = document.querySelector('.blog');
           // Obtenez une référence à l'élément de formulaire de contact
           const historiqueForm = document.getElementById("bloge");
           const historiqueForm1 = document.getElementById("trending");
           const historiqueForm2 = document.getElementById("ideae");
           const historiqueForm3 = document.getElementById("formation");
           const historiqueForm4 = document.getElementById("containerArticle");
           const historiqueForm5 = document.getElementById("blogation");
           const historiqueForm6 = document.querySelector ('.containerMessages');
           const historiqueForm7 = document.querySelector('.containerInscrits');
           const historiqueForm8 = document.querySelector('.containerNewsletter');
           const historiqueForm9 = document.querySelector('#AjoutProjetEtColloc');
           const historiqueForm10 = document.querySelector('.EventContainer');
         
           // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
           historiqueLink.addEventListener("click", function(event) {
             // Empêche le comportement par défaut du lien
             
            event.preventDefault();
           
             // Affiche le formulaire de contact
             historiqueForm.style.display = "block";
             historiqueForm1.style.display = "block";
             historiqueForm2.style.display = "flex";
             historiqueForm3.style.display = "none";
             historiqueForm4.style.display = "none";
             historiqueForm5.style.display = "block";
             historiqueForm6.style.display = "none";
             historiqueForm7.style.display = "none";
             historiqueForm8.style.display = "none";
             historiqueForm9.style.display = "none";
             historiqueForm10.style.display = "none";
           });
   });

                        // FORMATION 
document.addEventListener("DOMContentLoaded", function() {
           // Obtenez une référence à l'élément de lien "contact-link"
           const historiqueLink = document.querySelector('.btnformation');
           // Obtenez une référence à l'élément de formulaire de contact
           const historiqueForm = document.getElementById("formation");
           const historiqueForm0 = document.getElementById("bloge");
           const historiqueForm1 = document.getElementById("trending");
           const historiqueForm2 = document.getElementById("ideae");
           const historiqueForm4 = document.getElementById("containerArticle");
           const historiqueForm5 = document.querySelector ('.containerMessages');
           const historiqueForm6 = document.querySelector('.containerInscrits');
           const historiqueForm7 = document.querySelector('.containerNewsletter');
           const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
           const historiqueForm9 = document.querySelector('.EventContainer');
           
         
           // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
           historiqueLink.addEventListener("click", function(event) {
             // Empêche le comportement par défaut du lien
             
            event.preventDefault();
           
             // Affiche le formulaire de contact
             historiqueForm.style.display = "block";
             historiqueForm0.style.display = "none";
             historiqueForm1.style.display = "none";
             historiqueForm2.style.display = "none";
             historiqueForm4.style.display = "none";
             historiqueForm5.style.display = "none";
             historiqueForm6.style.display = "none";
             historiqueForm7.style.display = "none";
             historiqueForm8.style.display = "none";
             historiqueForm9.style.display = "none";
           });
   });



                    // ARTICLE

document.addEventListener("DOMContentLoaded", function() {
           // Obtenez une référence à l'élément de lien "contact-link"
     //      const historiqueLink = document.getElementById("");
           const historiqueLink = document.querySelector('.containerArti');
           // Obtenez une référence à l'élément de formulaire de contact
           const historiqueForm = document.getElementById("blogation");
           const historiqueForm1 = document.getElementById("trending");
           const historiqueForm2 = document.getElementById("ideae");
           const historiqueForm3 = document.getElementById("formation");
           const historiqueForm4 = document.getElementById("containerArticle");
           const historiqueForm5 = document.querySelector ('.containerMessages');
           const historiqueForm6 = document.querySelector('.containerInscrits');
           const historiqueForm7 = document.querySelector('.containerNewsletter');
           const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
           const historiqueForm9 = document.querySelector('.EventContainer');
         
           // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
           historiqueLink.addEventListener("click", function(event) {
             // Empêche le comportement par défaut du lien
             
            event.preventDefault();
           
             // Affiche le formulaire de contact
            //  historiqueForm.style.display = "block";
            //  historiqueForm1.style.display = "block";
            //  historiqueForm2.style.display = "flex";
            historiqueForm.style.display = "none";
            historiqueForm3.style.display = "none";
            historiqueForm4.style.display = "block";
            historiqueForm5.style.display = "none";
            historiqueForm6.style.display = "none";
            historiqueForm7.style.display = "none";
            historiqueForm8.style.display = "none";
            historiqueForm9.style.display = "none";
           });
   });


   // POUR AFFICHER LES MESSAGES 
   document.addEventListener("DOMContentLoaded", function() {
    // Obtenez une référence à l'élément de lien "contact-link"
    //  const historiqueLink = document.getElementById("message_recus");
    const historiqueLi = document.querySelector('.messagerecus');
    // Obtenez une référence à l'élément de formulaire de contact
    const historiqueForm = document.getElementById("blogation");
    const historiqueForm1 = document.getElementById("trending");
    const historiqueForm2 = document.getElementById("ideae");
    const historiqueForm3 = document.getElementById("formation");
    const historiqueForm4 = document.getElementById("containerArticle");
    const historiqueForm5 = document.querySelector ('.containerMessages');
    const historiqueForm6 = document.querySelector('.containerInscrits');
    const historiqueForm7 = document.querySelector('.containerNewsletter');
    const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
    const historiqueForm9 = document.querySelector('.EventContainer');
    // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
    historiqueLi.addEventListener("click", function()  {
      // Empêche le comportement par défaut du lien
      
     
    
      // Affiche le formulaire de contact
     //  historiqueForm.style.display = "block";
     //  historiqueForm1.style.display = "block";
     //  historiqueForm2.style.display = "flex";
     historiqueForm.style.display = "none";
     historiqueForm3.style.display = "none";
     historiqueForm4.style.display = "none";
     historiqueForm5.style.display = "block";
     historiqueForm6.style.display = "none";
     historiqueForm7.style.display = "none";
     historiqueForm8.style.display = "none";
     historiqueForm9.style.display = "none";
    });
});



  // POUR AFFICHER LES INSCRITS AUX FORMATIONS 
  document.addEventListener("DOMContentLoaded", function() {
    // Obtenez une référence à l'élément de lien "contact-link"
    //  const historiqueLink = document.getElementById("message_recus");
    const historiqueLi = document.querySelector('.formationInscrit');
    // Obtenez une référence à l'élément de formulaire de contact
    const historiqueForm = document.getElementById("blogation");
    const historiqueForm1 = document.getElementById("trending");
    const historiqueForm2 = document.getElementById("ideae");
    const historiqueForm3 = document.getElementById("formation");
    const historiqueForm4 = document.getElementById("containerArticle");
    const historiqueForm5 = document.querySelector ('.containerMessages');
    const historiqueForm6 = document.querySelector('.containerInscrits');
    const historiqueForm7 = document.querySelector('.containerNewsletter');
    const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
    const historiqueForm9 = document.querySelector('.EventContainer');
    // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
    historiqueLi.addEventListener("click", function()  {
      // Empêche le comportement par défaut du lien
      
     
    
      // Affiche le formulaire de contact
     //  historiqueForm.style.display = "block";
     //  historiqueForm1.style.display = "block";
     //  historiqueForm2.style.display = "flex";
     historiqueForm.style.display = "none";
     historiqueForm3.style.display = "none";
     historiqueForm4.style.display = "none";
     historiqueForm5.style.display = "none";
     historiqueForm6.style.display = "block";
     historiqueForm7.style.display = "none";
     historiqueForm8.style.display = "none";
     historiqueForm9.style.display = "none";
    });
});

 // POUR AFFICHER LES MAILS DANS LA NEWSLETTER
 document.addEventListener("DOMContentLoaded", function() {
    // Obtenez une référence à l'élément de lien "contact-link"
    //  const historiqueLink = document.getElementById("message_recus");
    const historiqueLi = document.querySelector('.MailsContainer');
    // Obtenez une référence à l'élément de formulaire de contact
    const historiqueForm = document.getElementById("blogation");
    const historiqueForm1 = document.getElementById("trending");
    const historiqueForm2 = document.getElementById("ideae");
    const historiqueForm3 = document.getElementById("formation");
    const historiqueForm4 = document.getElementById("containerArticle");
    const historiqueForm5 = document.querySelector ('.containerMessages');
    const historiqueForm6 = document.querySelector('.containerInscrits');
    const historiqueForm7 = document.querySelector('.containerNewsletter');
    const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
    const historiqueForm9 = document.querySelector('.EventContainer');
    // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
    historiqueLi.addEventListener("click", function()  {
      // Empêche le comportement par défaut du lien
      
     
    
      // Affiche le formulaire de contact
     //  historiqueForm.style.display = "block";
     //  historiqueForm1.style.display = "block";
     //  historiqueForm2.style.display = "flex";
     historiqueForm.style.display = "none";
     historiqueForm3.style.display = "none";
     historiqueForm4.style.display = "none";
     historiqueForm5.style.display = "none";
     historiqueForm6.style.display = "none";
     historiqueForm7.style.display = "block";
     historiqueForm8.style.display = "none";
     historiqueForm9.style.display = "none";
    });
});

// POUR AFFICHER L'ENVOI DES PROJETS DE RECHERCHES OU COLLOCQUES 
// POUR AFFICHER LES MAILS DANS LA NEWSLETTER
document.addEventListener("DOMContentLoaded", function() {
    // Obtenez une référence à l'élément de lien "contact-link"
    //  const historiqueLink = document.getElementById("message_recus");
    const historiqueLi = document.querySelector('.colloc');
    // Obtenez une référence à l'élément de formulaire de contact
    const historiqueForm = document.getElementById("blogation");
    const historiqueForm1 = document.getElementById("trending");
    const historiqueForm2 = document.getElementById("ideae");
    const historiqueForm3 = document.getElementById("formation");
    const historiqueForm4 = document.getElementById("containerArticle");
    const historiqueForm5 = document.querySelector ('.containerMessages');
    const historiqueForm6 = document.querySelector('.containerInscrits');
    const historiqueForm7 = document.querySelector('.containerNewsletter');
    const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
    const historiqueForm9 = document.querySelector('.EventContainer');
    // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
    historiqueLi.addEventListener("click", function()  {
      // Empêche le comportement par défaut du lien
      
     
    
      // Affiche le formulaire de contact
     //  historiqueForm.style.display = "block";
     //  historiqueForm1.style.display = "block";
     //  historiqueForm2.style.display = "flex";
     historiqueForm.style.display = "none";
     historiqueForm3.style.display = "none";
     historiqueForm4.style.display = "none";
     historiqueForm5.style.display = "none";
     historiqueForm6.style.display = "none";
     historiqueForm7.style.display = "none";
     historiqueForm8.style.display = "block";
     historiqueForm9.style.display = "none";
    });
});

// POUR LA SECTION D'AJOUT D'EVENEMENT
document.addEventListener("DOMContentLoaded", function() {
    // Obtenez une référence à l'élément de lien "contact-link"
    //  const historiqueLink = document.getElementById("message_recus");
    const historiqueLi = document.querySelector('.Evenements');
    // Obtenez une référence à l'élément de formulaire de contact
    const historiqueForm = document.getElementById("blogation");
    const historiqueForm1 = document.getElementById("trending");
    const historiqueForm2 = document.getElementById("ideae");
    const historiqueForm3 = document.getElementById("formation");
    const historiqueForm4 = document.getElementById("containerArticle");
    const historiqueForm5 = document.querySelector ('.containerMessages');
    const historiqueForm6 = document.querySelector('.containerInscrits');
    const historiqueForm7 = document.querySelector('.containerNewsletter');
    const historiqueForm8 = document.querySelector('#AjoutProjetEtColloc');
    const historiqueForm9 = document.querySelector('.EventContainer');
    // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
    historiqueLi.addEventListener("click", function()  {
      // Empêche le comportement par défaut du lien
      
     
    
      // Affiche le formulaire de contact
     //  historiqueForm.style.display = "block";
     //  historiqueForm1.style.display = "block";
     //  historiqueForm2.style.display = "flex";
     historiqueForm.style.display = "none";
     historiqueForm3.style.display = "none";
     historiqueForm4.style.display = "none";
     historiqueForm5.style.display = "none";
     historiqueForm6.style.display = "none";
     historiqueForm7.style.display = "none";
     historiqueForm8.style.display = "none";
     historiqueForm9.style.display = "block";
    });
});

















                                    
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


                                                // POUR LES FORMATION DANS LA BASE DE DONNEES 
const formationTitle = document.querySelector('.titleformation');
const formationPrice = document.querySelector('.Priceformation')
const BtnFormation = document.querySelector('.formationajout');

 BtnFormation.addEventListener('click', () => {
     if(formationTitle.value.length ){
         // generating id
         let letters = 'abcdefghijklmnopqrstuvwxyz';
         let FormationTitle = formationTitle.value.split(" ").join("-");
         let id = '';
         let a = 0;
         //let id = 0;
         for(let i = 0; i < 4; i++){
             id += letters[Math.floor(Math.random() * letters.length)];
         }
         
         let docName = `${id}-${FormationTitle}`
         let date = new Date(); // for published at info

         // Créez un nouvel objet avec les propriétés du document à ajouter
         let newFormation = {
             title: formationTitle.value,
             Prix: formationPrice.value,
             
             publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
          //   publishedAt: firebase.firestore.FieldValue.serverTimestamp() Utilisez serverTimestamp pour obtenir l'horodatage du serveur Firestore
         };

         // Ajoutez le nouveau document à la collection "lasmoFormation"

         db.collection("lasmoFormation").add(newFormation)
         .then((docRef) => {
             // docRef.id contiendra l'ID auto-incrémenté du document nouvellement ajouté
             location.href = `/${docRef.id}`;
         })
         .catch((err) => {
             console.error(err);
         })
     }
 })


// POUR LES PROJETS DE RECHERCHES 
const projetTitle = document.querySelector('.titleprojet');
const projetdescription = document.querySelector('.Descriptionprojet')
const BtnProjet = document.querySelector('.projetajout');
BtnProjet.addEventListener('click', () => {
    if(projetTitle.value.length ){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let FormationTitle = projetTitle.value.split(" ").join("-");
        let id = '';
        let a = 0;
        //let id = 0;
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        
        let docName = `${id}-${projetTitle}`
        let date = new Date(); // for published at info

        // Créez un nouvel objet avec les propriétés du document à ajouter
        let newProjet = {
            title: projetTitle.value,
            Description: projetdescription.value,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
         //   publishedAt: firebase.firestore.FieldValue.serverTimestamp() Utilisez serverTimestamp pour obtenir l'horodatage du serveur Firestore
        };

        // Ajoutez le nouveau document à la collection "lasmoFormation"

        db.collection("ProjetRecherche").add(newProjet)
        .then((docRef) => {
            // docRef.id contiendra l'ID auto-incrémenté du document nouvellement ajouté
            location.href = `/${docRef.id}`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})








// POUR LES ACTES DE COLLOQUES 
const collocTitle = document.querySelector('.titlecolloque');
const collocdescription = document.querySelector('.Descriptioncolloc')
const Btncolloc = document.querySelector('.colloqueajout');
Btncolloc.addEventListener('click', () => {
    if(collocTitle.value.length ){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
        let FormationTitle = collocTitle.value.split(" ").join("-");
        let id = '';
        let a = 0;
        //let id = 0;
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }
        
        let docName = `${id}-${collocTitle}`
        let date = new Date(); // for published at info

        // Créez un nouvel objet avec les propriétés du document à ajouter
        let newColloc = {
            title: collocTitle.value,
            Description: collocdescription.value,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
         //   publishedAt: firebase.firestore.FieldValue.serverTimestamp() Utilisez serverTimestamp pour obtenir l'horodatage du serveur Firestore
        };

        // Ajoutez le nouveau document à la collection "lasmoFormation"

        db.collection("ActeColloc").add(newColloc)
        .then((docRef) => {
            // docRef.id contiendra l'ID auto-incrémenté du document nouvellement ajouté
            location.href = `/${docRef.id}`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})





                                                        // POUR LES BLOGS DANS LA BASE DE DONNEES 
                                            /* CODE JS POUR LES FONCTIONS ET ROLES REEL DE L'EDITEUR" */
                                                /*COTE IMAGES DU BLOG */



const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})


const uploadPDF = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes2("pdf")){
        const formdata = new FormData();
        formdata.append('pdf', file);

        fetch('./upload2', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "pdf"){
                addImage(data, file.name);
            } else{
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    } else{
        alert("upload pdf only");
    }
}





const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('./upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage(data, file.name);
            } else{
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articleFeild.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
}

publishBtn.addEventListener('click', () => {
    if (articleFeild.value.length && blogTitleField.value.length) {
        let blogTitle = blogTitleField.value.split(" ").join("-");
        let id = '';
        let letters = 'abcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // Créer une transaction pour obtenir le dernier ID enregistré
        db.runTransaction((transaction) => {
            // Obtenir la référence du document "lastIdDoc"
            return transaction.get(db.collection("lastIdCollection").doc("lastIdDoc"))
                .then((doc) => {
                    // Vérifier si le document existe
                    if (doc.exists) {
                        // Obtenir la valeur de l'ID actuel
                        let currentId = doc.data().currentId;

                        // Incrémenter l'ID pour le prochain document
                        let nextId = currentId + 1;
                        let date = new Date();

                        // Créer un nouvel objet avec les propriétés du document à ajouter
                        let newBlog = {
                            title: blogTitleField.value,
                            article: articleFeild.value,
                            bannerImage: bannerPath,
                            publishedAt:  `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
                        };

                        // Ajouter le nouveau document à la collection "Bloglasmo" avec l'ID auto-incrémenté
                        return db.collection("Bloglasmo").doc(nextId.toString()).set(newBlog)
                            .then(() => {
                                // Mettre à jour la valeur de l'ID dans le document "lastIdDoc"
                                return transaction.update(db.collection("lastIdCollection").doc("lastIdDoc"), {
                                    currentId: nextId
                                });
                            })
                            .then(() => {
                                // Rediriger vers le nouveau document avec l'ID auto-incrémenté
                                location.href = `/${nextId}`;
                            });
                    } else {
                        // Si le document "lastIdDoc" n'existe pas, initialiser le compteur à 1
                        let initialId = 1;
                        return transaction.set(db.collection("lastIdCollection").doc("lastIdDoc"), {
                            currentId: initialId
                        });
                    }
                });
        })
        .then(() => {
            console.log("Document ajouté avec l'ID auto-incrémenté.");
        })
        .catch((error) => {
            console.error("Erreur lors de l'ajout du document :", error);
        });
    }
});































                                                    // POUR LES OUVRAGES DANS LA BASE DE DONNEES  

// const blogTitleField = document.querySelector('.title');
// const articleFeild = document.querySelector('.article');

const OuvrageTitle = document.querySelector('.titleOuvrage');
const OuvrageAuteur = document.querySelector('.auteurOuvrage');
const OuvrageEditionDate = document.querySelector('.editionOuvrage');
const OuvrageAbstract = document.querySelector('.abstractOuvrage');
const IDDriveOuvrage = document.querySelector('.googledriveOuvrage')
const PriOuvrage = document.querySelector('.prixOuvrage');
const BtnOuvrage = document.getElementById('ouvrageAjout');



// banner
const bannerImage3 = document.querySelector('#banner-upload3');
const banner3 = document.querySelector(".banner3");
let bannerPath3;

// const publishBtn = document.querySelector('.publish-btn');
// const uploadInput = document.querySelector('#image-upload');

bannerImage3.addEventListener('change', () => {
    uploadImage3(bannerImage3, "banner3");
})

// uploadInput.addEventListener('change', () => {
//     uploadImage(uploadInput, "image");
// })


const uploadImage3 = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('./upload3', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage2(data, file.name);
            } else{
                bannerPath3 = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath3}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}

const addImage2 = (imagepath, alt) => {
    let curPos = OuvrageAbstract.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    OuvrageAbstract.value = OuvrageAbstract.value.slice(0, curPos) + textToInsert + OuvrageAbstract.value.slice(curPos);
}

// const addImage2 = (imagepath, alt) => {
//     let curPos = articleFeild.selectionStart;
//     let textToInsert = `\r![${alt}](${imagepath})\r`;
//     articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
// }



BtnOuvrage.addEventListener('click', () => {
     if(OuvrageTitle.value.length && OuvrageAbstract.value.length ){
         // generating id
         let letters = 'abcdefghijklmnopqrstuvwxyz';
         let ouvrageTitle = OuvrageTitle.value.split(" ").join("-");
         let id = '';
         let a = 0;
         
         for(let i = 0; i < 4; i++){
             id += letters[Math.floor(Math.random() * letters.length)];
         }
              
         let docName = `${id}-${ouvrageTitle}`
         let date = new Date(); // for published at info


         // Créez un nouvel objet avec les propriétés du document à ajouter
         let newOuvrage = {
             title: OuvrageTitle.value,
             Auteur : OuvrageAuteur.value,
             DateEdition: OuvrageEditionDate.value,
             Abstract : OuvrageAbstract.value,
             idgoogle : IDDriveOuvrage.value,
             Prix: PriOuvrage.value,
             bannerImage: bannerPath3,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
         };

         // Ajoutez le nouveau document à la collection "lasmoFormation"

         db.collection("Ouvragelasmo").add(newOuvrage)
         .then((docRef) => {
             // docRef.id contiendra l'ID auto-incrémenté du document nouvellement ajouté
             location.href = `/${docRef.id}`;
         })
         .catch((err) => {
             console.error(err);
         })        
     }
 })


 // POUR RENVOYER VERS LA PAGE D'ACCEUIL
 document.addEventListener("DOMContentLoaded", function() {

  const boutonRetour = document.querySelector(".retour")

 boutonRetour.addEventListener("click", function () {
    window.location.href = "/";

   });

});





// POUR AFFICHER LES INFORMATIONS DES MESSAGES ENVOYES AU LABO

const messageSection = document.querySelector('#messagesLaSMO');
                 db.collection("messages").get().then((messages) => {
   messages.forEach(Messages => {
        if(Messages.id != decodeURI(location.pathname.split("/").pop())){
          createOuvrage(Messages);
        }
    })
})



                const createOuvrage = (Messages) => {
                    let data = Messages.data();
                    if (data !== undefined) {

                      
                      
                        // Vérifier si la propriété 'title' est définie
                        const nom = data.Name ?? '';
                        const Message = data.Message ?? '';
                        const index = data.index ?? '';
                        const numero = data.numero ?? '';
                        const Mail = data.mail ?? '';
                        const date = data.published ?? '';


                  
                        if (messageSection !== null) {
                            
                            textToInsert = `<div >
                            <h1>Message:</h1>
                            <p>
                              ${Message}
                            </p>
                            <h2> <u>Noms et prénoms</u>: ${nom}</h2>
                            <h2><u>E-mail</u>: ${Mail}</h2>
                           <a href="http://Wa.me/${index}${numero}" style="color: aquamarine;"> <h2 style="cursor: pointer;" ><u>Tel</u>: ${numero}</h2> </a>
                           <p>Date: ${date}</p>
                        </div> <br>
                            `

                            messageSection.insertAdjacentHTML("beforeend", textToInsert);
                            
                           // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
                        } else {
                            console.error('L\'élément blogSection est null.');
                        }
                    } else {
                        console.error('L\'objet data est indéfini.');
                    }
                };







// POUR AFFICHER LES INFORMATIONS DES MESSAGES ENVOYES AU LABO

const messageSectionRevueDezan = document.querySelector('#messagesDezan');
                 db.collection("messagesDEZAN").get().then((messages) => {
   messages.forEach(Messages => {
        if(Messages.id != decodeURI(location.pathname.split("/").pop())){
          createOuvrageRevueDezan(Messages);
        }
    })
})
             const createOuvrageRevueDezan = (Messages) => {
                    let data = Messages.data();
                    if (data !== undefined) {


                        // Vérifier si la propriété 'title' est définie
                        const nom = data.Name ?? '';
                        const Message = data.Message ?? '';
                        const index = data.index ?? '';
                        const numero = data.numero ?? '';
                        const Mail = data.mail ?? '';
                        const date = data.published ?? '';


                  
                        if (messageSectionRevueDezan !== null) {
                            
                            textToInsert = `<div >
                            <h1>Message:</h1>
                            <p>
                              ${Message}
                            </p>
                            <h2> <u>Noms et prénoms</u>: ${nom}</h2>
                            <h2><u>E-mail</u>: ${Mail}</h2>
                           <a href="http://Wa.me/${index}${numero}" style="color: aquamarine;"> <h2 style="cursor: pointer;" ><u>Tel</u>: ${numero}</h2> </a>
                           <p>Date: ${date}</p>
                        </div> <br>
                            `

                           messageSectionRevueDezan.insertAdjacentHTML("beforeend", textToInsert);
                            
                           // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
                        } else {
                            console.error('L\'élément blogSection est null.');
                        }
                    } else {
                        console.error('L\'objet data est indéfini.');
                    }
                };









// POUR LES MAILS DANS LA NEWSLETTER 


const NewsletterSection = document.querySelector('.tableauNewsletterSection');
                 db.collection("mailCollection").get().then((messages) => {
   messages.forEach(MAILS => {
        if(MAILS.id != decodeURI(location.pathname.split("/").pop())){
          createNewsletter(MAILS);
        }
    })
})

                const createNewsletter = (MAILS) => {
                    let data = MAILS.data();
                    if (data !== undefined) {

                      
                      
                        // Vérifier si la propriété 'title' est définie
                        const Mail = data.mail ?? '';
                        

                  
                        if (messageSection !== null) {
                            
                            textToInsert = `<tr>
                            <td>${Mail}</td>
                            
                        </tr>`

                        NewsletterSection.insertAdjacentHTML("beforeend", textToInsert);
                            
                           // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
                        } else {
                            console.error('L\'élément blogSection est null.');
                        }
                    } else {
                        console.error('L\'objet data est indéfini.');
                    }
                };


// POUR LES INSCRITS AUX FORMATIONS  


const INSCRITSection = document.querySelector('#tableau');
                 db.collection("InscritFormation").get().then((messages) => {
   messages.forEach(MAILS => {
        if(MAILS.id != decodeURI(location.pathname.split("/").pop())){
          createINSCRIT(MAILS);
        }
    })
})
                const createINSCRIT = (MAILS) => {
                    let data = MAILS.data();
                    if (data !== undefined) {                      
                        // Vérifier si la propriété 'title' est définie
                        const Mail = data.mail ?? '';
                        const Name = data.Name ?? '';
                        const email = data.email ?? '';
                        const Number = data.Numero ?? '';
                        const Formation = data.Formation ?? '';
                        const index = data.Index ?? '';
                  
                        if (messageSection !== null) {
                            
                            textToInsert = `<tr>
                            <td>${Name}</td>
                            <td>${email}</td>
                            <td><a href="http://Wa.me/${index}${Number}" style="color: aquamarine;">${Number}</a></td>
                            <td>${Formation}</td> 
                        </tr> </br>`

                        INSCRITSection.insertAdjacentHTML("beforeend", textToInsert);
                            
                           // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
                        } else {
                            console.error('L\'élément blogSection est null.');
                        }
                    } else {
                        console.error('L\'objet data est indéfini.');
                    }
                };






// POUR ENVOYER DES EVENEMENTS DANS LA BASE DE DONNEES 

const OuvrageTitleEvent = document.querySelector('.titleEvent');
// const OuvrageAuteurEvent = document.querySelector('.auteurOuvrage');
// const OuvrageEditionDateEvent = document.querySelector('.editionOuvrage');
const OuvrageAbstractEvent = document.querySelector('.articleEvent');
// const IDDriveOuvrageEvent = document.querySelector('.googledriveOuvrage')
// const PriOuvrageEvent = document.querySelector('.prixOuvrage');
const BtnOuvrageEvent = document.getElementById('EventTransfer');
// banner
const bannerImage4 = document.querySelector('#banner-uploadEvent');
const banner4 = document.querySelector("#ideaeEvent");
let bannerPath4;

// const publishBtn = document.querySelector('.publish-btn');
// const uploadInput = document.querySelector('#image-upload');

bannerImage4.addEventListener('change', () => {
    uploadImage4(bannerImage4, "banner4");
})

// uploadInput.addEventListener('change', () => {
//     uploadImage(uploadInput, "image");
// })


const uploadImage4 = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('./upload4', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage3(data, file.name);
            } else{
                bannerPath4 = `${location.origin}/${data}`;
                banner4.style.backgroundImage = `url("${bannerPath4}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}

const addImage3 = (imagepath, alt) => {
    let curPos = OuvrageAbstractEvent.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    OuvrageAbstractEvent.value = OuvrageAbstractEvent.value.slice(0, curPos) + textToInsert + OuvrageAbstractEvent.value.slice(curPos);
}

// const addImage2 = (imagepath, alt) => {
//     let curPos = articleFeild.selectionStart;
//     let textToInsert = `\r![${alt}](${imagepath})\r`;
//     articleFeild.value = articleFeild.value.slice(0, curPos) + textToInsert + articleFeild.value.slice(curPos);
// }



BtnOuvrageEvent.addEventListener('click', () => {
     if(OuvrageTitleEvent.value.length && OuvrageAbstractEvent.value.length ){
         // generating id
         let letters = 'abcdefghijklmnopqrstuvwxyz';
         let ouvrageTitle = OuvrageTitleEvent.value.split(" ").join("-");
         let id = '';
         let a = 0;
         
         for(let i = 0; i < 4; i++){
             id += letters[Math.floor(Math.random() * letters.length)];
         }
              
         let docName = `${id}-${ouvrageTitle}`
         let date = new Date(); // for published at info


         // Créez un nouvel objet avec les propriétés du document à ajouter
         let newOuvrageEvent = {
             title: OuvrageTitleEvent.value,
            // Auteur : OuvrageAuteur.value,
          //   DateEdition: OuvrageEditionDate.value,
             Abstract : OuvrageAbstractEvent.value,
           //  idgoogle : IDDriveOuvrage.value,
           //  Prix: PriOuvrage.value,
             bannerImage: bannerPath4,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
         };

         // Ajoutez le nouveau document à la collection "lasmoFormation"

         db.collection("EventLasmo").add(newOuvrageEvent)
         .then((docRef) => {
             // docRef.id contiendra l'ID auto-incrémenté du document nouvellement ajouté
             location.href = `/${docRef.id}`;
         })
         .catch((err) => {
             console.error(err);
         })
     }
 })

