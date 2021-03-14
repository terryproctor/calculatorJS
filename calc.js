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

