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
