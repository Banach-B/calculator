
// Define Calculator object.
const Calculator = {

    // Define the functions for each operation.
    add: function (a, b) {
        return (new Decimal(a).plus(b)).toString();
    },
    subtract: function (a, b) {
        return (new Decimal(a).minus(b)).toString();
    },
    multiply: function (a, b) {
        return (new Decimal(a).times(b)).toString();
    },
    divide: function (a, b) {
        return (new Decimal(a).dividedBy(b)).toString();
    },

    // Define a method to calculate the result.
    calculate: function (input1, operation, input2) {
        let result;

        switch (operation) {
            case '+':
                result = this.add(input1, input2);
                break;

            case '-':
                result = this.subtract(input1, input2);
                break;

            case '*':
                result = this.multiply(input1, input2);
                break;

            case '/':
                result = this.divide(input1, input2);
                break;
        }

        return result;
    }
}
// Define display object.
const Display = {

    // Method to update the current number on display.
    updateCurrent: function () {
        displayCurrent.textContent = currentNumber;
    },
    // Method to update the previous number and operation on display/
    updatePrevious: function () {
        displayPrevious.textContent = previousNumber + ' ' + currentOperation;
    },
    // Method to update both current and previous numbers on display.
    update: function () {
        this.updateCurrent()
        this.updatePrevious()
    },
    // Method to clear the display and reset variables. 
    clear: function () {
        currentNumber = '';
        previousNumber = '';
        currentOperation = '';
        this.update();
    }
}

let previousNumber = '';
let currentNumber = '';
let currentOperation = '';

// Get DOM elements. 
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const displayCurrent = document.querySelector('.display-current');
const displayPrevious = document.querySelector('.display-previous');
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operand]');

// Event listeners
allClearBtn.addEventListener('click', () => {
    Display.clear()
});

deleteBtn.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    Display.update();
});

equalsBtn.addEventListener('click', () => {
    // Prevents from division by zero.
    if (currentOperation === '/' && currentNumber === '0') return;
    // Prevents from calculation without number and operation symbol. 
    if (currentNumber.length === 0 || currentOperation === '') return;
    previousNumber = Calculator.calculate(previousNumber, currentOperation, currentNumber);
    currentNumber = '';
    currentOperation = '';
    Display.update();
});

numberBtn.forEach(element => {
    element.addEventListener('click', () => {
        const newNumber = event.target.textContent.toString();
        // Allows only one comma in a number.
        if (currentNumber.includes('.') && newNumber === '.') return;
        if (currentNumber.length === 0 && newNumber === '.') { currentNumber += '0' };
        // When previous number exists, prevents adding current number before choosing operation.
        if (previousNumber.length !== 0 && currentOperation.length === 0) return;
        currentNumber += newNumber;
        Display.update();
    });
});

operationBtn.forEach(element => {
    element.addEventListener('click', () => {
        let operation = event.target.textContent;
        // Prevents from division by zero.
        if (currentOperation === '/' && currentNumber === '0') return;
        // Doesn't allow to select operation without number to operate on.
        if (currentNumber.length === 0 && previousNumber.length === 0) return;
        if (currentNumber.length !== 0 && previousNumber.length === 0) {
            previousNumber = currentNumber;
            currentNumber = '';
            currentOperation = operation;
            Display.update();
        }
        if (currentNumber.length === 0 && previousNumber.length !== 0) {
            currentOperation = operation;
            Display.update();
        }
        if (currentNumber.length !== 0 && previousNumber.length !== 0) {
            previousNumber = Calculator.calculate(previousNumber, currentOperation, currentNumber);
            currentNumber = '';
            currentOperation = '';
            Display.update();
            currentOperation = operation;
            Display.update();
        }
    });
});

