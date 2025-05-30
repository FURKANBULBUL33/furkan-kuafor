
document.getElementById('randevuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const isim = document.getElementById('isim').value;
    const telefon = document.getElementById('telefon').value;
    const hizmet = document.getElementById('hizmet').value;
    const mesaj = `Merhaba, ben ${isim}. ${hizmet} hizmeti için randevu almak istiyorum. Numaram: ${telefon}`;
    const wpLink = `https://wa.me/905456804926?text=${encodeURIComponent(mesaj)}`;
    window.open(wpLink, '_blank');
});
