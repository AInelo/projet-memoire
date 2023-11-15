(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     center: true,
    //     margin: 24,
    //     dots: true,
    //     loop: true,
    //     nav : false,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         }
    //     }
    // });

        // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false, // Désactive l'autoplay
        center: false, // Désactive le centrage
        loop: false, // Désactive la boucle
        margin: 24,
        dots: false, // Désactive les points indicateurs
        nav: false, // Désactive la navigation
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    
})(jQuery);






// const mail1 = document.querySelector('#mailNewsletter');
// const btn1 = document.getElementById('newsletter')

// let months1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// btn1.addEventListener('click', () => {

//     if(mail1.value.length){
       
//         let date = new Date(); // for published at info
//         // Créez un nouvel objet avec les propriétés du document à ajouter
//         let newMessage = {
            
//             email : mail.value,
            
//             published : `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
//         };
  
//         db.collection("Newsletter").add(newMessage)
//         .then((docRef) => {
//       //    location.href = `/${docRef.id}`;
//               console.log(" c'est ok ");
//              window.location.reload();
//         })
//         .catch((err) => {
//             console.error(err);
//             console.log("Rien n'a été envoyé")
//         })
//     }

// });

const btnNarure = document.querySelector(".Nature");

btnNarure.addEventListener('click', () => {

    window.location.href = "/simulateur";
} )