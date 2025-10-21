//Rest Parameter & Spread Operator (...)
//1. Rest Parameter
//a. Rest parameter bertipe data array
//b. Rest parameter harus ada di terakhir dalam parameter list
const funct1 = (param1, param2, ...rest) => {
  let result = 0;
  rest.forEach((item) => (result += item));
  console.log(result);
};

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//2. Spread Operator
//Berkaitan dengan array dan object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Kegunaan Spread Operator pada Array
//1. Duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);
//2. Menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNum1 = num1.concat(num2, num3);
let combineNum2 = [...num1, ...num2, ...num3];
console.log(combineNum1);
console.log(combineNum2);

//Kegunaan Spread Operator pada Object
//1. Duplikasi object
const student1 = {
  fullName: "John",
  status: "active",
};
const student2 = { ...student1, address: "Manado" };
console.log(student2);

//2 Menggabungkan object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);