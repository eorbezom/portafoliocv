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
// CARRUSEL INFINITO DE OTROS LIBROS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("librosTrack");
    const prev = document.getElementById("librosPrev");
    const next = document.getElementById("librosNext");
    const dots = document.getElementById("librosDots");

    // Verificar que existan los elementos
    if (!track || !prev || !next || !dots) {
        console.warn("No se encontraron los elementos del carrusel.");
        return;
    }

    // Obtener los libros
    const slides = Array.from(
        track.querySelectorAll(".libro-slide")
    );

    // Si no hay libros, detener
    if (slides.length === 0) {
        return;
    }

    // Posición actual
    let currentIndex = 0;


    // =====================================================
    // CREAR LOS PUNTOS
    // =====================================================

    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.type = "button";

        dot.setAttribute(
            "aria-label",
            `Mostrar libro ${index + 1}`
        );

        dot.className =
            "w-3 h-3 rounded-full bg-zinc-700 " +
            "hover:bg-emerald-400 " +
            "transition-all duration-300";

        // Al hacer clic en el punto
        dot.addEventListener("click", () => {

            currentIndex = index;

            actualizarCarrusel();

        });

        dots.appendChild(dot);

    });


    // =====================================================
    // ACTUALIZAR CARRUSEL
    // =====================================================

    function actualizarCarrusel() {

        // Mover el carrusel
        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;


        // Actualizar puntos
        const indicadores =
            dots.querySelectorAll("button");

        indicadores.forEach((dot, index) => {

            if (index === currentIndex) {

                dot.className =
                    "w-4 h-4 rounded-full " +
                    "bg-emerald-500 " +
                    "scale-110 " +
                    "transition-all duration-300";

            } else {

                dot.className =
                    "w-3 h-3 rounded-full " +
                    "bg-zinc-700 " +
                    "hover:bg-emerald-400 " +
                    "transition-all duration-300";

            }

        });

    }


    // =====================================================
    // BOTÓN ANTERIOR
    // =====================================================

    prev.addEventListener("click", () => {

        if (currentIndex === 0) {

            // Si estamos en el primer libro,
            // ir al último
            currentIndex = slides.length - 1;

        } else {

            currentIndex--;

        }

        actualizarCarrusel();

    });


    // =====================================================
    // BOTÓN SIGUIENTE
    // =====================================================

    next.addEventListener("click", () => {

        if (currentIndex === slides.length - 1) {

            // Si estamos en el último libro,
            // volver al primero
            currentIndex = 0;

        } else {

            currentIndex++;

        }

        actualizarCarrusel();

    });


    // =====================================================
    // SOPORTE PARA TECLADO
    // =====================================================

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowLeft") {

            prev.click();

        }

        if (event.key === "ArrowRight") {

            next.click();

        }

    });


    // =====================================================
    // INICIAR CARRUSEL
    // =====================================================

    actualizarCarrusel();

});