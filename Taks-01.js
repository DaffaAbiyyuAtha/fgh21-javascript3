const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a. then catch
cekHariKerja("minggu") // Memanggil variabel cekHariKerja yang berisi parameter string senin
  .then((result) => {
    // Menggunakan method lanjutan dari Promise then
    console.log(result); // Perintah menampilkan hasil dari result
  })
  .catch((err) => {
    // Menggunakan method lanjutan dari Promise catch
    console.log(err.message); // Perintah menampilkan hasil dari error
  });
// b. try catch
const cekHari = async (day) => {
  // Membuat variabel cekHari menggunakan fungsi asynchronous
  try {
    const result = await cekHariKerja(day); // Membuat variabel result yang didalamnya cek hari kerja index day serta menghentikan eksekusi fungsi asynchronous
    console.log(result); // Perintah menampilkan hasil dari result
  } catch (err) {
    // Menggunakan method lanjutan dari Promise catch
    console.log(err.message); // Perintah menampilkan hasil dari error
  }
};

cekHari("minggu");
