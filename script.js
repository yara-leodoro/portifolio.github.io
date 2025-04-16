document.addEventListener('DOMContentLoaded', () => {
  // === TROCA DE FOTO + ANIMAÇÃO ===
  let photoIndex = 0;
  const photos = ['img/profile.jpeg', 'img/iara-piscada.webp'];
  const photo = document.getElementById('profile-photo');

  // troca manual ao clicar
  window.togglePhoto = function () {
    if (!photo) return;
    photo.classList.add('change');
    setTimeout(() => {
      photoIndex = (photoIndex + 1) % photos.length;
      photo.src = photos[photoIndex];
      photo.classList.remove('change');
    }, 300);
  };

  // troca automática
  setInterval(() => {
    togglePhoto();
  }, 3000);

  // === DROPDOWN DO CV ===
  const cvBtn = document.querySelector('.cv-btn');
  const options = document.querySelector('.cv-options');

  cvBtn?.addEventListener('click', () => {
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!cvBtn.contains(e.target) && !options.contains(e.target)) {
      options.style.display = 'none';
    }
  });

  // === BOTÃO VOLTAR AO TOPO ===
  window.onscroll = () => {
    const btn = document.getElementById('topBtn');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };

  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // === ANIMAÇÃO DE DIGITAÇÃO ===
  const textElement = document.getElementById('typewriter-text');
  const words = ['Especialista em MLOps', 'Developer Back-end'];
  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    const word = words[wordIndex];

    if (typing) {
      if (charIndex <= word.length) {
        textElement.textContent = word.substring(0, charIndex++);
        setTimeout(type, 100);
      } else {
        typing = false;
        setTimeout(type, 2000);
      }
    } else {
      if (charIndex > 0) {
        textElement.textContent = word.substring(0, --charIndex);
        setTimeout(type, 50);
      } else {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 400);
      }
    }
  }

  type();

  // === SCROLL SPY PARA MENU ===
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
