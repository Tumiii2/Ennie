// Welcome message
window.onload = function(){
    alert("Welcome! This is a welcome message");
};



// string variables
let myString ="Hello Dear!";

// Boolean variables
let myBoolean = true;

// Number variables
let num1 = 20;
let num2 = 10;

// Addition operation
 let additionResult = num1 + num2;  
 
//  Subtraction operation
let subtractionResult = num1 - num2;

// Multiplication operation
let MultiplicationResult = num1 * num2;

console.log("String:",myString);
console.log("Boolean:",myBoolean);
console.log("Addition:",additionResult);
console.log("Subtraction:",subtractionResult);
console.log("Multiplication:",MultiplicationResult);



// Input a number
let userInput = prompt("Enter a number:");

// Converting the input to a number
let number =parseInt(userInput);

// checking if the number is valid and not NaN
if(!isNaN(number)){

    if(number % 2 === 0){
        console.log(number +" is an even number.");
    }else{
        console.log(number +" is an odd number.");
    }
} else{
    console.log("please enter a valid number.");
}



for(let i = 1; i<= 10; i++){
    console.log(i);
}

function addNumbers(number1, number2){
    return number1 + number2;
}
// calling function with different arguments
const result1 = addNumbers(10, 2);
const result2 = addNumbers(5, 3);

// display results
console.log("Result1:", result1);
console.log("Result2", result2);

// array of my favourite fruits
const fruits = ["apple", "mango", "pineapple", "banana."];

console.log("fruits", fruits);

// object representing a person with properties
let array_person = {
    name: 'Delight',
    age: 20,
    hobby: 'Painting'
};

console.log("array_person", array_person);


function modifyArray(arr, callback) {
    // Applying  the callback to each element
    return arr.map(callback);
  }
  
  // Callback functions
  function double(num) {
    return num * 2;
  }
  
  function square(num) {
    return num * num;
  }
  
  // An Example 
  const array = [2, 4, 6, 8, 10];
  
  // Using the modifyArray function with different callback functions
  const doubledArray = modifyArray(array, double);
  const squaredArray = modifyArray(array, square);
  
  console.log("Doubled array:", doubledArray);
  console.log("Squared array:", squaredArray);
  




