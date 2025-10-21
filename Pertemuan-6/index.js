//Array & Object in JavaScript

//Tanpa array
// let student1 = "John";
// let student2 = "Bob";
// let student3 = "Jane";
// let student4 = "Jack";

//Cara deklarasi Array
//Cara 1. Array Literal
let students = ["John", "Bob", "Jane", "Jack"];
let john = ["John", 30, true, [30, 40]]; //Bisa beda tipe data
//Cara 2. Kata kunci "new"
let employees = new Array("John", "Bob", "Jane", "Jack");

console.log(students); //Menampilkan semua array sekaligus
students[1] = "Edgar";
console.log(students[1]); //Akses element dlm array melalui index
console.log(students.length); //menampilkan panjang array
//Akses element terakhir dalam array
console.log(students[students.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
//1. toString()
console.log(array.toString());
//2. join()
console.log(array.join("-"));
console.log(array.join(" "));
console.log(array.join("#"));
//3. pop() - hapus element terakhir
array.pop();
console.log(array);
//4. push() - tambah element terakhir
array.push("Selamat pagi");
console.log(array);
//5. shift() - hapus element pertama
array.shift();
console.log(array);
//6. unshift() - tambah element pertama
array.unshift("Selamat Pagi");
console.log(array);
//7. splice()
array.splice(3, 0, 4, 5);
console.log(array);
//8. slice()
let numbers = array.slice(1, 5);
console.log(numbers);
//9. concat() - concatination/menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNum = num1.concat(num2, num3);
console.log(combineNum);

//Object
//Cara deklarasi object
let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [90, 80, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },
  sayHello: function () {
    console.log("Hello World");
  },
};
console.log(johnObj);
//Cara akses element dlm object
//Cara 1. Dot notation
console.log(johnObj.fullName);
johnObj.sayHello();
console.log(johnObj.address.street);
console.log(johnObj.grade[1]);
//Cara 2. Bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"][1]); //array index
console.log(johnObj["address"]["street"]); //nested object
johnObj["sayHello"](); //function

johnObj.job = "Programmer"; //jika tidak ada maka tambah property baru
console.log(johnObj);

delete johnObj.isActive; //menghapus property dlm object
console.log(johnObj);