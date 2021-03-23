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

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = document.querySelector('.display');

let formula = {
  operand1 : null,
  operator : null,
  operand2 : null,
  result: null,
};

keys.addEventListener('click', (e) => {
  const target = e.target;
  let input = "";

  //console.log(target.className)

  //number keys
  if (target.className === 'number') {
    if (display.textContent === '0' || isNaN(display.textContent)
        || display.textContent === String(formula.result)) {
      //new number
      display.textContent = target.dataset.value;
    } else {
      //append display
      display.textContent += target.dataset.value;
    }
    console.log(input)
  };

  //only add 1 decimal
  if ((target.className === 'decimal') && 
  (!display.textContent.includes('.'))) {
    display.textContent += '.';
  }

  //  +, -, / and *
  if (target.className === "operator") {
    if (formula.operand1 === null) {
      formula.operand1 = display.textContent;
      display.textContent = String(target.textContent);
    } else if (formula.operand1){
      formula.operand2 = display.textContent;
      display.textContent = String(target.textContent);
    }
    formula.operator = target.dataset.value;
    console.log(formula);
  }

  if(target.className === "equal") {
    formula.operand2 = display.textContent;
    display.textContent = formula.result = 
    //work out fomula display it and store result
    operate(Number(formula.operand1), formula.operator, Number(formula.operand2));
    // reset formula
    formula.operand1 = formula.operator = formula.operand2 = null;
  }

  // -/+ key
  if (target.className === 'neg') {
    display.textContent = `${-Number(display.textContent)}`
  }

  //C key
  if (target.dataset.value === 'clear') {
    display.textContent =  display.textContent.slice(0, -1);
  }

  //AC key
  if (target.dataset.value === 'allClear') {
    display.textContent =  "";
    //set all keys in formula to null (reset)
    Object.keys(formula).forEach(key => formula[key] = null);
    };
  

});