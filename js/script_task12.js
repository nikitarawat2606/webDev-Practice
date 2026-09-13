// File: script.js
import { calculateCompoundInterest } from './interest.js';

// Static variables using simple data types (numbers)
let principal = 400000;
let rate = 5;
let time = 3;
let compounds = 1;

let result = calculateCompoundInterest(principal, rate, time, compounds);

console.log("Total Amount: $" + result.totalAmount);
console.log("Compound Interest: $" + result.compoundInterest);