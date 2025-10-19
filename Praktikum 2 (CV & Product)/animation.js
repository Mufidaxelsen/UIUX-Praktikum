document.querySelector('.pesan')
.addEventListener('click', () => {
  alert('Terima kasih! Pesanan Anda sedang diproses.');
});

const pesanBtn = document.querySelector('.pesan');

pesanBtn.addEventListener('click', () => {
  pesanBtn.textContent = 'Sedang Diproses...';
  pesanBtn.disabled = true;

  setTimeout(() => {
    pesanBtn.textContent = 'Pesan Lagi';
    pesanBtn.disabled = false;
  }, 2000);
});

document.querySelectorAll('.ukuran-sepatu button').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.ukuran-sepatu button').forEach(b => b.classList.remove('aktif'));
    this.classList.add('aktif');
  });
});

document.querySelectorAll('.warna-sepatu button').forEach(btn => {
  btn.addEventListener('click', function() {
    // Hapus warna sebelumnya
    document.querySelectorAll('.warna-sepatu button').forEach(b => {
      b.style.backgroundColor = '';
      b.style.color = '';
    });
    
    const warna = this.getAttribute('data-color');
    this.style.backgroundColor = warna;
    this.style.color = 'yellow';
  });
});

