const nom = document.querySelector('#name');
const sbuject_message = document.querySelector('#subject');
const message = document.querySelector('#message');
const index = document.querySelector('#number_contact_index');
const number = document.querySelector('#number')


const mail = document.querySelector('#email');
const btn = document.getElementById('submit')

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

btn.addEventListener('click', () => {

    if(mail.value.length){
       
        let date = new Date(); // for published at info
        // Créez un nouvel objet avec les propriétés du document à ajouter
        let newMessage = {
            Nom_Prenom: nom.value,
            Sujet: sbuject_message.value,
            message: message.value,
            mail : mail.value,
            index : index.value,
            numero : number.value,
            
            published : `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        };
  
        db.collection("Message").add(newMessage)
        .then((docRef) => {
      //    location.href = `/${docRef.id}`;
              console.log(" c'est ok ");
             window.location.reload();
        })
        .catch((err) => {
            console.error(err);
            console.log("Rien n'a été envoyé")
        })
    }

});




