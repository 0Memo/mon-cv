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
