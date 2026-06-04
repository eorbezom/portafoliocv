
// ==================== CARRUSEL HERRAMIENTAS ====================
const toolsContainer = document.getElementById('tools-marquee');

if (toolsContainer) {

  const tools = `
    
    <div class="tool-card">
      <i class="fab fa-java text-orange-500"></i>
      <p>Java</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-leaf text-green-500"></i>
      <p>STS4</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-globe text-sky-400"></i>
      <p>HTML/CSS/JS</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-code-branch text-red-500"></i>
      <p>Git</p>
    </div>

    <div class="tool-card">
      <i class="fab fa-github text-white"></i>
      <p>GitHub</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-laptop-code text-cyan-400"></i>
      <p>VS Code</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-database text-emerald-500"></i>
      <p>PostgreSQL</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-database text-blue-500"></i>
      <p>MongoDB</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-server text-amber-400"></i>
      <p>Oracle</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-fire text-orange-500"></i>
      <p>Firebase</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-cloud text-purple-400"></i>
      <p>Render</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-rocket text-white"></i>
      <p>Vercel</p>
    </div>

    <div class="tool-card">
      <i class="fab fa-linux text-yellow-400"></i>
      <p>Linux</p>
    </div>

    <div class="tool-card">
      <i class="fab fa-figma text-pink-500"></i>
      <p>Figma</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-image text-indigo-400"></i>
      <p>Pixlr</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-video text-orange-400"></i>
      <p>OBS Studio</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-video text-red-500"></i>
      <p>Filmora</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-video text-purple-500"></i>
      <p>DaVinci Resolve</p>
    </div>

    <div class="tool-card">
      <i class="fas fa-file-word text-blue-500"></i>
      <p>Office 365</p>
    </div>

  `;

  toolsContainer.innerHTML = tools + tools;

  let pos = 0;
  let paused = false;
  const speed = 2.8;

  toolsContainer.addEventListener("mouseenter", () => paused = true);
  toolsContainer.addEventListener("mouseleave", () => paused = false);

  function animate() {

    if (!paused) {

      pos += speed;

      if (pos >= toolsContainer.scrollWidth / 2) {
        pos = 0;
      }

      toolsContainer.style.transform =
        `translateX(-${pos}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}
// ==================== CARRUSEL TESTIMONIOS ====================

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("testimonialTrack");
    const cards = document.querySelectorAll(".testimonial-card");

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!track || !cards.length || !prevBtn || !nextBtn) {
        console.log("Carrusel no encontrado");
        return;
    }

    let currentIndex = 0;
    const visibleCards = 3;

    function updateSlider() {

        const cardWidth = cards[0].offsetWidth + 32;

        track.style.transform =
            `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {

        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        updateSlider();
    });

    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - visibleCards;
        }

        updateSlider();
    });

    setInterval(() => {

        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        updateSlider();

    }, 5000);

    window.addEventListener("resize", updateSlider);

});

// ==================== MODAL TÉRMINOS ====================

const openTerms = document.getElementById("openTerms");
const closeTerms = document.getElementById("closeTerms");
const termsModal = document.getElementById("termsModal");

if(openTerms && closeTerms && termsModal){

    openTerms.addEventListener("click", (e) => {

        e.preventDefault();

        termsModal.classList.remove("hidden");
        termsModal.classList.add("flex");
    });

    closeTerms.addEventListener("click", () => {

        termsModal.classList.add("hidden");
        termsModal.classList.remove("flex");
    });

    termsModal.addEventListener("click", (e) => {

        if(e.target === termsModal){

            termsModal.classList.add("hidden");
            termsModal.classList.remove("flex");
        }
    });

}


// ==================== MENÚ HAMBURGUESA ====================
console.log("funcion.js cargado");

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

console.log(menuBtn);
console.log(mobileMenu);

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        console.log("CLICK");
        mobileMenu.classList.toggle("hidden");
    });
}