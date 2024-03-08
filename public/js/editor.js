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

document.addEventListener("DOMContentLoaded", function () {
  // Obtenez une référence à l'élément de lien "contact-link"
  //const windowsButton = document.getElementById("contact-link");
  const windowsButton = document.querySelector(".window__minimize");
  // Obtenez une référence à l'élément de formulaire de contact
  // const contactForm = document.getElementById("contact-form");
  const navbar = document.querySelector(".navbar");

  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  windowsButton.addEventListener("click", function (event) {
    // Empêche le comportement par défaut du lien

    event.preventDefault();

    // Affiche le formulaire de contact
    navbar.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtenez une référence à l'élément de lien "contact-link"
  //const windowsButton = document.getElementById("contact-link");
  const windowsButton = document.querySelector(".window__close");
  // Obtenez une référence à l'élément de formulaire de contact
  // const contactForm = document.getElementById("contact-form");
  const navbar = document.querySelector(".navbar");

  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  windowsButton.addEventListener("click", function (event) {
    // Empêche le comportement par défaut du lien

    event.preventDefault();

    // Affiche le formulaire de contact
    navbar.style.display = "none";
  });
});

// POUR AFFICHER LES MESSAGES
document.addEventListener("DOMContentLoaded", function () {
  // Obtenez une référence à l'élément de lien "contact-link"
  //  const historiqueLink = document.getElementById("message_recus");
  const historiqueLi = document.querySelector(".messagerecus");
  // Obtenez une référence à l'élément de formulaire de contact

  const historiqueForm5 = document.querySelector(".containerMessages");

  const historiqueForm7 = document.querySelector(".containerNewsletter");

  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  historiqueLi.addEventListener("click", function () {
    // Empêche le comportement par défaut du lien

    // Affiche le formulaire de contact
    //  historiqueForm.style.display = "block";
    //  historiqueForm1.style.display = "block";
    //  historiqueForm2.style.display = "flex";

    historiqueForm5.style.display = "block";

    historiqueForm7.style.display = "none";
  });
});

// POUR AFFICHER LES MAILS DANS LA NEWSLETTER
document.addEventListener("DOMContentLoaded", function () {
  // Obtenez une référence à l'élément de lien "contact-link"
  //  const historiqueLink = document.getElementById("message_recus");
  const historiqueLi = document.querySelector(".MailsContainer");
  // Obtenez une référence à l'élément de formulaire de contact

  const historiqueForm5 = document.querySelector(".containerMessages");

  const historiqueForm7 = document.querySelector(".containerNewsletter");

  // Ajoutez un gestionnaire d'événements pour le clic sur le lien "contact-link"
  historiqueLi.addEventListener("click", function () {
    // Empêche le comportement par défaut du lien

    // Affiche le formulaire de contact
    //  historiqueForm.style.display = "block";
    //  historiqueForm1.style.display = "block";
    //  historiqueForm2.style.display = "flex";

    historiqueForm5.style.display = "none";

    historiqueForm7.style.display = "block";
  });
});

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// POUR AFFICHER LES INFORMATIONS DES MESSAGES ENVOYES AU LABO

const messageSection = document.querySelector(".containerMessages");
db.collection("Message")
  .get()
  .then((messages) => {
    messages.forEach((Messages) => {
      if (Messages.id != decodeURI(location.pathname.split("/").pop())) {
        createOuvrage(Messages);
      }
    });
  });

const createOuvrage = (Messages) => {
  let data = Messages.data();
  if (data !== undefined) {
    // Vérifier si la propriété 'title' est définie
    const nom = data.Nom_Prenom ?? "";
    const Message = data.message ?? "";
    const index = data.index ?? "";
    const numero = data.numero ?? "";
    const Mail = data.mail ?? "";
    const date = data.published ?? "";

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
                            `;

      messageSection.insertAdjacentHTML("beforeend", textToInsert);

      // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
    } else {
      console.error("L'élément blogSection est null.");
    }
  } else {
    console.error("L'objet data est indéfini.");
  }
};

// POUR LES MAILS DANS LA NEWSLETTER

const NewsletterSection = document.querySelector(".tableauNewsletterSection");

db.collection("Newsletter")
  .get()
  .then((messages) => {
    messages.forEach((MAILS) => {
      if (MAILS.id != decodeURI(location.pathname.split("/").pop())) {
        createNewsletter(MAILS);
      }
    });
  });
const createNewsletter = (MAILS) => {
  let data = MAILS.data();
  if (data !== undefined) {
    // Vérifier si la propriété 'title' est définie
    const Mail = data.email ?? "";

    if (messageSection !== null) {
      textToInsert = `<tr>
                            <td>${Mail}</td>
                            
                        </tr>`;

      // <tr>
      //     <td>${Name}</td>
      //     <td>${email}</td>
      //     <td><a href="http://Wa.me/${index}${Number}" style="color: aquamarine;">${Number}</a></td>
      //     <td>${Formation}</td>
      // </tr> </br>

      NewsletterSection.insertAdjacentHTML("beforeend", textToInsert);

      // OuvrageSection.innerHTML = textToInsert ;  https://assets.codepen.io/4787486/trees.png
    } else {
      console.error("L'élément blogSection est null.");
    }
  } else {
    console.error("L'objet data est indéfini.");
  }
};

// POUR RENVOYER VERS LA PAGE D'ACCEUIL
document.addEventListener("DOMContentLoaded", function () {
  const boutonRetour = document.querySelector(".retour");

  boutonRetour.addEventListener("click", function () {
    window.location.href = "/";
  });
});
