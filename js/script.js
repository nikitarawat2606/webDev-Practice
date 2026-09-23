// Define a dummy array for testing purposes matching the sample output
const exArray = [4, 8, 2, 11, 6, 7, 10];

// 1. Function to find the maximum number using an arrow function
const findMax = (arr) => {
    return Math.max(...arr);
};

// 2. Function to calculate the sum of all elements using an anonymous function
const findSum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// 3. Function to count the number of odd numbers using an arrow function
const countOddNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

// Display the results of each operation on Console.log matching the sample output.
console.log("Ex Array:- [" + exArray.join(", ") + "]");
console.log("Maximum number: " + findMax(exArray));
console.log("Sum of all elements: " + findSum(exArray));
console.log("Count of odd numbers: " + countOddNumbers(exArray));