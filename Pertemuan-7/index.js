//JavaScript Conditional $ Loop

//1. JavaScript Conditional
//if-else
// let suhu = 35;
// if (suhu >= 38) {
//     console.log("Suhu diluar panas");
// } else {
//     console.log("suhu diluar normal");
// }
// console.log("Selesai");

//if - else if - else
//Jika uur 0 - 5 tampilkan balita
//Jika umur 6 - 11 tampilkan anak-anak
//Jika umur 12 - 17 tampilkan remaja
//Jika umur 18 - 23 tampilkan anak muda
//JIka umur 24 - 40 tampilkan dewasa
//Jika umur 41 keatas tampilkan orang tua
// let umur = 38;
// if (umur >= 0 && umur <= 5){
//     console.log("Umur termasuk kategori balita");
// } else if (umur >= 6 && umur <= 11) {
//     console.log("Umur termasuk kategori anak-anak");
// } else if (umur >= 12 && umur <= 17) {
//     console.log("Umur termasuk kategori remaja");
// } else if (umur >= 18 && umur <= 23) {
//     console.log("Umur termasuk kategori anak muda");
// } else if (umur >= 24 && umur <= 40) {
//     console.log("Umur termasuk kategori dewasa");
// } else {
//     console.log("TIdak dalam range umur");
// }


//Switch - case
let hari = 5;
switch (hari) {
    case 1: //sama saja dengan if (hari === 1)
    console.log("hari minggu");
    break;
    case 2:
    console.log("hari senin");
    break;
    case 3:
    console.log("hari selasa");
    break;
    case 4:
    console.log("hari rabu");
    break;
    case 5:
    console.log("hari kamis");
    break;
    case 6:
    console.log("hari jumat");
    break;
    case 7:
    console.log("hari sabtu");
    break;
}

//2. JavaScript Loop
//1. for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// //2. while loop
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++
// }
//3. do-while loop
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while ( i <= 10);

//Array built-in method
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers); //tampilkan sekaligus
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); //menampilkan isi array satu per satu
// }

//1. forEach()
// numbers.forEach(function (value) {
//     console.log(value);
// });

//2. map()
let output = numbers.map(function (value) {
    return value + 2;
});
console.log(output);

//3.filter()
let filter = numbers.filter (function (value) {
    return value > 2;
});
console.log(filter);

//4. find()
let find = numbers.find(function (value) {
    return value > 2;
});
console.log(find);