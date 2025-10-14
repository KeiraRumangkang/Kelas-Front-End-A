//Asynchronous JavaScript

//Synchronous -> single thread -> blocking
//Proses yang di jalankan dalam satu thread, dan tidak akan jalan jika salah satu program belum jalan
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //jika proses 3 lama, maka akan terblock
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1. parallel
// console.log("Proses 1");
// console.log("Proses 2");
// setTimeout(() => {console.log("Proses 3")}, 5000) //function untuk asynchronous jika proses 3 lambat dan agar tidak terblok
//  console.log("Proses 4");
//contoh 
//jalan bersama-sama namun selesai sesuai dengan waktu dan proses
// setTimeout(() => {console.log("Proses 1")}, 5000)
// setTimeout(() => {console.log("Proses 2")}, 4000)
// setTimeout(() => {console.log("Proses 3")}, 2000)
// setTimeout(() => {console.log("Proses 4")}, 1000)

//2. concurrent (berjalan secara berurutan namun tidak di block)
// setTimeout(() => {console.log("Proses 1") //jika proses 1 selesai baru lanjut proses 2 seterusnya sampai proses 4
//     setTimeout(() => {console.log("Proses 2")
//         setTimeout(() => {console.log("Proses 3")
//             setTimeout(() => {console.log("Proses 4")}, 5000)
//         }, 5000)
//     }, 5000)
// }, 5000)
//code diatas adalah ES5 yang dapat membuat menjadi callback hell

//promise (ES6)
let condition = true
const newPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

//Cara menggunakan promise
//1. then - catch
// newPromise
// .then((result) => `${result} !!!`) //proses 1
// .then((result2) => console.log(result2)) //proses 2
// .catch((error) => console.log(error));
// //2. async/await
// //harus buat didalam fungsi

// const getPromise = async() => {
//     const result = await newPromise; //harus menggunakan 'await' untuk menunggu jawaban dari code sebelumnya. 
//     console.log(result);
// };

// getPromise();

//Simulasi fetch data API dari JSONlaceholder
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then ((json) => console.log(json))

//Mini Exercise
//Ganti fetch then-catch menjadi async/await
const getDataJSON = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    json.forEach(({name}) => console.log(name));
}

getDataJSON();
