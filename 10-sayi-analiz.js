let sayilar = [18, 54, 11, 87, 33, 72, 40, 9];

let toplam = 0;
let enBuyuk = sayilar[0];
let enKucuk = sayilar[0];
let ciftSayilar = [];
let tekSayilar = [];

for (let i = 0; i < sayilar.length; i++) {
    let s = sayilar[i];
    toplam += s;

    if (s > enBuyuk) enBuyuk = s;
    if (s < enKucuk) enKucuk = s;

    if (s % 2 === 0) {
        ciftSayilar.push(s);
    } else {
        tekSayilar.push(s);
    }
}

let ortalama = toplam / sayilar.length;

console.log("=== Sayı Analizi Raporu ===");
console.log("Sayılar        : [" + sayilar.join(", ") + "]");
console.log("Eleman Sayısı  : " + sayilar.length);
console.log("Toplam         : " + toplam);
console.log("Ortalama       : " + ortalama.toFixed(2));
console.log("En Büyük       : " + enBuyuk);
console.log("En Küçük       : " + enKucuk);
console.log("Çift Sayılar   : [" + ciftSayilar.join(", ") + "]");
console.log("Tek Sayılar    : [" + tekSayilar.join(", ") + "]");
