import helloworld from './helloworld.js';
const messages = async () => {
  const msg = await helloworld();
  console.log(msg);
};
messages();


//1. mengapa kita perlu menambahkan await di dalam messages?
// - Perlu menambahkan await agar msg menunggu hasil Promise buka Promise
//2. apa yang terjadi jika await dihapus?
// - hanya akan mendapatkan Promise {<pending>}
//3. mengapa kita perlu menggunakan export dan import di sini?
// - bisa membuat kode yang berbeda file dapat terhubung tanpa membuat kode di satu file besar