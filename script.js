
document.getElementById('randevuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const isim = document.getElementById('isim').value;
    const telefon = document.getElementById('telefon').value;
    const hizmet = document.getElementById('hizmet').value;
    const mesaj = `Merhaba, ben ${isim}. ${hizmet} hizmeti için randevu almak istiyorum. Numaram: ${telefon}`;
    const wpLink = `https://wa.me/905456804926?text=${encodeURIComponent(mesaj)}`;
    window.open(wpLink, '_blank');
});

function yorumEkle() {
    const ad = document.getElementById('yorumAd').value;
    const yorum = document.getElementById('yorumMetin').value;
    const yildiz = document.getElementById('yorumYildiz').value;
    if (ad && yorum) {
        const yorumListesi = document.getElementById('reviewList');
        const yeniYorum = document.createElement('div');
        yeniYorum.className = 'review';
        yeniYorum.textContent = `${yildiz} ${ad}: ${yorum}`;
        yorumListesi.appendChild(yeniYorum);
        document.getElementById('yorumAd').value = '';
        document.getElementById('yorumMetin').value = '';
    }
}
