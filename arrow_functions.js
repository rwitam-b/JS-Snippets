/* Regular anonymous function */
/*
function (arg) {
    // lines of code
}*/

/* Conscise anonymous functions using arrow syntax */

// Getting rid of "function" and introduce THE ARROW
/*(arg) => {
    // lines of code
}*/

// Getting rid of parenthesis if only one argument is present!
/*arg => {
    // lines of code
}*/

// Get rid of curly braces if the function body consists of only 1 statement!
// No semicolon required after the statement as well!
/*arg => console.log(arg)*/

// "return" is implied if that's the only statement in your function
// arg => arg * 2; // Yes!
// arg => return arg*2; // Nope!

/* Array Map */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var squares = [];

// Regular Way
squares = nums.map(function (num) {
    return num * num;
});

// Arrow Syntax
squares = nums.map(num => num * num);

/* Array Filter */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
var odd = [];

// Regular Way
even = nums.filter(function (num) {
    return num % 2 == 0;
});
odd = nums.filter(function (num) {
    return num % 2 != 0;
});

// Arrow Syntax
even = nums.filter(num => num % 2 == 0);
odd = nums.filter(num => num % 2 != 0);

// Smarter condition
even = nums.filter(num => !(num % 2));
odd = nums.filter(num => (num % 2));

/* Array Reduce */
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

// Regular Way
sum = nums.reduce(function (accumulator, num) {
    accumulator += num;
    return accumulator;
});

// Arrow Syntax
sum = nums.reduce((accumulator, num) => accumulator + num);
