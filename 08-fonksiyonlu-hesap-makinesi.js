function hesapMakinesi(sayi1, sayi2, islem) {
    if (islem === "+") {
        return sayi1 + sayi2;
    } else if (islem === "-") {
        return sayi1 - sayi2;
    } else if (islem === "*") {
        return sayi1 * sayi2;
    } else if (islem === "/") {
        if (sayi2 === 0) {
            return "Hata: Sayı sıfıra bölünemez!";
        }
        return sayi1 / sayi2;
    } else {
        return "Hata: Geçersiz işlem türü!";
    }
}

console.log("Toplama (40 + 8) :", hesapMakinesi(40, 8, "+"));
console.log("Çıkarma (40 - 8) :", hesapMakinesi(40, 8, "-"));
console.log("Çarpma  (40 * 8) :", hesapMakinesi(40, 8, "*"));
console.log("Bölme   (40 / 8) :", hesapMakinesi(40, 8, "/"));
console.log("Sıfıra Bölme     :", hesapMakinesi(40, 0, "/"));
