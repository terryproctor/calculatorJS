// operator functions
add = (a,b) => a + b;
subtract = (a,b) => a - b;
multiply = (a,b) => a * b;
divide = (a,b) => {
    if (b === 0) {
        alert("Can't divide by 0!");
        return "Can't divide by 0!";
    } else {
        return a / b;
    }
};

//operator functions wrapper
operate = (a, operator, b) => {
    switch (operator) {
        case "+":
            return add(a,b);
    
        case "-":
            return subtract(a,b);
        
        case "*":
            return multiply(a,b);

        case "/":
            return divide(a,b);
    }
};

//get elements
let display = document.getElementsByClassName('display')[0];
let numbers = document.getElementsByClassName('number');
let clear = document.getElementsByClassName('reset clear')[0];
let operators = document.getElementsByClassName('operator');
let negative = document.getElementsByClassName('negative')[0];
let equals = document.getElementsByClassName('equals')[0];

let formula = [];

//adding text to display
let addText = (e) => {
    let text = e.target.textContent; 
    display.textContent += text;
    console.log(formula);
    
};

//add operators
let addOperator = (e) => {
    formula.push(display.textContent);
    let text = e.target.textContent;
// change multiply and divide to code compatible 
    if (text === "x") {text = "*";};
    if (text === "÷") {text = "/";};

    formula.push(text);
    display.textContent = "";
    console.log(formula);
    
};

//clear display
let clearAll = () => {
    display.textContent = "";
    formula = [];
};

let evaluate = () => {
    formula.push(display.textContent);
    let a = Number(formula[0]);
    let operator = formula[1];
    let b = Number(formula[2]);
    let result = operate(a, operator, b);
    console.log(result);
    display.textContent = result;
    formula = [];
    return result;

};

//adding event listeners to display
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(e) {
        addText(e);
    }, false)
};

//ac button to clear display
clear.addEventListener('click', clearAll);

//operators get Element and add event listener
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
        addOperator(e);
    }, false)
};

// +/- functionality
negative.addEventListener('click', function() {
    display.textContent = `${-Number(display.textContent)}`
}, false);

equals.addEventListener('click', evaluate);

