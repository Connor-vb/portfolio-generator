// These all are the same.

// Using function expression syntax
const addNums = function(numOne, numTwo) {
    return numOne + numTwo;
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
};

// Only one paramater
const printProfileData = profileDataArr => {
    console.log(profileDataArgs);
}

// We can omit multiple things with arrow funtions like the following ex for only one action

const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8

// if we need to perform more than one action we would do something like the below ex
const addNums = (numOne, numTwo) => {
    console.log(numOne, numTwo);
    return numOne + numTwo;
}



// var is funtion-scoped, so re-declaring it in a block will cause its value outside the block to change as well:
var one = 'one: declared outside the block'; 

if (true === true) {
    var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
    console.log(one); // prints 'one: declared inside the block'
}

console.log(one); // also prints the one inside the block, because the variable was redeclared in the 'if' block.  The outer 'var' variable was therefore destroyed and replaced by the iner var variable


// 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

let two = 'two: declared outside the block';

if (true === true) {
    let two = 'two: declared inside the block';
    console.log(two); // prints 'two: declared inside the block'
}

console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by eachother.

