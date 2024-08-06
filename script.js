//String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.

function ReverseString(str) {
    return str.split('').reverse().join('');
}

let inputStr = "Independance";
console.log(ReverseString(inputStr)); 

//Count Characters: Create a function that counts the number of characters in a string.




function countCharacters(str) {
    return str.length;
}

let inputStr1 = "Bassam is beautiful";
console.log(countCharacters(inputStr1));  


//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.*/
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let inputSentence = "hello world";
console.log(capitalizeWords(inputSentence));  // Output: "Hello World"





//****************************************************
// Array//




////1/////////


function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

let numbers = [3, 5, 1, 9, 6];
console.log(findMaximum(numbers));  // Output: 9
console.log(findMinimum(numbers));  // Output: 1








//2//
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example usage:
let numbers1 = [3, 5, 1, 9, 6];
console.log(sumArray(numbers1));  // Output: 24


//3//


function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}

let numbers2 = [3, 5, 1, 9, 6];
let isEven = num => num % 2 === 0;
console.log(filterArray(numbers2, isEven));  // Output: [6]




/****************************************************************** */

//Mathematical funtions ////////



//1////
function factorial(n) {
    if (n < 0) return -1; // Factorial for negative numbers is not defined
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5));  // Output: 120




/////2////


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(7));  // Output: true
console.log(isPrime(4));  // Output: false




//3///

function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Example usage:
console.log(fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

