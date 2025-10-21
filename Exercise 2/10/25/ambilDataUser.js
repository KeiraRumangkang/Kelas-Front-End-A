// const ambilDataUser  = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users ')
//     .then(response => response.json())
//     .then(data => {
//       data.forEach(({ username, email }) => {
//         console.log(`${username} ${email}`);
//       });
//     });
// };
// export default ambilDataUser;

const ambilDataUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    data.forEach(({ name }) => {
      console.log(`Nama Lengkap : ${name}`);
    });

  } catch (error) {
    console.error("Terjadi error saat ambil data:", error.message);
  }
};

export default ambilDataUser;
