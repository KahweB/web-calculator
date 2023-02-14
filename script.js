let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let inputOne = null;
let inputTwo = null;
let operator = null;
let isMultiple = false;
function numberInsert(value) {
    if (isMultiple == true) {
        screenReset();
        isMultipleNuller();
        screen.innerHTML += value;
    }
    else{
        screen.innerHTML += value;
    }
}
function onClick(elem){
    let value = elem.target.value;
    numberInsert(value);
    switch (value) {
        case "+":
            operator = "+"
            if (inputOne != null) {
                operate();
            }
            else{
                inputOne = screen.innerHTML;
                screenReset();
            }
            break;
        case "-":
            operator = "-"
            if (inputOne != null) {
                operate();
            }
            else{
                inputOne = screen.innerHTML;
                screenReset();
            }
            break;
        case "*":
            operator = "*"
            if (inputOne != null) {
                operate();
            }
            else{
                inputOne = screen.innerHTML;
                screenReset();
            }
            break;
        case "/":
            operator = "/"
            if (inputOne != null) {
                operate();
            }
            else{
                inputOne = screen.innerHTML;
                screenReset();
            }
            break;
        case "reset":
            resetAll();
            break;
        case "operate":
            operate();
            let isOperate = true;
            resetAll(isOperate);
            break;
        default:
            break;
        
    }
}
button.forEach((element) => {
    element.addEventListener("click", onClick);
})
function operate(){
    inputTwo = screen.innerHTML;
    if (operator == "+") {
        screen.innerHTML = add();
        inputOne = screen.innerHTML;
        isMultiple = true;
    } 
    if (operator == "-") {
        screen.innerHTML = subtract();
        inputOne = screen.innerHTML;
        isMultiple = true;
    }
    if (operator == "*"){
        screen.innerHTML = multiply();
        inputOne = screen.innerHTML;
        isMultiple = true;
    }
    if (operator == "/"){
        screen.innerHTML = divide();
        inputOne = screen.innerHTML;
        isMultiple = true;
    }
    else {
        
    }
}
function add() {
    return parseInt(inputOne)+parseInt(inputTwo);
}
function subtract(){
    return parseInt(inputOne)-parseInt(inputTwo);
}
function multiply() {
    return parseInt(inputOne)*parseInt(inputTwo);
}
function divide(){
    return parseInt(inputOne)/parseInt(inputTwo);
}
function screenReset(){
    screen.innerHTML = null;
}
function resetAll(isOperate){
    if(isOperate === true){
        inputOne = null;
        inputTwo = null;
        operator = null;
    }
    else{
        inputOne = null;
        inputTwo = null;
        screenReset();
        isMultipleNuller();
        operator = null;
    }
}
function isMultipleNuller() {
    isMultiple = false;
}