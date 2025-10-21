//Variabel & Operator
//1. JavaScript Variabel

// let fullName = "John Doe" //camel case
// let full_name = "John Doe" //snake case
// let FullName = "John Doe" //Pascal case

// console.log(fullName)
// const gender = "Male" //String
// let age = 30 //Number integer
// let weight = 96.6 //Number Float
// let isMarried = true // Boolean
// let grade = null
// let address //undefined

// console.log(gender, age, weight, isMarried, grade, address)

//2. JavaScript Operator
//a. Arithmetic Operator (+, -, *, /, %, **)
// let bil1 = 20
// let bil2 = 5
// console.log(bil1 + bil2) //25
// console.log(bil1 - bil2) //15
// console.log(bil1 * bil2) //100
// console.log(bil1 / bil2) //4
// console.log(bil1 % bil2) //0
// console.log(bil1 ** bil2) //3200000

//Mini exercise
//Buatlah program yg menghitung luas segitiga
//dimana alas adalah 5 dan tinggi adalah 5 
//dan hasilnya
// let alas = 5
// let tinggi = 5
// let luas = 0.5 * alas * tinggi
// console.log(luas)

//b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 5
// bilangan = bilangan + 10 // 15
// bilangan += 5 //20
// console.log(bilangan) 

//c. String Operator (+) string concatination
// let firstName = "John"
// let lastName = "Doe"

// let fullName = firstName + " " + lastName
// console.log(fullName)

//d. Relational Operator (==, ===, <=, >=, <, >, !=)
let bil1 = 10
let bil2 = "10" 
let bil3 = 5

console.log(bil1 == bil2) //true
console.log(bil1 === bil2) //false
console.log(bil1 > bil3) //true
console.log(bil1 < bil3) //false

//e. Logical operator (&&, ||, !)
console.log(true && true) //true
console.log(true && false)//false
console.log(false && true) //false
console.log(false && false) //false

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

console.log(!true) //false

//f. Ternary Operator (? :)
let age = 18
let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP"
console.log(isEligible)

//Mini Exercise
//Buat program yang menghitung BMI (Body mass index)
// Rumus BMI: berat badan (kg) / (tinggi badan (m) * tinggi badan (m)) 
// Tampilkan hasilnya jika BMI >  25 -> Kelebihan berat badan, 
// BMI < 25 tampilkan Berat badan anda Normal
let berat = 96
let tinggi = 1.7
let bmi = berat / (tinggi ** 2)
let kategori = bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal"
console.log(kategori)
