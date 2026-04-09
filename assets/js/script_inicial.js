function link_cadastro() {
  window.open("https://forms.gle/9hFYpDB5K6zTWAEe9", "_blank", "noopener,noreferrer");
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
const faqItems = document.querySelectorAll('.faq-item');
const revealItems = document.querySelectorAll('.reveal');
const backToTopButton = document.querySelector('.back-to-top');
const currentYear = document.querySelector('#currentYear');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach((faq) => faq.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14
});

revealItems.forEach((item) => revealObserver.observe(item));

const updateBackToTopVisibility = () => {
  if (!backToTopButton) return;

  if (window.scrollY > 400) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
};

window.addEventListener('scroll', updateBackToTopVisibility);
updateBackToTopVisibility();

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const menuBtn = document.getElementById("menuBtn"); // botão hamburguer
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// abrir
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

// fechar no X
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

// fechar clicando fora
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// fechar ao clicar em link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});