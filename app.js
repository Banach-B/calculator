// Define Calculator object.
const Calculator = {

    // Define the functions for each operation.
    add: function(a, b) {
        return (new Decimal(a).plus(b)).toString();
    }, 
    subtract: function(a, b) {
        return (new Decimal(a).minus(b)).toString();
    }, 
    multiply: function(a, b) {
        return (new Decimal(a).times(b)).toString();
    }, 
    divide: function(a, b) {
        return (new Decimal(a).dividedBy(b)).toString();
    },

    // Define a method to calculate the result.
    calculate: function(input) {
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

        return result.toString()
    }
}

