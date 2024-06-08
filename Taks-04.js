// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
//   console.log(response.name);
// }
// getData();

const getName = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        console.log(user.name);
      });
    });
};

getName();

// 1. json : menguraikan tanggapan sebagai objek JSON.
// 2. text : mengembalikan tanggapan sebagai teks.
// 3. blob : mengembalikan tanggapan sebagai Blob (data biner dengan tipe).
// 4. formdata : mengembalikan tanggapan sebagai objek.
// 5. ArrayBuffer : mengembalikan tanggapan sebagai Artikel "Arraybuffer-binary-Arrays" tidak ditemukan (data biner tingkat rendah).
