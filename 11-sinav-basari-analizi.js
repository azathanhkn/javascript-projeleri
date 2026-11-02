// 11 - Sınav Başarı Analizi
// Sınıf notları ortalaması ve başarı oranı

let notlar = [90, 85, 40, 75, 95, 60, 48, 80];

function ortalamaHesapla(liste) {
    let t = 0;
    for (let i = 0; i < liste.length; i++) {
        t += liste[i];
    }
    return t / liste.length;
}

function basariliOgrenciSayisi(liste, baraj = 50) {
    let sayac = 0;
    for (let not of liste) {
        if (not >= baraj) sayac++;
    }
    return sayac;
}

let ortalama = ortalamaHesapla(notlar);
let basarili = basariliOgrenciSayisi(notlar);
let basarisiz = notlar.length - basarili;
let basariOrani = (basarili / notlar.length) * 100;

console.log("=== Sınıf Başarı Analizi ===");
console.log("Not Listesi       : " + notlar.join(", "));
console.log("Ortalama          : " + ortalama.toFixed(2));
console.log("Geçen Öğrenci     : " + basarili);
console.log("Kalan Öğrenci     : " + basarisiz);
console.log("Başarı Yüzdesi    : %" + basariOrani.toFixed(1));
