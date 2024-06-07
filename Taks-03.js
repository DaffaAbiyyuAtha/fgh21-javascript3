let harga = 500000;
const ticket = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["sabtu", "minggu"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Anda mendapatkan diskon hari kerja menjadi Rp"));
      }
    }, 3000);
  });
};

ticket("senin")
  .then((result) => {
    console.log("hari ini adalah hari", result, "maka harganya Rp." + harga);
  })
  .catch((error) => {
    console.log(error + (harga * 10) / 100);
  });
