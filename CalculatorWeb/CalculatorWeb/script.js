var inputNum = "";
var inputBox = document.getElementById("inputBox");
var a = 0, b = 0;

var operationEnum = {
    add: 1,
    subtract: 2,
    divide: 3,
    multiply: 4
}

//Holds current selection for operation desired (By default addition).
var opFlag = 1;

function GetInput(num){
    inputNum += num;
    console.log(inputNum);
    inputBox.setAttribute('value', inputNum);
}


/* ---------------- OPERATIONS ---------------- */
function Add(){
    AcceptAValue();
    ClearInputBox();
    opFlag = operationEnum.add;
}
function Subtract(){
    AcceptAValue();
    ClearInputBox();
    opFlag = operationEnum.subtract;
}
function Divide(){
    AcceptAValue();
    ClearInputBox();
    opFlag = operationEnum.divide;
}
function Multiply(){
    AcceptAValue();
    ClearInputBox();
    opFlag = operationEnum.multiply;
}
/* -------------------------------------------- */

function Calculate(){
    let result = 0;

    if(inputBox.getAttribute('value') == ""){
        b = 0;
    }
    else{
        b = parseInt(inputBox.getAttribute('value'));
    }
    
    inputBox.setAttribute('value', "");

    switch(opFlag){
        case operationEnum.add:
            result = a + b;
            break;
        case operationEnum.subtract:
            result = a - b;
            break;
        case operationEnum.divide:
            result = a / b;
            break;
        case operationEnum.multiply:
            result = a * b;
            break;
    }

    inputBox.setAttribute('value', result);
    a = result;
    b = 0;
    inputNum = "";
}

function ClearInputBox(){
    inputBox.setAttribute('value', "");
    inputNum = "";
}

function ResetEverything(){
    a = 0, b = 0;
    inputNum = "";
    inputBox.setAttribute('value', "");
    opFlag = operationEnum.Add;
}

function Backspace(){
    inputNum = inputNum.substring(0, inputNum.length - 1);
    inputBox.setAttribute('value', inputNum);
}

function AcceptAValue(){
    if(inputBox.getAttribute('value') != ''){
        a = parseInt(inputBox.getAttribute('value'));
    }
}