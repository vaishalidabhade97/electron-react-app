import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [currentValue, updateCurrentValue] = useState("")
  const [decimalAddedVal, updateDecimalAdded] = useState(false)
  const operators = ['+', '-', '*', '/'];

  const onClick = (e) => {
    let btnVal = e.target.innerHTML
    let value = currentValue
    let decimalAdded = decimalAddedVal;
    if (btnVal === "C") {
      value = ""
      decimalAdded = false
    }
    else if (btnVal === "=") {
      let equation = currentValue
      let lastChar = equation[equation.length - 1]
      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operators.indexOf(lastChar) > -1 || lastChar === '.'){
        equation = equation.replace(/.$/, '');
      }
      if(equation){
        value = eval(equation)
      }
			decimalAdded = false;

    }
    // Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
    else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = currentValue[currentValue.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(currentValue !== '' && operators.indexOf(lastChar) === -1) {
        value = currentValue + btnVal
      }
			
			// Allow minus if the string is empty
			else if(currentValue === '' && btnVal === '-') {
        value = currentValue + btnVal
      }
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && currentValue.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				value = currentValue.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
    
    // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal === '.') {
			if(!decimalAdded) {
        value = currentValue + btnVal
				decimalAdded = true;
			}
		}
    else {
      value = currentValue + btnVal
    }
    updateCurrentValue(value)
    updateDecimalAdded(decimalAdded)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div id="calculator">
        <div className="top">
          <button className="clear" onClick={onClick}>C</button>
          <div className="screen">{currentValue}</div>
        </div>

        <div className="keys">
          <button onClick={onClick}>7</button>
          <button onClick={onClick}>8</button>
          <button onClick={onClick}>9</button>
          <button className="operator" onClick={onClick}>+</button>
          <button onClick={onClick}>4</button>
          <button onClick={onClick}>5</button>
          <button onClick={onClick}>6</button>
          <button className="operator" onClick={onClick}>-</button>
          <button onClick={onClick}>1</button>
          <button onClick={onClick}>2</button>
          <button onClick={onClick}>3</button>
          <button className="operator" onClick={onClick}>/</button>
          <button onClick={onClick}>0</button>
          <button onClick={onClick}>.</button>
          <button className="eval" onClick={onClick}>=</button>
          <button className="operator" onClick={onClick}>*</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
