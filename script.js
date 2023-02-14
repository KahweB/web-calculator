let screen = document.getElementById("screen");
let isScreenEmpty = true;
let button = document.querySelectorAll("button");
let inputOne = null;
let inputTwo = null;
let operator = null;
let isMultiple = false;

button.forEach((element) => {
    element.addEventListener("click", onClick);
})

function numberInsert(value) {
    isScreenEmpty = false;
    if (isMultiple == true) {
        screenReset();
        isMultipleNuller();
        screen.innerHTML += value;
    }
    else{
        screen.innerHTML += value;
    }
}
function inputERR(){
    if (isScreenEmpty === true) {
        alert("do not press operator before number");
        resetAll();
    }
}
function onClick(elem){
    let value = elem.target.value;
    
    switch (value) {
        case "+":
            inputERR();
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
            inputERR();
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
            inputERR();
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
            inputERR();
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
            inputERR();
            operate();
            let isOperate = true;
            resetAll(isOperate);
            break;
        default:
            numberInsert(value);
            break;
    }
}
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
    return parseInt(inputOne) + parseInt(inputTwo);
}
function subtract(){
    return parseInt(inputOne) - parseInt(inputTwo);
}
function multiply() {
    return parseInt(inputOne) * parseInt(inputTwo);
}
function divide(){
    // return Math.round(parseInt(inputOne)/parseInt(inputTwo)); not working??
    let roundThis = parseInt(inputOne) / parseInt(inputTwo);
    return Math.floor(roundThis);
}
function screenReset(){
    screen.innerHTML = null;
}
function resetAll(isOperate){
    if(isOperate === true){
        inputOne = null;
        inputTwo = null;
        operator = null;
        isScreenEmpty = true;
    }
    else{
        inputOne = null;
        inputTwo = null;
        screenReset();
        isMultipleNuller();
        operator = null;
        isScreenEmpty = true;
        
    }
}
function isMultipleNuller() {
    isMultiple = false;
}
