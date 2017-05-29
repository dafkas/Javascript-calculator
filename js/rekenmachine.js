//De buttons in een variable stoppen
var buttons = document.getElementsByClassName("btn"),
    display = document.getElementById("screen"),
    value1 = "",
    value2 = "",
    operator = "",
    operators = ["+", "-", "/", "*"];

//reset functie
function clear() {
    display.innerText = "";
    value1 = "";
    value2 = "";
    operator = "";
}

//bereken functie
function scherm() {
    display.innerText += this.innerText;

    var buttonValue = this.innerHTML;

//scherm leeg maken
    if (buttonValue == "Reset") {
        clear();

    } else if (buttonValue == "=") {
        var resultaat;
        
        //uitrekenen van de operators
        switch (operator) {
        case "+":
            resultaat = parseInt(value1) + parseInt(value2);
            break;
        case "-":
            resultaat = parseInt(value1) - parseInt(value2);
            break;
        case "*":
            resultaat = parseInt(value1) * parseInt(value2);
            break;
        case "/":
            resultaat = parseInt(value1) / parseInt(value2);
            break;
        default:
            clear();
        }

        clear();
        display.innerText = resultaat;
        value1 = resultaat;

    } else {    
        if (operators.indexOf(this.innerHTML) != -1) {
            operator = this.innerHTML;
        } else {
            if (operator == "") {

                value1 += this.innerHTML;

            } else {

                value2 += this.innerHTML;

            }
        }
    }
}

//inhoud van cijfer button berekenen en laten zien.,
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", scherm);

}


