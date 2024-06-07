const searchName = function (keyword, limit, cb) {
  // Membuat variabel bernama searchName yang berisi 3 parameter
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Penolope",
  ]; // membuat variabel name berisi array dengan isi nama
  const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // membuat variabel bernama up yang berisikan huruf alpabet besar
  const low = "abcdefghijklmnopqrstuvwxyz"; // membuat variabel bernama up yang berisikan huruf alpabet kecil
  let searchResult = []; // membuat variabel bernama searchResult membuat array kosong

  for (let i = 0; i < name.length; i++) {
    // membuat looping untuk cek variabel name
    const personName = name[i]; // membuat variabel personName berisi variabel name yang telah dilooping
    let result = ""; // membuat variabel penampung dengan nama result

    for (let i = 0; i < personName.length; i++) {
      // looping pertama untuk cek variabel personName
      let converted = false; // membuat variabel converted yang berisi bolean false untuk melakukan perbandingan
      for (let j = 0; j < up.length; j++) {
        // looping kedua untuk mengambil variabel up
        if (converted === false) {
          // membuat kondisi dimana jika variabel converted adalah false
          if (personName[i] === up[j]) {
            // jika personName index i sama dengan variabel up index j
            result += low[j]; // ganti huruf kapital berubah menjadi huruh kecil dan taruh pada penampung bernama result
            converted = true; // ganti isi converted menjadi true
          }
          if (j === 25) {
            // jika index j sama dengan 25
            if (personName[i] !== up[j]) {
              // dan jika personName index i tidak sama dengan variabel up index j
              result += personName[i]; // masukkan personName index i ke variabel result
              converted = true; // ganti ini converted menjadi true
            }
          }
        }
      }
    }

    let isfound = false; // membuat variabel bolean dengan nama isFound
    for (let i = 0; i < result.length; i++) {
      //looping pertama untuk cek variabel result
      let segment = ""; // membuat variabel string kosong
      for (let j = i; j < keyword.length + i; j++) {
        // looping kedua untuk mengambil parameter keyword
        if (result[j] !== undefined) {
          // jika result index j tidak berisi undefined
          segment += result[j]; // masukkan result index j kedalam variabel segment
        }
      }
      if (segment === keyword) {
        // jika segment sama dengan keyword
        isfound = true; // ganti variabel isFound menjadi true
      }
    }
    if (isfound === true) {
      // jika variabel isFound sama dengan true
      searchResult = [...searchResult, personName]; // masukkan variabel personName kedalam searchResult
    }
  }

  cb(searchResult, limit); // callback berisi parameter
};

function callback(arr, lim) {
  // memanggil menggunakan method callback
  let result = []; // membuat variabel array kosong
  for (let i = 0; i < lim; i++) {
    // cek data lim menggunkan looping
    if (arr[i]) {
      // jika arr index i
      result = [...result, arr[i]]; // tambahkan arr index i kedalam result
    }
  }
  console.log(result); // tampilan data result
}

searchName("ca", 2, callback); // mesasukkan parameter
