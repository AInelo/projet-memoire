// // 






let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// POUR RECUPERER LES MESSAGES ET REQUÊTES ENVOYES 


//const number_contact = document.querySelector('#number_contact');
const nom= document.querySelector('#name');
const prenom = document.querySelector('#surname');



const mail = document.querySelector('#email');
const btn = document.getElementById('leseul')

// const Btncontact = document.querySelector('#buttoncontact2');



// Btncontact.addEventListener('click', (event) => {
     
	
// })







// let widget =  FedaPay.init({
//   public_key: 'pk_live_AVH-PrehePhF1peYp8Fb5SV_'
//   });
//   let btn = document.querySelector('.pay-btn');
//   
//   widget.open();

//   event.preventDefault();
//     console.log (nom_prenom.value);

//   

//  




// btn.addEventListener('click', () => {

    

//     if(mail.value.length){
//         // generating id
//         let letters = 'abcdefghijklmnopqrstuvwxyz';
//         let FormationTitle = nom.value.split(" ").join("-");
//         let id = '';
//         let a = 0;
//          for(let i = 0; i < 4; i++){
//            id += letters[Math.floor(Math.random() * letters.length)];
//         }
  
//         let docName = `${id}-${nom}`
//         let date = new Date(); // for published at info
//         // Créez un nouvel objet avec les propriétés du document à ajouter
//         let newMessage = {
//             Name: nom.value,
//             Surname: prenom.value,
//             mail : mail.value,
            
//             published : `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
//         };
  
//         db.collection("Formation_Com").add(newMessage)
//         .then((docRef) => {
//       //    location.href = `/${docRef.id}`;
//               console.log(" c'est ok ");
//              // window.location.reload();
//         })
//         .catch((err) => {
//             console.error(err);
//             console.log("Rien n'a été envoyé")
//         })
//     }

//     FedaPay.init('.pay-btn', { public_key: 'pk_live_AVH-PrehePhF1peYp8Fb5SV_'});

// });




