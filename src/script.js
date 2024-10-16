// Select the screen element where the output will be displayed
const screen = document.getElementById('screen');

// Initialize variables to store the current operation and result
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

// Function to update the screen
function updateScreen(value) {
    screen.value = value;
}

// Handle key clicks
document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.value;

        // Handle clear button
        if (value === 'clear') {
            currentInput = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            result = '';
            updateScreen('');
            return;
        }

        // Handle operator clicks
        if (event.target.classList.contains('operator')) {
            if (firstOperand && currentInput && operator) {
                // Calculate if already a previous operation was entered
                secondOperand = currentInput;
                result = calculate(firstOperand, secondOperand, operator);
                updateScreen(result);
                firstOperand = result; // Store the result for the next operation
            } else {
                firstOperand = currentInput;
            }
            operator = value;
            currentInput = ''; // Clear the input for the next number
            return;
        }

        // Handle equals button
        if (value === '=') {
            if (operator && firstOperand && currentInput) {
                secondOperand = currentInput;
                result = calculate(firstOperand, secondOperand, operator);
                updateScreen(result);
                firstOperand = ''; // Clear for next calculation
                operator = '';
                currentInput = result; // Keep result in case user wants to continue
            }
            return;
        }

        // Append input for numbers and decimal
        currentInput += value;
        updateScreen(currentInput);
    });
});

// Perform the calculation
function calculate(first, second, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            result = parseFloat(first) - parseFloat(second);
            break;
        case '*':
            result = parseFloat(first) * parseFloat(second);
            break;
        case '/':
            result = parseFloat(first) / parseFloat(second);
            break;
        default:
            return;
    }

    return result.toString();
}
