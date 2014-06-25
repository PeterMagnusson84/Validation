var Validator = {

    init: function () {

        //Tar bort skicka-knappen.
        var form = document.getElementById("form");
        var fieldset = document.getElementById("fieldset");
        var button = document.getElementById("button");
        fieldset.removeChild(button);
        //Skapar länkknappen
        var sendButton = document.createElement("a");
        sendButton.setAttribute("href", "#");
        sendButton.id = "sendButton";

        //Funktion som kontrollerar att användaren fyllt i alla fält korrekt när det skickas.
        sendButton.onclick = function () {
            var fn = document.getElementById("fn");

            //Om användaren har fyllt i felaktig information ändras textfältets bakgrundsfärg.
            if (!firstName.value.match(/^[a-z|A-Z|å|Å|ä|Ä|ö|Ö]+$/) || firstName.value === "") {
                firstName.className = "wrong";//hämtar färgen ifrån css-filen
                return false;
            }
            //om allt stämmer går den hit
            else {
                firstName.className = "input";
            }



            var ln = document.getElementById("ln");

            if (!lastName.value.match(/^[a-z|A-Z|å|Å|ä|Ä|ö|Ö]+$/) || lastName.value === "") {
                lastName.className = "wrong";
                return false;
            }

            else {
                lastName.className = "input";
            }

            var zc = document.getElementById("zc");

            if (!zipCode.value.match(/^[0-9]{3}-[0-9]{2}$/) || zipCode.value === "") {
                zipCode.className = "wrong";
                return false;
            }

            else {
                zipCode.className = "input";
            }


            var pn = document.getElementById("pn");
            if (!phoneNumber.value.match(/^[0-9]+$/) || phoneNumber.value === "") {
                phoneNumber.className = "wrong";
                return false;
            }

            else {
                phoneNumber.className = "input";
            }

            var em = document.getElementById("em");
            if (!eMail.value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/) || eMail.value === "") {
                eMail.className = "wrong";
                return false;
            }

            else {
                eMail.className = "input";
            }

            
            Validator.showPopUp(firstName, lastName, zipCode, phoneNumber, eMail, gender);//Svaren skickas här vidare till popuprutan om dom stämmer

        }

        fieldset.appendChild(sendButton);
        var skicka = document.createTextNode("Skicka");
        sendButton.appendChild(skicka);

        
        
        //När användaren fyllt i ett fält kontrolleras det i validatorfunktionen och kollar att det stämmer när man går vidare till nästa fält
        var firstName = document.getElementById("firstName");
        firstName.onchange = function () {
            Validator.validateFirstName(firstName);
        };

        //När användaren har firstName-fältet markerat anropas tooltip-funktionen
        firstName.onfocus = function () {
            Validator.tooltip("Ange förnamn.", firstName);
        };
        //funktion som tar bort "hjälptexten"
        firstName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };



        var lastName = document.getElementById("lastName");
        lastName.onchange = function () {
            Validator.validateLastName(lastName);
        };

        lastName.onfocus = function () {
            Validator.tooltip("Ange efternamn.", lastName);
        };

        lastName.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };



        var zipCode = document.getElementById("zipCode");
        zipCode.onchange = function () {
            Validator.validateZipCode(zipCode);
        };

        zipCode.onfocus = function () {
            Validator.tooltip("Ange postnummer (XXX-XX).", zipCode);
        };

        zipCode.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };



        var phoneNumber = document.getElementById("phoneNumber")
        phoneNumber.onchange = function () {
            Validator.validatePhoneNumber(phoneNumber);
        };

        phoneNumber.onfocus = function () {
            Validator.tooltip("Ange telefonnummer.", phoneNumber);
        };

        phoneNumber.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };



        var eMail = document.getElementById("eMail")
        eMail.onchange = function () {
            Validator.validateEmail(eMail);
        };

        eMail.onfocus = function () {
            Validator.tooltip("Ange e-postadress.", eMail);
        };

        eMail.onblur = function () {
            document.body.removeChild(document.body.lastChild);
        };



        var gender = document.getElementById("gender");

    },
    //Här är validatorfunktionen som kontrollerar fältetn när man byter fält
    validateFirstName: function (firstName) {

        var fn = document.getElementById("fn");

        if (!firstName.value.match(/^[a-z|A-Z|å|Å|ä|Ä|ö|Ö]+$/) || firstName.value === "") {

            firstName.className = "wrong";
            return false;
        }

        else {
            firstName.className = "input";
        }
    },

    validateLastName: function (lastName) {

        var ln = document.getElementById("ln");

        if (!lastName.value.match(/^[a-z|A-Z|å|Å|ä|Ä|ö|Ö]+$/) || lastName.value === "") {
            lastName.className = "wrong";
            return false;
        }

        else {
            lastName.className = "input";
        }

    },

    validateZipCode: function (zipCode) {

        var zc = document.getElementById("zc");

        if (!zipCode.value.match(/^[0-9]{3}-[0-9]{2}$/) || zipCode.value === "") {
            zipCode.className = "wrong";
            return false;
        }

        else {
            zipCode.className = "input";
        }

    },

    validatePhoneNumber: function (phoneNumber) {

        var pn = document.getElementById("pn");
        if (!phoneNumber.value.match(/^[0-9]+$/) || phoneNumber.value === "") {
            phoneNumber.className = "wrong";
            return false;
        }

        else {
            phoneNumber.className = "input";
        }
    },

    validateEmail: function (eMail) {

        var em = document.getElementById("em");
        if (!eMail.value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/) || eMail.value === "") {
            eMail.className = "wrong";
            return false;
        }

        else {
            eMail.className = "input";
        }
    },
    //Tooltip funktionen
    tooltip: function (input, field) {
        var fieldset = document.getElementById("fieldset");
        var div = document.createElement("div");
        var tooltip = document.createTextNode(input);
        div.className = "tooltip";
        document.body.appendChild(div);
        div.appendChild(tooltip);

        //Skriver ut positionen på rätt ställe genom att anropa findPos-funktionen.
        var position = Validator.findPos(field);
        div.style.left = position[0] + "px";
        div.style.top = position[1] + "px";
    },

    //Funktion som ställer in positionen för tooltipsen.			
    findPos: function (field) {
        var curleft = 0;
        var curtop = 22;

        if (field.offsetParent) {
            do {
                curleft += field.offsetLeft;
                curtop += field.offsetTop;
            }

            while (field = field.offsetParent);
            return [curleft, curtop];
        }
    },

    showPopUp: function (firstName, lastName, zipCode, phoneNumber, eMail, gender) {//Hämtar värdena
        var form = document.getElementById("form");
        var dim = document.createElement("div");
        dim.id = "dim";//Används för att skugga bakgrunden

        document.getElementsByTagName("body")[0].appendChild(dim);
        //Skapar formuläret
        var popUp = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");
        var p6 = document.createElement("p");
        var p7 = document.createElement("p");

        var skicka = document.createElement("input");
        skicka.setAttribute("type", "submit");
        skicka.setAttribute("value", "Skicka");
        skicka.onclick = function () {
            form.submit();
        }

        var andra = document.createElement("input");
        andra.setAttribute("type", "submit");
        andra.setAttribute("value", "Ändra uppgifter");
        andra.onclick = function () {//Om användaren väljer att ändra/skicak uppgifter anropas denna
            document.getElementsByTagName("body")[0].removeChild(dim);
            document.body.removeChild(popUp);
        }

        popUp.id = "popUp";
        var h1 = document.createElement("h1");

        var control = document.createTextNode("Kontrollera dina uppgifter:")
        document.body.appendChild(popUp);
        popUp.appendChild(h1);
        h1.appendChild(control);

        var fornamn = document.createTextNode("Förnamn: " + firstName.value);

        var efternamn = document.createTextNode("Efternamn: " + lastName.value);

        var postnummer = document.createTextNode("Postnummer: " + zipCode.value);

        var telefonnummer = document.createTextNode("Telefonnummer: " + phoneNumber.value);

        var epost = document.createTextNode("E-post: " + eMail.value);

        var kon = document.createTextNode("Kön: " + gender.value);
        //Här ser man uppgifterna i popuprutan
        popUp.appendChild(p1);
        p1.appendChild(fornamn);
        popUp.appendChild(p2);
        p2.appendChild(efternamn);
        popUp.appendChild(p3);
        p3.appendChild(postnummer);
        popUp.appendChild(p4);
        p4.appendChild(telefonnummer);
        popUp.appendChild(p5);
        p5.appendChild(epost);
        popUp.appendChild(p6);
        p6.appendChild(kon);
        popUp.appendChild(p7);
        p7.appendChild(skicka);
        p7.appendChild(andra);


    }

};

window.onload = Validator.init;