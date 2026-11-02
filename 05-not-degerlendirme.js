// 05 - Harf Notu Değerlendirmesi
// Sınav notuna göre harf notu belirleme

let puan = 88;
let harf = "";
let aciklama = "";

if (puan >= 85) {
    harf = "AA";
    aciklama = "Mükemmel Başarı";
} else if (puan >= 70) {
    harf = "BB";
    aciklama = "Başarılı";
} else if (puan >= 60) {
    harf = "CC";
    aciklama = "Orta Düzey";
} else if (puan >= 50) {
    harf = "DD";
    aciklama = "Geçer";
} else {
    harf = "FF";
    aciklama = "Başarısız";
}

console.log("Sınav Puanı : " + puan);
console.log("Harf Notu   : " + harf);
console.log("Değerlendirme: " + aciklama);
