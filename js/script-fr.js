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