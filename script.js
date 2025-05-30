
document.getElementById('yorumForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ad = document.getElementById('ad').value;
    const yorum = document.getElementById('yorum').value;
    const puan = document.getElementById('puan').value;
    const yorumListesi = document.getElementById('yorumListesi');

    const yorumHTML = `<p><strong>${ad}</strong> (${'⭐'.repeat(puan)}): ${yorum}</p>`;
    yorumListesi.innerHTML += yorumHTML;

    document.getElementById('yorumForm').reset();
});

document.getElementById('randevuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const isim = document.getElementById('isim').value;
    const telefon = document.getElementById('telefon').value;
    const tarih = document.getElementById('tarih').value;

    const mesaj = `Merhaba, ben ${isim}. ${tarih} tarihinde saç randevusu almak istiyorum. Telefon: ${telefon}`;
    const whatsappURL = `https://wa.me/905456804926?text=${encodeURIComponent(mesaj)}`;
    window.open(whatsappURL, '_blank');
});
