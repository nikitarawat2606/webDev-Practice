# webDev-Practice
tasks submission for TuteDude site course

# Task 12 : JavaScript Compound Interest Calculator

>> A simple JavaScript program to calculate compound interest using static variables and the standard financial formula.

# Objective : Create a JavaScript program that calculates compound interest using variables, operators, and exponentiation.

## Formula A = A = P * (1 + r/n)^(nt)

>> Where: A = Total amount , P = Principal amount, r = Annual interest rate (decimal), n = Compounding frequency per year , t = Time in years, 

>> Compound Interest: = A - P

## How to RunCreate a file named script.js.

>> Add your JavaScript code using variables and the formula.Run it using Node.js:node script.js

>> Alternatively, run it inside an HTML file via your browser console.

# Code Example :

>> let principal = 400000;
>> let rate = 5;
>> let time = 3;
>> let compounds = 1;

>> let A = P * Math.pow((1 + (r / n)), (n * t));
>> let compoundInterest = A - P;

>> console.log("The compound interest after 3 years is: " + compoundInterest.toFixed(0));

# Sample OutputThe compound interest after 3 years is: 50000
