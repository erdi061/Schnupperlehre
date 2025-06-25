// Basic Terminal Calculator
// This program takes two numbers and an operation as input
// and performs the calculation

// We'll use the readline module to get user input
const readline = require("readline");

// Create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for the first number
rl.question("Enter the first number: ", (firstNumber) => {
  // Convert string input to a number
  firstNumber = parseFloat(firstNumber);

  // Ask user for the operation
  rl.question("Enter the operation (+, -, *, /): ", (operation) => {
    // Ask user for the second number
    rl.question("Enter the second number: ", (secondNumber) => {
      // Convert string input to a number
      secondNumber = parseFloat(secondNumber);

      // Variable to store the result
      let result;

      // Perform calculation based on the operation
      if (operation === "+") {
        result = firstNumber + secondNumber;
      } else if (operation === "-") {
        result = firstNumber - secondNumber;
      } else if (operation === "*") {
        result = firstNumber * secondNumber;
      } else if (operation === "/") {
        // Check for division by zero
        if (secondNumber === 0) {
          console.log("Error: Cannot divide by zero!");
          rl.close();
          return;
        }
        result = firstNumber / secondNumber;
      } else {
        // Handle invalid operations
        console.log("Error: Invalid operation! Please use +, -, *, or /");
        rl.close();
        return;
      }

      // Display the result
      console.log(
        `The result of ${firstNumber} ${operation} ${secondNumber} = ${result}`
      );

      // Close the readline interface
      rl.close();
    });
  });
});
