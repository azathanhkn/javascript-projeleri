// 06 - Çarpım Tablosu
// Döngü yardımıyla çarpım tablosu listeleme

let carpan = 9;

console.log("=== " + carpan + " Sayısının Çarpım Tablosu ===");

for (let i = 1; i <= 10; i++) {
    let sonuc = carpan * i;
    console.log(carpan + " x " + (i < 10 ? " " + i : i) + " = " + sonuc);
}
