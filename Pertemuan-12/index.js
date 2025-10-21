//Destructuring and Module
//1. Destructuring Array
// const numbers = [1, 2, 3, 4, 5]; //structuring

//Destructuring ES6
// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

//Destructuring Array sebagaian item saja
// const [num1, num2, num3, num4, num5] = numbers
// console.log(num1, num2, num3, num4, num5);  --> output = 1 2 3 4 5
// const [, , num3, ,] = numbers; //lebih sederhana
// console.log(num3);
// const[num1, num2, ...rest] = numbers;
// console.log(num1, num2, rest);

//Detructuring Object
// const student = {
//     fullName: "John",
//     age: 25,
//     status: "active"
// };
// //cara ES5
// const fullName = student.fullName;
// const age = student.age;
// const status = student.status;

// const {fullName, age, status} = student;
// console.log(fullName, age, status);

//Destructuring object sebagai object
// const {age} = student;
// console.log(age);

////Destructuring object dengan rest parameter
// const { fullName, ...rest} = student;
// console.log(fullName, rest)

//Mini Exercise
//buka di classroom

//Module
import { student } from "./data.js";
import ucapkanSalam from "./sayGreetings.js";

console.log(student);
console.log(numbers);
ucapkanSalam();