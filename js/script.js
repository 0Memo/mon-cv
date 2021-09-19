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
    var email = document.getElementById('entry.287231417l');
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
    
    // Spanish contact-form version
    var tips6 = document.getElementById('tips6');
    var tips7 = document.getElementById('tips7');
    var tips8 = document.getElementById('tips8');
    var tips9 = document.getElementById('tips9');
    var tips10 = document.getElementById('tips10');

    document.getElementById('entry.1459097905').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips6 = document.getElementById('tips6');
            this.style.border="2px solid red";
            this.style.color="red";
            tips6.style.color="red";
            tips6.style.display="block";
        }
        else{
            var tips6 = document.getElementById('tips6');
            this.style.border="2px solid green";
            this.style.color="black";
            tips6.style.display="none";
        }
    });

    document.getElementById('entry.1603613089').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips7 = document.getElementById('tips7');
            this.style.border="2px solid red";
            this.style.color="red";
            tips7.style.color="red";
            tips7.style.display="block";
        }
        else{
            var tips7 = document.getElementById('tips7');
            this.style.border="2px solid green";
            this.style.color="black";
            tips7.style.display="none";
        }
    });

    document.getElementById('entry.1200549304').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips8 = document.getElementById('tips8');
            this.style.border="2px solid green";
            this.style.color="black";
            tips8.style.display="none";
        }
        else{
            var tips8 = document.getElementById('tips8');
            this.style.border="2px solid red";
            this.style.color="red";
            tips8.style.color="red";
            tips8.style.display="block";
        }
    });
    
    document.getElementById('entry.1014473885').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips9 = document.getElementById('tips9');
            this.style.border="2px solid green";
            this.style.color="black";
            tips9.style.display="none";
        }
        else{
            var tips9 = document.getElementById('tips9');
            this.style.border="2px solid red";
            this.style.color="red";
            tips9.style.color="red";
            tips9.style.display="block";
        }
    });
    
    document.getElementById('entry.1592386412').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips10 = document.getElementById('tips10');
            this.style.border="2px solid red";
            this.style.color="red";
            tips10.style.color="red";
            tips10.style.display="block";
        }
        else{
            var tips10 = document.getElementById('tips10');
            this.style.border="2px solid green";
            this.style.color="black";
            tips10.style.display="none";
        }
    });

    var name = document.getElementById('entry.1459097905');
    var valName = name.value;
    var company = document.getElementById('entry.1603613089');
    var valCompany = company.value;
    var email = document.getElementById('entry.1200549304');
    var valEmail = email.value;
    var phone = document.getElementById('entry.1014473885');
    var valPhone = phone.value;
    var message = document.getElementById('entry.1592386412');
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
    
    // Portuguese contact-form version
    var tips11 = document.getElementById('tips11');
    var tips12 = document.getElementById('tips12');
    var tips13 = document.getElementById('tips13');
    var tips14 = document.getElementById('tips14');
    var tips15 = document.getElementById('tips15');

    document.getElementById('entry.1864321900').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips11 = document.getElementById('tips11');
            this.style.border="2px solid red";
            this.style.color="red";
            tips11.style.color="red";
            tips11.style.display="block";
        }
        else{
            var tips11 = document.getElementById('tips11');
            this.style.border="2px solid green";
            this.style.color="black";
            tips11.style.display="none";
        }
    });

    document.getElementById('entry.926466231').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips12 = document.getElementById('tips12');
            this.style.border="2px solid red";
            this.style.color="red";
            tips12.style.color="red";
            tips12.style.display="block";
        }
        else{
            var tips12 = document.getElementById('tips12');
            this.style.border="2px solid green";
            this.style.color="black";
            tips12.style.display="none";
        }
    });

    document.getElementById('entry.1632588828').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips13 = document.getElementById('tips13');
            this.style.border="2px solid green";
            this.style.color="black";
            tips13.style.display="none";
        }
        else{
            var tips13 = document.getElementById('tips13');
            this.style.border="2px solid red";
            this.style.color="red";
            tips13.style.color="red";
            tips13.style.display="block";
        }
    });
    
    document.getElementById('entry.1952141114').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips14 = document.getElementById('tips14');
            this.style.border="2px solid green";
            this.style.color="black";
            tips14.style.display="none";
        }
        else{
            var tips14 = document.getElementById('tips14');
            this.style.border="2px solid red";
            this.style.color="red";
            tips14.style.color="red";
            tips14.style.display="block";
        }
    });
    
    document.getElementById('entry.1491625628').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips15 = document.getElementById('tips15');
            this.style.border="2px solid red";
            this.style.color="red";
            tips15.style.color="red";
            tips15.style.display="block";
        }
        else{
            var tips15 = document.getElementById('tips15');
            this.style.border="2px solid green";
            this.style.color="black";
            tips15.style.display="none";
        }
    });

    var name = document.getElementById('entry.1864321900');
    var valName = name.value;
    var company = document.getElementById('entry.926466231');
    var valCompany = company.value;
    var email = document.getElementById('entry.1632588828');
    var valEmail = email.value;
    var phone = document.getElementById('entry.1952141114');
    var valPhone = phone.value;
    var message = document.getElementById('entry.1491625628');
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
    
    // Italian contact-form version
    var tips16 = document.getElementById('tips16');
    var tips17 = document.getElementById('tips17');
    var tips18 = document.getElementById('tips18');
    var tips19 = document.getElementById('tips19');
    var tips20 = document.getElementById('tips20');

    document.getElementById('entry.673268180').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips16 = document.getElementById('tips16');
            this.style.border="2px solid red";
            this.style.color="red";
            tips16.style.color="red";
            tips16.style.display="block";
        }
        else{
            var tips16 = document.getElementById('tips16');
            this.style.border="2px solid green";
            this.style.color="black";
            tips16.style.display="none";
        }
    });

    document.getElementById('entry.1332440165').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips17 = document.getElementById('tips17');
            this.style.border="2px solid red";
            this.style.color="red";
            tips17.style.color="red";
            tips17.style.display="block";
        }
        else{
            var tips17 = document.getElementById('tips17');
            this.style.border="2px solid green";
            this.style.color="black";
            tips17.style.display="none";
        }
    });

    document.getElementById('entry.199551056').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips18 = document.getElementById('tips18');
            this.style.border="2px solid green";
            this.style.color="black";
            tips18.style.display="none";
        }
        else{
            var tips18 = document.getElementById('tips18');
            this.style.border="2px solid red";
            this.style.color="red";
            tips18.style.color="red";
            tips18.style.display="block";
        }
    });
    
    document.getElementById('entry.673392367').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips19 = document.getElementById('tips19');
            this.style.border="2px solid green";
            this.style.color="black";
            tips19.style.display="none";
        }
        else{
            var tips19 = document.getElementById('tips19');
            this.style.border="2px solid red";
            this.style.color="red";
            tips19.style.color="red";
            tips19.style.display="block";
        }
    });
    
    document.getElementById('entry.59655766').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips20 = document.getElementById('tips20');
            this.style.border="2px solid red";
            this.style.color="red";
            tips20.style.color="red";
            tips20.style.display="block";
        }
        else{
            var tips20 = document.getElementById('tips20');
            this.style.border="2px solid green";
            this.style.color="black";
            tips20.style.display="none";
        }
    });

    var name = document.getElementById('entry.673268180');
    var valName = name.value;
    var company = document.getElementById('entry.1332440165');
    var valCompany = company.value;
    var email = document.getElementById('entry.199551056');
    var valEmail = email.value;
    var phone = document.getElementById('entry.673392367');
    var valPhone = phone.value;
    var message = document.getElementById('entry.59655766');
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
    
    // Romanian contact-form version
    var tips21 = document.getElementById('tips21');
    var tips22 = document.getElementById('tips22');
    var tips23 = document.getElementById('tips23');
    var tips24 = document.getElementById('tips24');
    var tips25 = document.getElementById('tips25');

    document.getElementById('entry.532391597').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips21 = document.getElementById('tips21');
            this.style.border="2px solid red";
            this.style.color="red";
            tips21.style.color="red";
            tips21.style.display="block";
        }
        else{
            var tips21 = document.getElementById('tips21');
            this.style.border="2px solid green";
            this.style.color="black";
            tips21.style.display="none";
        }
    });

    document.getElementById('entry.428949547').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips22 = document.getElementById('tips22');
            this.style.border="2px solid red";
            this.style.color="red";
            tips22.style.color="red";
            tips22.style.display="block";
        }
        else{
            var tips22 = document.getElementById('tips22');
            this.style.border="2px solid green";
            this.style.color="black";
            tips22.style.display="none";
        }
    });

    document.getElementById('entry.1999145749').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips23 = document.getElementById('tips23');
            this.style.border="2px solid green";
            this.style.color="black";
            tips23.style.display="none";
        }
        else{
            var tips23 = document.getElementById('tips23');
            this.style.border="2px solid red";
            this.style.color="red";
            tips23.style.color="red";
            tips23.style.display="block";
        }
    });
    
    document.getElementById('entry.540735837').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips24 = document.getElementById('tips24');
            this.style.border="2px solid green";
            this.style.color="black";
            tips24.style.display="none";
        }
        else{
            var tips24 = document.getElementById('tips24');
            this.style.border="2px solid red";
            this.style.color="red";
            tips24.style.color="red";
            tips24.style.display="block";
        }
    });
    
    document.getElementById('entry.636727888').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips25 = document.getElementById('tips25');
            this.style.border="2px solid red";
            this.style.color="red";
            tips25.style.color="red";
            tips25.style.display="block";
        }
        else{
            var tips25 = document.getElementById('tips25');
            this.style.border="2px solid green";
            this.style.color="black";
            tips25.style.display="none";
        }
    });

    var name = document.getElementById('entry.532391597');
    var valName = name.value;
    var company = document.getElementById('entry.428949547');
    var valCompany = company.value;
    var email = document.getElementById('entry.1999145749');
    var valEmail = email.value;
    var phone = document.getElementById('entry.540735837');
    var valPhone = phone.value;
    var message = document.getElementById('entry.636727888');
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
    
    // Swedish contact-form version
    var tips26 = document.getElementById('tips26');
    var tips27 = document.getElementById('tips27');
    var tips28 = document.getElementById('tips28');
    var tips29 = document.getElementById('tips29');
    var tips30 = document.getElementById('tips30');

    document.getElementById('entry.849668465').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips26 = document.getElementById('tips26');
            this.style.border="2px solid red";
            this.style.color="red";
            tips26.style.color="red";
            tips26.style.display="block";
        }
        else{
            var tips26 = document.getElementById('tips26');
            this.style.border="2px solid green";
            this.style.color="black";
            tips26.style.display="none";
        }
    });

    document.getElementById('entry.571324349').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips27 = document.getElementById('tips27');
            this.style.border="2px solid red";
            this.style.color="red";
            tips27.style.color="red";
            tips27.style.display="block";
        }
        else{
            var tips27 = document.getElementById('tips27');
            this.style.border="2px solid green";
            this.style.color="black";
            tips27.style.display="none";
        }
    });

    document.getElementById('entry.525786706').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips28 = document.getElementById('tips28');
            this.style.border="2px solid green";
            this.style.color="black";
            tips28.style.display="none";
        }
        else{
            var tips28 = document.getElementById('tips28');
            this.style.border="2px solid red";
            this.style.color="red";
            tips28.style.color="red";
            tips28.style.display="block";
        }
    });
    
    document.getElementById('entry.88793057').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips29 = document.getElementById('tips29');
            this.style.border="2px solid green";
            this.style.color="black";
            tips29.style.display="none";
        }
        else{
            var tips29 = document.getElementById('tips29');
            this.style.border="2px solid red";
            this.style.color="red";
            tips29.style.color="red";
            tips29.style.display="block";
        }
    });
    
    document.getElementById('entry.279709470').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips30 = document.getElementById('tips30');
            this.style.border="2px solid red";
            this.style.color="red";
            tips30.style.color="red";
            tips30.style.display="block";
        }
        else{
            var tips30 = document.getElementById('tips30');
            this.style.border="2px solid green";
            this.style.color="black";
            tips30.style.display="none";
        }
    });

    var name = document.getElementById('entry.849668465');
    var valName = name.value;
    var company = document.getElementById('entry.571324349');
    var valCompany = company.value;
    var email = document.getElementById('entry.525786706');
    var valEmail = email.value;
    var phone = document.getElementById('entry.88793057');
    var valPhone = phone.value;
    var message = document.getElementById('entry.279709470');
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
    
    // English contact-form version
    var tips31 = document.getElementById('tips31');
    var tips32 = document.getElementById('tips32');
    var tips33 = document.getElementById('tips33');
    var tips34 = document.getElementById('tips34');
    var tips35 = document.getElementById('tips35');

    document.getElementById('entry.2079406731').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips31 = document.getElementById('tips31');
            this.style.border="2px solid red";
            this.style.color="red";
            tips31.style.color="red";
            tips31.style.display="block";
        }
        else{
            var tips31 = document.getElementById('tips31');
            this.style.border="2px solid green";
            this.style.color="black";
            tips31.style.display="none";
        }
    });

    document.getElementById('entry.316550343').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips32 = document.getElementById('tips32');
            this.style.border="2px solid red";
            this.style.color="red";
            tips32.style.color="red";
            tips32.style.display="block";
        }
        else{
            var tips32 = document.getElementById('tips32');
            this.style.border="2px solid green";
            this.style.color="black";
            tips32.style.display="none";
        }
    });

    document.getElementById('entry.943635049').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)){
            var tips33 = document.getElementById('tips33');
            this.style.border="2px solid green";
            this.style.color="black";
            tips33.style.display="none";
        }
        else{
            var tips33 = document.getElementById('tips33');
            this.style.border="2px solid red";
            this.style.color="red";
            tips33.style.color="red";
            tips33.style.display="block";
        }
    });
    
    document.getElementById('entry.606628895').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/.test(this.value)){
            var tips34 = document.getElementById('tips34');
            this.style.border="2px solid green";
            this.style.color="black";
            tips34.style.display="none";
        }
        else{
            var tips34 = document.getElementById('tips34');
            this.style.border="2px solid red";
            this.style.color="red";
            tips34.style.color="red";
            tips34.style.display="block";
        }
    });
    
    document.getElementById('entry.1949083325').addEventListener("keyup", function() {
        var val = "";
        val = this.value;

        if(val.length == undefined || val.length < 2){
            var tips35 = document.getElementById('tips35');
            this.style.border="2px solid red";
            this.style.color="red";
            tips35.style.color="red";
            tips35.style.display="block";
        }
        else{
            var tips35 = document.getElementById('tips35');
            this.style.border="2px solid green";
            this.style.color="black";
            tips35.style.display="none";
        }
    });

    var name = document.getElementById('entry.2079406731');
    var valName = name.value;
    var company = document.getElementById('entry.316550343');
    var valCompany = company.value;
    var email = document.getElementById('entry.943635049');
    var valEmail = email.value;
    var phone = document.getElementById('entry.606628895');
    var valPhone = phone.value;
    var message = document.getElementById('entry.1949083325');
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
