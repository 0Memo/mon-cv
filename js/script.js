$(function(){
    // access to other languages
    document.getElementById("french").onclick = function () {
    location.href = "index.html";
    };
    
    document.getElementById("spanish").onclick = function () {
        location.href = "version_espanola.html";
    };
    
    document.getElementById("portuguese").onclick = function () {
        location.href = "versao_portuguesa.html";
    };
    
    document.getElementById("italian").onclick = function () {
        location.href = "versione_italiana.html";
    };
    
    document.getElementById("romanian").onclick = function () {
        location.href = "versiune_limba_romana.html";
    };
    
    document.getElementById("swedish").onclick = function () {
        location.href = "svensk_version.html";
    };
    
    document.getElementById("english").onclick = function () {
        location.href = "english_version.html";
    };
    
    var rawImages = '[{"filename":"image1.jpg","name":"image1","author":"Guillaume Mehats"},{"filename":"image2.JPG","name":"image2","author":"Guillaume Mehats"},{"filename":"image3.JPG","name":"image3","author":"Guillaume Mehats"},{"filename":"image4.JPG","name":"image4","author":"Guillaume Mehats"},{"filename":"image5.JPG","name":"image5","author":"Guillaume Mehats"},{"filename":"image6.JPG","name":"image6","author":"Guillaume Mehats"},{"filename":"image7.jpg","name":"image7","author":"Guillaume Mehats"},{"filename":"image8.jpg","name":"image8","author":"Guillaume Mehats"},{"filename":"image9.jpg","name":"image9","author":"Guillaume Mehats"},{"filename":"image10.jpg","name":"image10","author":"Guillaume Mehats"}]';

    var images = JSON.parse(rawImages);
    // choose a random image
    var randomImage = images[Math.floor(Math.random() * images.length)];

    // apply the image as the background of pageContent
    $('#about').css('background-image', 'url(img/' + randomImage.filename + ')');
    
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;

        $('body').animate({scrollTop: $(hash).offset().top} , 900, function(){window.location.hash =hash})
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });

});
