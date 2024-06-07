// 1. Slice
//      Digunakan untuk memotong array baru. method ini membutuhkan
//      2 buah argumen yang berisi posisi index awal dan akhir pemotongan

// Contoh :
let data01 = ["a", "b", "c", "d", "e", "f", "g", "h"];
let dataBaru = data01.slice(1, 5);
console.log(dataBaru);

// 2. Push
//      Method push digunakan untuk menambahkan elemen array pada akhir dari array.

// Contoh :
let data02 = [1, 2, 3, 4, 5, 6, 7, 8];
data02.push(9);
console.log(data02);

// 3. Pop
//      Method pop digunakan untuk  menghapus elemen terakhir dari array.

// Contoh :
let data03 = ["a", "b", "c", "d", "e", "f", "g", "h"];
data03.pop();
console.log(data03);

// 4. Shift
//      Method shift digunakan untuk menghapus elemen paling awal array.

// Contoh :
let data04 = [1, 2, 3, 4, 5, 6, 7, 8];
data04.shift();
console.log(data04);

// 5. Unshift
//      Method unshift digunakan untuk menambahkan elemen baru diawal array.

// Contoh :
let data05 = ["a", "b", "c", "d", "e", "f", "g", "h"];
data05.unshift("z");
console.log(data05);

// 6. Join
//      Method join digunakan untuk menggabungkan elemen array menjadi sebuah string.

// Contoh :
let data06 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(data06.join("+"));

// 7. Reverse
//      Method reverse digunakan untuk membalikkan urutan dari elemen di dalam array.

// Contoh :
let data07 = ["a", "b", "c", "d", "e", "f", "g", "h"];
data07.reverse();
console.log(data07);

// 8. Filter
//      Method filter digunakan untuk melakukan filter data dengan kondisi tertentu pada
//      setiap elemen dari array yang sudah ada.

// Contoh :
let data08 = [1, 2, 3, 4, 5, 6, 7, 8];
let dataFilter = data08.filter((item) => item % 2 == 0);
console.log(dataFilter);

// 9. Includes
//      Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.

// Contoh :
const data09 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const cekData09 = data09.includes("b");
console.log(cekData09);

// 10. IndexOf
//      Method indexOf digunakan untuk mencari letak sebuah item dalam array.

// Contoh :
const data10 = [1, 2, 3, 4, 5, 6, 7, 8];
const cekData10 = data10.indexOf(5);
console.log(cekData10);
