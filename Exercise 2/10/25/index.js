   import ambilDataUser  from './ambilDataUser.js';
   ambilDataUser();

//1. Mengapa kita butuh .json() setelah fetch()?
// - karena respon awal berbentuk stream dan harus diubah menjadi objeck js 
//2. Jika API gagal merespons, bagaimana cara menambahkan error handling?
// - jika API gagal merespon, kita dapat menambahkan error handling cek response.ok lalu 
//menggunakan try catch atau .catch() untuk menangkap error.