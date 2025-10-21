// IIFE & Callback Function

// 1. IIFE (Immediately Invoked Function Expression)
//    self-executing anonymous function

(function () {
  console.log("Hello World");
})();

//With parameter & return value
let output = (function (fullName) {
  return "Hello " + fullName;
})("John Doe");

console.log(output);

//2. Callback Function
//   function passed into another function as an argument

// function greetings(callback) {
//   callback();
// }

// //Function as args must be a anonymous function
// greetings(function () {
//   console.log("Hello Callback");
// });

//Callback function with parameter & return value
function greetings(callback) {
  let output = callback("John Doe");
  return output;
}

//Function as args must be an anonymous function
let output2 = greetings(function (fullName) {
  return "Hello " + fullName;
});

console.log(output2);

//Exercise #01
//Buatlah program untuk menghitung BMI dengan menggunakan
//IIFE & Callback Function (with parameter & return value).
// Bisa dilihat di mini exercise sebelumnya