const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};
const fullMonth = (error, months) => {
  // Membuat variabel fullMonth dengan berisi parameter
  if (!error) {
    // jika tidak error
    months.map((month) => console.log(month)); // Membaca keseluruhan dan mengambil months dengan isi month maka lakukanlah perintah menampilkan month
  } else {
    // Jika tidak
    console.log(error); // Tampilankan nilai dari error
  }
};

getMonth(fullMonth); // Mengambil data Mointh yang berisi fullMonth
