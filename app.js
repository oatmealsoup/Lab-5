// app.js
import multiply, { add, subtract, } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Multiply: ', multiply(4, 5));  // Test the default export
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray
addAndLogUpper(10, 20);  // Test the new function
console.log([1,2,3,4,5,6,7,8,9,0]);
max=findmax([1,2,3,4,5,6,7,8,9,0]);
console.log(max);
console.log('ten max:', multiply(max, 10));
addAndLogUpper(0, multiply(max, 10));

