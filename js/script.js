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
    
    var submitted=false;
    
    document.getElementById('name').addEventListener("keyup", function() {
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

    document.getElementById('company').addEventListener("keyup", function() {
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

    document.getElementById('email').addEventListener("keyup", function() {
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
    
    document.getElementById('phone').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^0[1-68]([-. ]?[0-9]{2}){4})+$/.test(this.value)){
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
    
    document.getElementById('message').addEventListener("keyup", function() {
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

    var name = document.getElementById('name');
    var valName = name.value;
    var company = document.getElementById('company');
    var valCompany = company.value;
    var email = document.getElementById('email');
    var valEmail = email.value;
    var phone = document.getElementById('phone');
    var valPhone= phone.value;
    var message = document.getElementById('message');
    var valMessage = message.value;

    function EnableDisable() {
        //Reference the Button.
        var button = document.getElementById('button1');

        //Verify the TextBox value.
        if ((name.value.trim() != "") && (company.value.trim() != "") && (email.value.trim() !="") && (phone.value.trim() !="") &&& (message.value.trim() != ""))  {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    };
    
    $('#contact-form').submit(function(e) {
        $('#contact-form *').fadeOut(2000);
        $("#contact-form").prepend("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté &#128389; </p>");                
    });
})
