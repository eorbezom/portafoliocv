const toolsContainer = document.getElementById('tools-marquee');

if (toolsContainer) {

  const tools = `
    <div class="text-center min-w-[170px] px-4"><i class="fab fa-java text-5xl text-orange-500"></i><p class="mt-2">Java</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-code-branch text-5xl text-blue-500"></i><p class="mt-2">Git</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fab fa-linux text-5xl text-yellow-400"></i><p class="mt-2">Linux</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-database text-5xl text-blue-600"></i><p class="mt-2">MongoDB</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-database text-5xl text-emerald-500"></i><p class="mt-2">PostgreSQL</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-globe text-5xl text-sky-400"></i><p class="mt-2">HTML/CSS/JS</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fab fa-figma text-5xl text-pink-500"></i><p class="mt-2">Figma</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-video text-5xl text-red-500"></i><p class="mt-2">Filmora</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-video text-5xl text-purple-500"></i><p class="mt-2">DaVinci Resolve</p></div>
    <div class="text-center min-w-[170px] px-4"><i class="fas fa-laptop-code text-5xl text-cyan-400"></i><p class="mt-2">VS Code</p></div>
  `;

  // duplicamos para bucle infinito
  toolsContainer.innerHTML = tools + tools;

  let pos = 0;
  let paused = false;

  toolsContainer.addEventListener("mouseenter", () => paused = true);
  toolsContainer.addEventListener("mouseleave", () => paused = false);

  function animate() {

    if (!paused) {

      pos += 0.5;

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