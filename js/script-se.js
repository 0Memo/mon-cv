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
