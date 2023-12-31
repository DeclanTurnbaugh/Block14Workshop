/* Only Odds
Create a JavaScript code that accepts an array of numbers 
and returns a new array with only the odd numbers from the 
original array. If there is only one odd number in the 
array, return an array with that single value.*/

let oddInput = [2, 4, 6, 8, 10, 11, 12];
let oddOutput = [];

for (let i = 0; i < oddInput.length; i++) {
  if (oddInput[i] % 2 != 0) {
    oddOutput.push(oddInput[i]);
  }
}

console.log(oddOutput);

/* Vowel Vs Consonant
Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

"a", "e", "i", "o", and "u" are considered vowels. 

Every other letter is considered a consonant.*/

let stringInput = "textbook";
let vowelCount = 0;
let consCount = 0;
const vowelArr = stringInput.split("");

for (let i = 0; i < vowelArr.length; i++) {
  switch (vowelArr[i]) {
    case "a":
      vowelCount++;
      break;
    case "e":
      vowelCount++;
      break;
    case "i":
      vowelCount++;
      break;
    case "o":
      vowelCount++;
      break;
    case "u":
      vowelCount++;
      break;
    default:
      consCount++;
  }
}

console.log(
  `${stringInput} has ${consCount} consonants and ${vowelCount} vowels.`
);

/* Reverse Array
With a for loop, create a JavaScript code that creates a new array in reverse order.*/

const forewardArr = [1, -1, 2, -3, 5, -8, 13];
const reverseArr = forewardArr.reverse();

console.log(reverseArr);

// Fizz Buzz

for (let i = 1; i < 101; i++) {
  let output = i + " ";
  if (i % 3 === 0) {
    output += "Fizz";
  }
  if (i % 5 === 0) {
    output += "Buzz";
  }
  console.log(output);
}

