var firstNumber = "";
var secondNumber = "";
var operator;
var result;
var isOperatorChosen = false;

$(".number").on("click", function() {
    if(isOperatorChosen) {
        secondNumber += this.value;
        $("#second-number").append(secondNumber);
    } else {
        firstNumber += this.value;
        $("#first-number").append(firstNumber);
    }
});

$(".operator").on("click", function() {
    operator = this.value;
    isOperatorChosen = true;

    $("#operator").append(operator);
});

