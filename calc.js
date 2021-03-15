// operator functions
add = (a,b) => a + b;
subtract = (a,b) => a - b;
multiply = (a,b) => a * b;
divide = (a,b) => {
    if (b === 0) {
        return "Can't divide by 0!"
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

//adding texg to display
let addText = (e) => {
    let text = e.target.textContent; 
    display.textContent += text;
};

//adding event listeners to display
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(e) {
        addText(e);
    }, false)
}

let test = (display.textContent);
console.log(test);