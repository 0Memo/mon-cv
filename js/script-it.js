// Italian language page access
    document.getElementById("italian").onclick = function () {
        location.href = "versione_italiana.html";
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
