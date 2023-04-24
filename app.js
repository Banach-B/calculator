
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

// Get DOM elements. 
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const displayCurrent = document.querySelector('.display-current');
const displayPrevious = document.querySelector('.display-previous');
const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operand]');
