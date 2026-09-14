// Define 5 different variables to check (including 1634)
let n1 = 3;
let n2 = 5;
let n3 = 7;
let n4 = 153;
let n5 = 1634;

// Function to process a single number and print all requirements
function processNumber(n) {
    console.log(`--- Results for n = ${n} ---`);

    // 1. Sum of first n numbers
    let sumN = 0;
    for (let i = 1; i <= n; i++) {
        sumN = sumN + i;
    }
    console.log(`Sum of first ${n} numbers: ${sumN}`);

    // 2. Print table of n
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

    // 6. Check if Armstrong number (dynamically using the count of digits as the power)
    let temp2 = n;
    let numDigits = n.toString().length; // Get total number of digits
    let armstrongSum = 0;
    
    while (temp2 > 0) {
        let rem = temp2 % 10;
        let powerVal = 1;
        
        // Multiply 'rem' by itself 'numDigits' times
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