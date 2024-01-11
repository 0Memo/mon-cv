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
    
// French contact-form version
    var tips1 = document.getElementById('tips1');
    var tips2 = document.getElementById('tips2');
    var tips3 = document.getElementById('tips3');
    var tips4 = document.getElementById('tips4');
    var tips5 = document.getElementById('tips5');

    document.getElementById('entry.843893160').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips1 = document.getElementById('tips1');
            this.style.border="2px solid red";
            this.style.color="red";
            tips1.style.color="red";
            tips1.style.display="block";
        }
        else{
            var tips1 = document.getElementById('tips1');
            this.style.border="2px solid green";
            this.style.color="black";
            tips1.style.display="none";
        }
    });

    document.getElementById('entry.987393334').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips2 = document.getElementById('tips2');
            this.style.border="2px solid red";
            this.style.color="red";
            tips2.style.color="red";
            tips2.style.display="block";
        }
        else{
            var tips2 = document.getElementById('tips2');
            this.style.border="2px solid green";
            this.style.color="black";
            tips2.style.display="none";
        }
    });

    document.getElementById('entry.287231417').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips3 = document.getElementById('tips3');
            this.style.border="2px solid green";
            this.style.color="black";
            tips3.style.display="none";
        }
        else{
            var tips3 = document.getElementById('tips3');
            this.style.border="2px solid red";
            this.style.color="red";
            tips3.style.color="red";
            tips3.style.display="block";
        }
    });
    
    document.getElementById('entry.1960148977').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips4 = document.getElementById('tips4');
            this.style.border="2px solid green";
            this.style.color="black";
            tips4.style.display="none";
        }
        else{
            var tips4 = document.getElementById('tips4');
            this.style.border="2px solid red";
            this.style.color="red";
            tips4.style.color="red";
            tips4.style.display="block";
        }
    });
    
    document.getElementById('entry.50622567').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips5 = document.getElementById('tips5');
            this.style.border="2px solid red";
            this.style.color="red";
            tips5.style.color="red";
            tips5.style.display="block";
        }
        else{
            var tips5 = document.getElementById('tips5');
            this.style.border="2px solid green";
            this.style.color="black";
            tips5.style.display="none";
        }
    });

    var name = document.getElementById('entry.843893160');
    var valName = name.value;
    var company = document.getElementById('entry.987393334');
    var valCompany = company.value;
    var email = document.getElementById('entry.287231417');
    var valEmail = email.value;
    var phone = document.getElementById('entry.1960148977');
    var valPhone = phone.value;
    var message = document.getElementById('entry.50622567');
    var valMessage = message.value;

    function EnableDisable() {
        var button = document.getElementById("button1");

        //Verify the TextBox value.
        if ((name.value.trim() != "") && (company.value.trim() != "") && (email.value.trim() !="") && (phone.value.trim() !="") && (message.value.trim() !=""))  {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    };
})
