const seleksiNilai = function (nilaiAwal, nilaiAkhir, dataArray) {
  // membuat variabel seleksiNilai yang berisi fungsi yang memiliki parameter
  if (nilaiAwal > nilaiAkhir) {
    // jika nilaiAwal lebih besar dari nilaiAkhir
    console.log("Nilai harus lebih besar dari nilai nilaiAwal"); // tampilkan string tersebut
    return; // mengembalikan output
  }
  if (dataArray.length < 5) {
    //jika panjang dataArray lebih kecil dari pada 5
    console.log("jumlah angka dalam dataArrayArray harus lebih dari 5"); // tampilan string tersebut
    return; // mengembalikan output
  }

  let result = []; // membuat variabel result dengan array kosong

  for (let i = 0; i < dataArray.length; i++) {
    // membuat looping cek dataArray
    const number = dataArray[i]; // membuat variabel number berisi dataArray index i
    if (number > nilaiAwal) {
      // jika variabel number lebih besar dari variabel nilaiAwal
      if (number < nilaiAkhir) {
        // dan jika variabel number lebih kecil dari variabel nilaiAkhir
        result = [...result, number]; // memasukkan variabel number kedalam result
      }
    }
  }

  if (result.length === 0) {
    // jika panjang result sama dengan 0
    console.log("Nilai tidak ditemukan"); // menampilkan string tersebut
    return; // mengembalikan output
  } else {
    // jika kondisi diatas tidak terpenuhi
    let swap = result.length; // membuat variabel let yang berisi panjang result
    for (let i = 0; i < swap; i++) {
      // melakukan cek variabel swap
      for (let j = 0; j < swap - i - 1; j++) {
        // looping kedua untuk melakukan perurutan index
        if (result[j] > result[j + 1]) {
          // jika result index j lebih besar dari result index selanjutnya (j+1)
          let place = result[j]; // membuat variabel bernama place yang berisi index j
          result[j] = result[j + 1]; // index j berganti dengan index selanjutnya (j+1)
          result[j + 1] = place; // memasukan index selanjutnya (j+1) kedalam place
        }
      }
    }
  }
  console.log(result); // menampilkan data result
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 38, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
