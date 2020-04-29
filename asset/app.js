var firstNumber = "";
var secondNumber = "";
var operator;
var result;
var isOperatorChosen = false;


function startCalculator() {
    firstNumber = "";
    secondNumber = ""; 
    operator = "";
    result = "";
    $("#first-number, #operator, #second-number, #result").empty();
};

startCalculator();

$(".number").on("click", function() {
    if(isOperatorChosen) {
        secondNumber += this.value;
        $("#second-number").html(secondNumber);
    } else {
        firstNumber += this.value;
        $("#first-number").html(firstNumber);
    }
});

$(".operator").on("click", function() {
    operator = this.value;
    isOperatorChosen = true;

    $("#operator").html(operator);
});

$(".equal").on("click", function() {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    if(operator === "plus") {
        result = firstNumber + secondNumber;
    } else if (operator === "minus") {
        result = firstNumber - secondNumber;
    } else if (operator === "times") {
        result = firstNumber * secondNumber;
    } else if (operator === "divide") {
        result = firstNumber / secondNumber;
    } else if (operator === "power") {
        result = Math.pow(firstNumber, secondNumber);
    }
    $("#result").append(result);
});

$(".clear").on("click", function() {
    startCalculator();
});
