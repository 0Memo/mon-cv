$(function(){
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;

        $('body').animate({scrollTop: $(hash).offset().top} , 900, function(){window.location.hash =hash})
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
        }); 

    var typed = new Typed("#typed",{
        strings: ["Français","English","Español", "Português", "Italiano", "Română", "Svenska", "Deutsch", "עִבְרִית"],
        typeSpeed: 100,
        backSpeed:50,
        loop: true
    });
    
    $('#contact-form').submit(function(e) {                
        $('#contact-form *').fadeOut(2000);
        $("#contact-form").prepend("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté &#128389; </p>");                
    });

})
