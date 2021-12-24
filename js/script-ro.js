// Romanian language page access
    document.getElementById("romanian").onclick = function () {
        location.href = "versiune_limba_romana.html";
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
