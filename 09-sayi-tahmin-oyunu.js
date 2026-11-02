// 09 - Sayı Tahmin Oyunu
// Rastgele sayı ve adım adım tahmin kontrolü

let hedefSayi = Math.floor(Math.random() * 20) + 1;
let denemeler = [6, 15, 10, 18, 12];

console.log("=== Sayı Tahmin Oyunu ===");
console.log("1 ile 20 arasında bir sayı belirlendi.\n");

let bulundu = false;

for (let i = 0; i < denemeler.length; i++) {
    let tahmin = denemeler[i];
    console.log((i + 1) + ". Tahmin: " + tahmin);

    if (tahmin === hedefSayi) {
        console.log(">> Tebrikler! Doğru tahmin! 🎉");
        bulundu = true;
        break;
    } else if (tahmin < hedefSayi) {
        console.log(">> İpucu: Daha YÜKSEK bir sayı deneyin.");
    } else {
        console.log(">> İpucu: Daha DÜŞÜK bir sayı deneyin.");
    }
}

if (!bulundu) {
    console.log("\nTahmin hakları tükendi. Tutulan sayı: " + hedefSayi);
}
