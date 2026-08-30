const btnDescarga = document.getElementById("btnDescarga");
const modalLibro = document.getElementById("modalLibro");
const cerrarModalLibro = document.getElementById("cerrarModalLibro");
const okModalLibro = document.getElementById("okModalLibro");

function abrirModalLibro() {
    if (modalLibro) {
        modalLibro.classList.add("abierto");
    }
}

function cerrarModal() {
    if (modalLibro) {
        modalLibro.classList.remove("abierto");
    }
}

if (btnDescarga && modalLibro) {

    btnDescarga.addEventListener("click", abrirModalLibro);

    if (cerrarModalLibro) {
        cerrarModalLibro.addEventListener("click", cerrarModal);
    }

    if (okModalLibro) {
        okModalLibro.addEventListener("click", cerrarModal);
    }

    modalLibro.addEventListener("click", (e) => {
        if (e.target === modalLibro) {
            cerrarModal();
        }
    });
}


// =====================================================
// CARRUSEL DE OTROS LIBROS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("librosTrack");
    const prev = document.getElementById("librosPrev");
    const next = document.getElementById("librosNext");
    const dots = document.getElementById("librosDots");

    if (!track || !prev || !next || !dots) {
        return;
    }

    const slides = track.querySelectorAll(".libro-slide");

    let currentIndex = 0;


    // Crear indicadores
    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.type = "button";

        dot.className =
            "w-3 h-3 rounded-full transition-all duration-300";

        dot.addEventListener("click", () => {

            currentIndex = index;

            actualizarCarrusel();

        });

        dots.appendChild(dot);

    });


    // Actualizar carrusel
    function actualizarCarrusel() {

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        // Actualizar puntos
        const indicadores =
            dots.querySelectorAll("button");

        indicadores.forEach((dot, index) => {

            if (index === currentIndex) {

                dot.className =
                    "w-3 h-3 rounded-full bg-emerald-500 scale-125 transition-all duration-300";

            } else {

                dot.className =
                    "w-3 h-3 rounded-full bg-zinc-700 hover:bg-emerald-400 transition-all duration-300";

            }

        });


        // Botón anterior
        prev.disabled =
            currentIndex === 0;

        prev.style.opacity =
            currentIndex === 0 ? "0.35" : "1";


        // Botón siguiente
        next.disabled =
            currentIndex === slides.length - 1;

        next.style.opacity =
            currentIndex === slides.length - 1
                ? "0.35"
                : "1";

    }


    // Anterior
    prev.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

            actualizarCarrusel();

        }

    });


    // Siguiente
    next.addEventListener("click", () => {

        if (currentIndex < slides.length - 1) {

            currentIndex++;

            actualizarCarrusel();

        }

    });


    // Iniciar
    actualizarCarrusel();

});

