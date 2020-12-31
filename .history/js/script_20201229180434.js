$(function(){
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;

        $('body').animate({scrollTop: $(hash).offset().top} , 900, function(){window.location.hash =hash})
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
        }); 

    $("#typed").typed({
        strings: ["Français","English","Español", "Português", "Italiano", "Română", "Svenska", "Deutsch", "עִבְרִית"],
        typeSpeed: 100,
        backSpeed: 50;
        loop: true
        });
})