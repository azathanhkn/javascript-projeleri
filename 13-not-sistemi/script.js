const vizeInput = document.getElementById("vize");
const finalInput = document.getElementById("final");
const hesaplaButton = document.getElementById("hesapla");

const sonucAlani = document.getElementById("sonuc");
const ortalamaAlani = document.getElementById("ortalama");
const harfNotuAlani = document.getElementById("harfNotu");
const durumAlani = document.getElementById("durum");
const detayAlani = document.getElementById("detay");
const hataAlani = document.getElementById("hata");

function harfNotuBelirle(ort) {
    if (ort >= 90) return "AA";
    if (ort >= 80) return "BA";
    if (ort >= 70) return "BB";
    if (ort >= 60) return "CB";
    if (ort >= 50) return "CC";
    if (ort >= 45) return "DC";
    if (ort >= 40) return "DD";
    return "FF";
}

hesaplaButton.addEventListener("click", function () {
    const vizeDeger = vizeInput.value.trim();
    const finalDeger = finalInput.value.trim();

    hataAlani.textContent = "";
    sonucAlani.hidden = true;

    if (vizeDeger === "" || finalDeger === "") {
        hataAlani.textContent = "Lütfen vize ve final notlarını eksiksiz girin.";
        return;
    }

    const vize = Number(vizeDeger);
    const finalNotu = Number(finalDeger);

    if (isNaN(vize) || isNaN(finalNotu) || vize < 0 || vize > 100 || finalNotu < 0 || finalNotu > 100) {
        hataAlani.textContent = "Notlar 0 ile 100 aralığında olmalıdır.";
        return;
    }

    const ortalama = (vize * 0.40) + (finalNotu * 0.60);
    const harf = harfNotuBelirle(ortalama);

    ortalamaAlani.textContent = ortalama.toFixed(2);
    harfNotuAlani.textContent = "Harf Notu: " + harf;

    durumAlani.className = "status";

    if (ortalama >= 50 && finalNotu >= 45) {
        durumAlani.textContent = "Tebrikler, Dersi Geçtiniz! 🎉";
        durumAlani.classList.add("pass");
        detayAlani.textContent = "Dönem sonu başarı koşullarını sağladınız.";
    } else {
        durumAlani.textContent = "Maalesef Dersi Geçemediniz.";
        durumAlani.classList.add("fail");
        if (finalNotu < 45) {
            detayAlani.textContent = "Final notunuz 45 barajının altında.";
        } else {
            detayAlani.textContent = "Ağırlıklı ortalamanız 50 barajının altında kaldı.";
        }
    }

    sonucAlani.hidden = false;
});
