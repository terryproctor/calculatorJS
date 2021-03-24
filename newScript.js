// operator functions
add = (a,b) => parseFloat(a + b);
subtract = (a,b) => parseFloat(a - b);
multiply = (a,b) => parseFloat(a * b);
divide = (a,b) => {
    if (b === 0) {
        alert("Can't divide by 0!");
        return "0";
    } else {
        return parseFloat(a / b);
    }
};

//operator functions wrapper, slice to avoid float point errors
operate = (a, operator, b) => {
    switch (operator) {
        case "+":
            return String(add(a,b)).slice(0,13);
    
        case "-":
            return String(subtract(a,b)).slice(0,13);
        
        case "*":
            return String(multiply(a,b)).slice(0,13);

        case "/":
            return String(divide(a,b)).slice(0,13);
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
    
    // multiple operators scenario
    if (formula.operand1 && formula.operator && formula.operand2)
      { 
        formula.result = 
        //work out fomula display it and store result
        operate(Number(formula.operand1), formula.operator, 
        Number(formula.operand2));

        display.textContent = String(formula.result);

        formula.operand1 = formula.result;
      }
    
    //add operator
    formula.operator = target.dataset.value;
    console.log(formula);
  }

  if(target.className === "equal") {
    // only run if have a operator b, and operator is not on screen 
    if (formula.operand1 && formula.operator && 
      !isNaN(display.textContent)) {
    // push to operand2
    formula.operand2 = display.textContent;
    
    formula.result = 
    //work out fomula display it and store result
    operate(Number(formula.operand1), formula.operator, Number(formula.operand2));
    
    display.textContent = String(formula.result)

    // reset formula
    formula.operand1 = formula.operator = formula.operand2 = null;
    }
  }

  // -/+ key
  if (target.className === 'neg') {
    display.textContent = `${-Number(display.textContent)}`
  }

  //DEL key
  if (target.dataset.value === 'clear' && display.textContent !== String(formula.result)) {
    display.textContent =  display.textContent.slice(0, -1);
  if (display.textContent === '-') {display.textContent = ''};
  }

  //AC key
  if (target.dataset.value === 'allClear') {
    display.textContent =  "0";
    //set all keys in formula to null (reset)
    Object.keys(formula).forEach(key => formula[key] = null);
    };
  

});

//need to add exp functionality

// need to test more floating formulas