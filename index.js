// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name. 
*/

var principal = 200000;
var interest = 0.05;
var years = 30;




// // 🏡 Task 1.5: Simple Math
// /* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

// Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

// Create another variable called `periods` and give it the value of years*12.
// */
monthlyInterestRate = interest/12;
periods = years*12;



// // 🏡 Task 2: Harder Math
// /* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

// Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

// Hint #2: you'll need to use the `math` object for parts of this calculation!

// When your math is correct, monthlyRate will equal 1073.64
// */
    var calcIntrest = monthlyInterestRate + 1;
    var calcPow = Math.pow(calcIntrest, periods);
    var numerator = monthlyInterestRate * calcPow;

    var denominator = calcPow - 1;
    var almostSolved = numerator / denominator;
    var monthlyRate = principal * almostSolved;


// // 🏡 Task 3: Function
// /* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

// If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
// */

// function mortgageCalculator() {
//     var principal = 200000;
//     var interest = 0.05;
//     var years = 30;

//     monthlyInterestRate = interest/12;
//     periods = years*12;

//     var calcIntrest = monthlyInterestRate + 1;
//     var calcPow = Math.pow(calcIntrest, periods);
//     var numerator = monthlyInterestRate * calcPow;

//     var denominator = calcPow - 1;
//     var almostSolved = numerator / denominator;
//     var monthlyRate = principal * almostSolved;

//     //return {name} + ", your monthly rate is " + monthlyRate;
//     return `${name}, your monthly rate is ${monthlyRate}`;
// }

// console.log(mortgageCalculator());





// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/

// function mortgageCalculatorParmas(P, I, N) {
//     name = "Jonathan";
//     var monthlyInterestRate = I/12;
//     var calcIntrest = monthlyInterestRate + 1;
//     var periods = N * 12;
//     var calcPow = Math.pow(calcIntrest, periods);
//     var numerator = monthlyInterestRate * calcPow;

//     var denominator = calcPow - 1;
//     var almostSolved = numerator / denominator;
//     var monthlyRate = P * almostSolved;

//     return monthlyRate;
// }





// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

function mortgageCalculator(P, I, N, C) {
    let x = 0;
    
    if (C>740) {
        x = I * .05;
        I = I - x;
    } else if (C<640) {
        x = I * .05;
        I = I + x;
    } else {
        I;
    }


    name = "Jonathan";
    var monthlyInterestRate = I/12;
    var calcIntrest = monthlyInterestRate + 1;

    var periods = N * 12;
    var calcPow = Math.pow(calcIntrest, periods);
    var numerator = monthlyInterestRate * calcPow;

    var denominator = calcPow - 1;
    var almostSolved = numerator / denominator;
    var monthlyRate = P * almostSolved;


    
    return name + ", your monthly rate is " + monthlyRate;
}

console.log(mortgageCalculator(200000, 0.05, 30, 800));



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/

function variableInterestRate (P, I, N) {
    
    let variableInterest = I - .02;
    for (let i = 0; i<9; i++ ) {
        
    var name = "Jonathan";
    var monthlyInterestRate = variableInterest/12;
    var calcIntrest = monthlyInterestRate + 1;

    var periods = N * 12;
    var calcPow = Math.pow(calcIntrest, periods);
    var numerator = monthlyInterestRate * calcPow;

    var denominator = calcPow - 1;
    var almostSolved = numerator / denominator;
    var monthlyRate = P * almostSolved;

    console.log(`${name}, with an interest rate of, ${variableInterest.toFixed(3)}, your monthly rate is ${monthlyRate.toFixed(2)}`);
    variableInterest = variableInterest + .005;
    }
    

    

}

variableInterestRate(200000, 0.04, 30 )


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
