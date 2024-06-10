//1.

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
    }, 1000);
  });
};

ticket("sabtu")
  .then((result) => {
    console.log("hari ini adalah hari", result, "maka harganya Rp. " + harga);
  })
  .catch((error) => {
    console.log(error.message + (harga - (harga * 10) / 100));
  });

//2.
const makananSehat = ["buah", "sayur", "daging"];
const cekMakananSehat = function (makanan) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (makananSehat.includes(makanan)) {
        resolve(
          `Jenis makanan ${makanan} termasuk makanan sehat dan makan makanan sehat merupakan awal hidup sehat, silahkan lanjutkan.`
        );
      } else {
        reject(
          new Error(
            `Jenis makanan ${makanan} tidak sehat. Jangan terlalu banyak memakan jenis makanan tidak sehat, harap berhati-hati.`
          )
        );
      }
    }, 2000);
  });
};

cekMakananSehat("daging")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
