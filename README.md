# webDev-Practice
tasks submission for TuteDude site course

**Project Overview**

>> This is a very simple and easy-to-understand JavaScript program. It takes different numbers and does 6 different math tasks for each number, showing the results clearly in your console.🚀 

>>What This Program DoesFor every number you choose, the program will:

>> Find the sum of numbers: Adds all numbers from 1 up to your number (for example, if your number is 3, it adds $1 + 2 + 3 = 6$).

>> Print multiplication table: Shows the table of your number from 1 to 10.

>> Check if it is a prime number: Tells you true or false depending on whether the number can only be divided by 1 and itself.

>>Find all factors: Shows all the numbers that can divide your number without leaving a remainder.

>> Find the sum of digits: Adds all the separate digits of your number together.

>> Check if it is an Armstrong number: Checks if multiplying each digit by itself (using the total number of digits as the power) and adding them up gives back the original number (for example, 153 or 1634).

## 📋 The CodeHere is the simple code used in this project:

# Define 5 different variables to check
let n1 = 3;
let n2 = 5;
let n3 = 7;
let n4 = 153;
let n5 = 1634;

>>  Function to do all the math tasks for any given number
function processNumber(n) {
    console.log(`--- Results for n = ${n} ---`);

    // 1. Sum of first n numbers
    let sumN = 0;
    for (let i = 1; i <= n; i++) {
        sumN = sumN + i;
    }
    console.log(`Sum of first ${n} numbers: ${sumN}`);

    // 2. Print multiplication table
    console.log(`Table of ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }

    // 3. Check if prime
    let isPrime = true;
    if (n < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(`Is Prime: ${isPrime}`);

    // 4. Print all factors
    let factors = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors += i + " ";
        }
    }
    console.log(`Factors: ${factors}`);

    // 5. Sum of digits
    let temp1 = n;
    let sumDigits = 0;
    while (temp1 > 0) {
        sumDigits += temp1 % 10;
        temp1 = Math.floor(temp1 / 10);
    }
    console.log(`Sum of digits: ${sumDigits}`);

    // 6. Check if Armstrong number
    let temp2 = n;
    let numDigits = n.toString().length;
    let armstrongSum = 0;
    
    while (temp2 > 0) {
        let rem = temp2 % 10;
        let powerVal = 1;
        for (let j = 0; j < numDigits; j++) {
            powerVal = powerVal * rem;
        }
        armstrongSum += powerVal;
        temp2 = Math.floor(temp2 / 10);
    }
    
    let isArmstrong = (armstrongSum === n);
    console.log(`Is Armstrong: ${isArmstrong}\n`);
}

// Run the function for all 5 variables
processNumber(n1);
processNumber(n2);
processNumber(n3);
processNumber(n4);
processNumber(n5);

>> 💻 How to Run the CodeMake sure you have Node.js installed on your computer.Copy the code above and save it in a file named script.js.Open your terminal or command prompt in the folder where your file is saved.Run this command:node script.js


>>Look at the console to see all your math results!