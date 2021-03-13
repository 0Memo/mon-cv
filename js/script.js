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

        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
            type:'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(result) {
                if(result.isSuccess) {
                    $("#contact-form").append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté &#x1f4ab; </p>");
                    $("#contact-form")[0].reset();
                } else {
                    $('#name + .comments').html(result.nameError);
                    $('#company + .comments').html(result.companyError);
                    $('#email + .comments').html(result.emailError);
                    $('#phone + .comments').html(result.phoneError);
                    $('#message + .comments').html(result.messageError);
                }

            }

        });

    });
})
