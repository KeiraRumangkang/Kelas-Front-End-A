//JavaScript Function

//Cara 1. Function declaration
// function greetings(){
//     console.log("Hello World")
// }
// greetings() // Call function

// //Cara 2. Function expression
// let greetings2 = function (){
//     console.log("Hello World 2")
// }
// greetings2()

//Function with return value (output) and argument (input)
// Cara 1
//                 parameter
// function greetings(fullName){
//     return "Hello " + fullName
// }
// //.        argument
// let output = greetings("John Doe")
// console.log(output)

// // cara 2
// const greetings2 = function (fullName){
//     return "Hello " + fullName
// }
// let output2 = greetings2("John Doe")
// console.log(output2)

//Global, Local, Block Scope Variable
let x = 10 //Global Variable
console.log(x) //10
function func1(){
    let y = 20 //Local Variable
    console.log(x) //10
    console.log(y) //20
    if(true){
        let z = 30 //Block Variable
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
    // console.log(z) // Error
}
// console.log(y) //Error
func1()

//Mini Exercise
// Buatlah fungsi yang menghitung BMI dimana input adalah berat & tinggi
// dan outputnya BMI

function calculateBMI(berat, tinggi){
    return berat / (tinggi * tinggi)
}

let bmi = calculateBMI(90, 1.77)
let kategori = bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal"
console.log(kategori)

//Pelajari dirumah tentang IIFE & callback function