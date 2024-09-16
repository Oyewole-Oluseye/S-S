let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendOperator(op) {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = op;
    }
}

function calculate() {
    if (previousNumber !== '' && currentNumber !== '' && operator !== null) {
        let result = 0;
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
        }
        display.value = result;
        previousNumber = '';
        currentNumber = '';
        

        operator = null;
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = null;
}

// Add event listeners to clear and equals buttons
document.querySelector('.key.clear').addEventListener('click', clearDisplay);
document.querySelector('.key.equal').addEventListener('click', calculate);
