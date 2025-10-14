//Rest Parameter and Spread Operator (...)
//1. Rest Parameter
//a. Rest parameter bertipe data array
//b. Rest parameter harus ada di terakhir dalam parameter list
const funct1 = (...rest) => { //bisa juga sepert (param1, param2, param3, ...rest) namun nilai sebelum ...rest tidak terhitung
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

//Kegunaan spread Operator pada array
//1. Duplikasi array
let numbers2 = [...numbers];
numbers2.push(6); //jika menggunakan numbers.push(6) outputnya tidak akan berubah
console.log(numbers2);
//2. Menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNum1 = num1.concat(num2, num3);
let combineNum2 = [...num1, ...num2, ...num3];
console.log(combineNum1);
console.log(combineNum2);

//Kegunaan Spread Operator paad Object
//1. Duplikasi object
const student1 = {
    fullName : "John",
    status : "active",
};

const student2 = { ...student1, address: "Manado"};
console.log(student2)
//2. Menggabungkan Object
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const combineObj = { ...obj1, ...obj2};
console.log(combineObj);


