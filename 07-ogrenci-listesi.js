// 07 - Öğrenci Listesi
// Dizi üzerinde döngü kurma ve eleman sayısı alma

let ogrenciler = ["Azathan", "Emre", "Batuhan", "Kaan", "Mert"];

console.log("=== Sınıf Listesi ===");
console.log("---------------------");

for (let i = 0; i < ogrenciler.length; i++) {
    console.log((i + 1) + ". " + ogrenciler[i]);
}

console.log("---------------------");
console.log("Toplam Öğrenci: " + ogrenciler.length);
