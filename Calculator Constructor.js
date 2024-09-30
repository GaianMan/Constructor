// Create functions for the Calculator class that can do the following:
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
function Calculator(){

}

const calculator = new Calculator();

Calculator.prototype.add=function(...args) {
    return args.reduce(function(a, b) {
        return a + b;
    });
};
console.log(calculator.add(10,5));

Calculator.prototype.subtract=(...args)=>{
    return args.reduce((a, b) => a - b);};
console.log(calculator.subtract(10, 5));

Calculator.prototype.multiply=(...args)=>{return args.reduce((a, b) => a * b);};
console.log(calculator.multiply(10, 5));

Calculator.prototype.divide=(...args)=>{return args.reduce((a, b) => a / b);};
console.log(calculator.divide());
