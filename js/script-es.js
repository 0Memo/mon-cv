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
