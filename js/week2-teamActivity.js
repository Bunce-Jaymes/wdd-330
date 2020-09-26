function checkInput(input) {
    const uncheckedNumber = document.getElementById(input).value;
    const checkedNumber = parseFloat(uncheckedNumber);

    if (isNaN(checkedNumber)) {
        alert("Please only enter a number in the box");
        return null;
    } else {
        return checkedNumber;
    }

}

function displayOutput(value) {
    const outputHTML = document.getElementById("calcOutput");
    outputHTML.innerHTML = "Total: " + value;
}

function add(firstNumber, secondNumber) {
    if (firstNumber === null || secondNumber === null) {
        return 0;
    } else {
        return (firstNumber + secondNumber);
    }

}

function sub(firstNumber, secondNumber) {
    if (firstNumber === null || secondNumber === null) {
        return 0;
    } else {
        return (firstNumber - secondNumber);
    }
}

function divide(firstNumber, secondNumber) {
    const testForZero = (firstNumber / secondNumber);
    if (testForZero === Infinity) {
        return "Can not divide by zero";
    } else {
        return testForZero;
    }
}

function mult(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function calculate(operationType) {

    const total = operationType(checkInput("input1"), checkInput("input2"));

    displayOutput(total);


}

//function output() {
//
//    const userInput = document.getElementById("input1").value;
//    const outputText = document.getElementById("calcOutput");
//    const inputNumber = parseInt(userInput);
//    
//    if (isNaN(inputNumber)) {
//        alert("Please only enter a number in the box");
//    } else {
//        outputText.innerHTML = "Total: " + sum(inputNumber);
//    }
//    
//    function sum(number){
//        let total = 0;
//        
//        for (let i = 1; i <= number; i++) {
//            total += i;
//        }
//        return total;
//    }
//}
//
//function add(){
//    const userInput1 = document.getElementById("input1").value;
//    const userInput2 = document.getElementById("input2").value;
//    const outputText = document.getElementById("calcOutput");
//    const inputNumber1 = parseInt(userInput1);
//    const inputNumber2 = parseInt(userInput2);
//    
//    if (isNaN(inputNumber1) & isNaN(inputNumber2)) {
//        alert("Please only enter a number in the box");
//    } else {
//        outputText.innerHTML = "Total: " + (inputNumber1 + inputNumber2);
//    }
//    
//}
