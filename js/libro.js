
// =====================================================
// MODAL DEL LIBRO
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const btnDescarga = document.getElementById("btnDescarga");
    const modalLibro = document.getElementById("modalLibro");
    const cerrarModalLibro = document.getElementById("cerrarModalLibro");
    const okModalLibro = document.getElementById("okModalLibro");


    // -----------------------------
    // ABRIR MODAL
    // -----------------------------

    function abrirModalLibro() {

        if (modalLibro) {
            modalLibro.classList.add("abierto");
            document.body.style.overflow = "hidden";
        }

    }


    // -----------------------------
    // CERRAR MODAL
    // -----------------------------

    function cerrarModal() {

        if (modalLibro) {
            modalLibro.classList.remove("abierto");
            document.body.style.overflow = "";
        }

    }


    // -----------------------------
    // EVENTOS DEL MODAL
    // -----------------------------

    if (btnDescarga) {
        btnDescarga.addEventListener("click", abrirModalLibro);
    }

    if (cerrarModalLibro) {
        cerrarModalLibro.addEventListener("click", cerrarModal);
    }

    if (okModalLibro) {
        okModalLibro.addEventListener("click", cerrarModal);
    }


    // Cerrar haciendo clic fuera de la caja

    if (modalLibro) {

        modalLibro.addEventListener("click", (event) => {

            if (event.target === modalLibro) {
                cerrarModal();
            }

        });

    }


    // Cerrar modal con ESC

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            cerrarModal();

        }

    });



    // =====================================================
    // CARRUSEL DE OTROS LIBROS
    // =====================================================

    const track = document.getElementById("librosTrack");
    const prev = document.getElementById("librosPrev");
    const next = document.getElementById("librosNext");
    const dots = document.getElementById("librosDots");


    // Verificar elementos

    if (!track || !prev || !next || !dots) {

        console.warn("Carrusel: faltan elementos HTML.");

        return;

    }


    // Obtener libros

    const slides = Array.from(
        track.querySelectorAll(".libro-slide")
    );


    if (slides.length === 0) {

        console.warn("Carrusel: no existen .libro-slide.");

        return;

    }


    // =====================================================
    // CONFIGURACIÓN
    // =====================================================

    let currentIndex = 0;

    const totalSlides = slides.length;


    // =====================================================
    // CONFIGURAR TRACK
    // =====================================================

    /*
        El track tendrá exactamente el ancho
        necesario para todos los libros.

        Ejemplo:

        3 libros = 300%
        4 libros = 400%
    */

    track.style.width = `${totalSlides * 100}%`;

    track.style.display = "flex";

    track.style.transition = "transform 0.5s ease";


    // Cada libro ocupa exactamente 1/n del track

    slides.forEach((slide) => {

        slide.style.flex = `0 0 ${100 / totalSlides}%`;

        slide.style.width = `${100 / totalSlides}%`;

        slide.style.boxSizing = "border-box";

    });


    // =====================================================
    // CREAR PUNTOS
    // =====================================================

    dots.innerHTML = "";


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


        /*
            IMPORTANTE:

            Como cada slide ocupa:

            100 / cantidad

            entonces para mover un libro
            usamos el índice directamente.

            Ejemplo:

            Libro 1 → 0%
            Libro 2 → -33.33%
            Libro 3 → -66.66%

            si existen 3 libros.
        */


        const desplazamiento =
            currentIndex * (100 / totalSlides);


        track.style.transform =
            `translateX(-${desplazamiento}%)`;


        // =================================================
        // ACTUALIZAR PUNTOS
        // =================================================

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

    prev.addEventListener("click", (event) => {

        event.preventDefault();

        event.stopPropagation();


        if (currentIndex === 0) {

            currentIndex = totalSlides - 1;

        } else {

            currentIndex--;

        }


        actualizarCarrusel();

    });



    // =====================================================
    // BOTÓN SIGUIENTE
    // =====================================================

    next.addEventListener("click", (event) => {

        event.preventDefault();

        event.stopPropagation();


        if (currentIndex === totalSlides - 1) {

            currentIndex = 0;

        } else {

            currentIndex++;

        }


        actualizarCarrusel();

    });



    // =====================================================
    // TECLADO
    // =====================================================

    document.addEventListener("keydown", (event) => {

        // Si el usuario está escribiendo en un input
        // no mover el carrusel.

        const elemento = document.activeElement;

        if (
            elemento &&
            (
                elemento.tagName === "INPUT" ||
                elemento.tagName === "TEXTAREA"
            )
        ) {

            return;

        }


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            prev.click();

        }


        if (event.key === "ArrowRight") {

            event.preventDefault();

            next.click();

        }

    });



    // =====================================================
    // INICIAR
    // =====================================================

    actualizarCarrusel();

});

