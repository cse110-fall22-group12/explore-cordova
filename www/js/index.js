const operation_label = document.getElementById("operation-label");
const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");

let final_result = undefined;

function updateLabel(new_label) {
    operation_label.innerHTML = new_label
}

function init() {
    console.log("site initialized");
    buttons.forEach(element => {
        if(element.id == "equals") {
            element.addEventListener("click", event => {evaluateExpression(event)});
        } else {
            element.addEventListener("click", event => {handleOperationChange(event, element)});
        }

    });
}

function handleOperationChange(event, element) {
    // set the inner html of the equation to that of the clicked button
    operation_label.innerHTML = element.innerHTML;
}

function evaluateExpression(event) {
    // get both input numbers
    const inputs = document.querySelectorAll("input");
    const num1 = Number(inputs[0].value);
    const num2 = Number(inputs[1].value);
    const operation = operation_label.innerHTML;
    console.log(num1);
    console.log(num2);
    console.log(operation);
    switch(operation){
        case "+":
            final_result = num1 + num2;
            break;
        case "-":
            final_result = num1 - num2;
            break;
        case "*":
            final_result = num1 * num2
            break;
        case "/":
            final_result = num1 / num2;
            break;
        case "%":
            final_result = num1 % num2
            break;
        case "^":
            final_result = num1 ** num2;
            break;
        default:
            final_result = undefined;
            break;
    }
    console.log("final result is ", final_result);
    if(final_result !== undefined){
        output.innerHTML = final_result
    }
}


init();