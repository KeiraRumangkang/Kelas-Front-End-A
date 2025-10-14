//Exercise 01
//Buatlah program untuk menghitung BMI dengan menggunakan
//IFFE dan callback Function (with parameter and return value).
let hasilbmi = (function (bb, tb){
    let bmi = bb / (tb*tb);
    return bmi.toFixed(2);
}) (55, 163);

console.log("Hasil bmi (IFFE):", hasilbmi);

function checkbmi(callback) {
    return callback(55, 163);
}

let kategoribmi = checkbmi(function (bb, tb) {
    let bmi = bb / (tb*tb);

    if (bmi < 25) {
        return "bmi anda dibawah rata-rata";
    }  else if (bmi >= 25 && bmi < 29){
        return "bmi anda normal";
    }  else if (bmi >= 29 && bmi <35) {
        return "bmi anda lebih dari rata-rata";
    }  else {
        return "anda obesitas";
    }
});

console.log("Kategori BMI (Callback): ", kategoribmi);