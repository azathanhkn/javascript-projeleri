// 12 - Alışveriş Sepeti
// Nesne dizisi ile sepet toplamı ve indirim

let sepet = [
    { urun: "27'' Oyuncu Monitörü", fiyat: 3400, adet: 1 },
    { urun: "Kablosuz Mekanik Klavye", fiyat: 750, adet: 1 },
    { urun: "RGB Gaming Mouse", fiyat: 380, adet: 2 },
    { urun: "Bluetooth Kulaklık", fiyat: 950, adet: 1 }
];

let araToplam = 0;

console.log("=== ALIŞVERİŞ SEPETİ ===");

for (let i = 0; i < sepet.length; i++) {
    let u = sepet[i];
    let tutar = u.fiyat * u.adet;
    araToplam += tutar;
    console.log((i + 1) + ". " + u.urun + " (" + u.adet + " adet x " + u.fiyat + " TL) = " + tutar + " TL");
}

console.log("------------------------");
console.log("Ara Toplam : " + araToplam + " TL");

let indirim = 0;
if (araToplam >= 3000) {
    indirim = 350;
    console.log("İndirim    : -" + indirim + " TL (3000 TL üzeri kampanya)");
}

let netTutar = araToplam - indirim;
console.log("Net Tutar  : " + netTutar + " TL");
