//read user's input
const num1 = parseFloat(prompt("Enter Num1: "));
//read user's operation
const operator = prompt("Enter Operation to be used: (+, -, *, /)");

const num2 = parseFloat(prompt("Enter Num2: "));

let result = 0;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
}
alert(`${num1} ${operator} ${num2} = ${result}`);
