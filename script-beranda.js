// Inisialisasi AOS (Animate On Scroll)
AOS.init({ once: true, duration: 800 });

// Fungsi untuk mengubah navbar saat scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Bubble muncul saat scroll lebih dari 100px
  document.querySelectorAll(".bubble").forEach((bubble) => {
    if (window.scrollY > 100) {
      bubble.classList.add("show");
    } else {
      bubble.classList.remove("show");
    }
  });
});

// Efek hover timbul pada card dengan rotasi mengikuti posisi mouse
document.querySelectorAll('.card.hover-pop').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;  // posisi mouse relatif card (X)
    const y = e.clientY - rect.top;   // posisi mouse relatif card (Y)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX; // nilai antara -1 sampai 1
    const deltaY = (y - centerY) / centerY;

    // Rotasi kecil mengikuti mouse
    card.style.transform = `translateY(-10px) scale(1.03) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
    card.style.zIndex = '10'; // agar card tetap di atas saat hover
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.zIndex = '';
  });
});
