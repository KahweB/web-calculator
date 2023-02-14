let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
function onClick(elem){
    
    switch (elem.target.value) {
        case "1":
            screen.innerHTML += "1";
            break;
        case "2":
            screen.innerHTML += "2";
            break;
        case "3":
            screen.innerHTML += "3";
            break;
        case "4":
            screen.innerHTML += "4";
            break;
        case "5":
            screen.innerHTML += "5";
            break;
        case "6":
            screen.innerHTML += "6";
            break;
        case "7":
            screen.innerHTML += "7";
            break;
        case "8":
            screen.innerHTML += "8";
            break;
        case "9":
            screen.innerHTML += "9";
            break;
        case "0":
            screen.innerHTML += "0";
            break;
        default:
            break;
        
    }
}
button.forEach((element) => {
    element.addEventListener("click", onClick);
})




function add(numberOne,numberTwo) {
    return numberOne+numberTwo;
}
function subtract(numberOne,numberTwo){
    return numberOne-numberTwo;
}
function multiply(numberOne,numberTwo) {
    return numberOne*numberTwo;
}
function divide(numberOne,numberTwo){
    return numberOne/numberTwo;
}
function operate(operator,numberOne,numberTwo) {
    switch (operator) {
        case "add":
            add(numberOne,numberTwo);
            break;
        case "subtract":
            subtract(numberOne,numberTwo);
            break;
        case "multiply":
            multiply(numberOne,numberTwo);
            break;
        case "divide":
            divide(numberOne,numberTwo);
            break;
    }
}