// =========================================
// TALAGA NILA MAJALENGKA
// Main JavaScript
// =========================================


// 1. AMBIL ELEMEN HTML

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

const backToTop = document.getElementById("backToTop");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");


// 2. TAHUN OTOMATIS DI FOOTER

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 3. MENU NAVIGASI MOBILE

function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
}

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
});


// Tutup menu setelah tautan navigasi diklik

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        closeMenu();
    });
});


// Tutup menu jika pengguna mengeklik area di luar menu

document.addEventListener("click", function (event) {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }
});


// 4. EFEK NAVBAR DAN TOMBOL KEMBALI KE ATAS

function handleScroll() {
    const scrollPosition = window.scrollY;

    navbar.classList.toggle("scrolled", scrollPosition > 20);

    backToTop.classList.toggle("show", scrollPosition > 400);
}

window.addEventListener("scroll", handleScroll, {
    passive: true
});

handleScroll();


// Klik tombol kembali ke atas

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 5. ANIMASI SAAT BAGIAN WEBSITE TERLIHAT

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    // Fallback untuk browser lama

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });

}


// 6. NAVIGASI AKTIF BERDASARKAN BAGIAN HALAMAN

const pageSections = document.querySelectorAll(
    "main section[id]"
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const sectionId = entry.target.id;

                    navLinks.forEach(function (link) {

                        const targetId = link.getAttribute("href");

                        link.classList.toggle(
                            "active",
                            targetId === "#" + sectionId
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    pageSections.forEach(function (section) {
        sectionObserver.observe(section);
    });

}


// 7. LIGHTBOX GALERI FOTO

const galleryCards = document.querySelectorAll(
    ".gallery-card"
);

function openLightbox(imagePath, title) {

    lightboxImage.src = imagePath;
    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");

    lightboxClose.focus();
}


function closeLightbox() {

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("no-scroll");

    lightboxImage.removeAttribute("src");
}


galleryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const imagePath = card.dataset.image;
        const title = card.dataset.title;

        openLightbox(imagePath, title);

    });

});


// Tutup galeri melalui tombol silang

lightboxClose.addEventListener("click", closeLightbox);


// Tutup galeri dengan mengeklik latar

lightboxBackdrop.addEventListener("click", closeLightbox);


// Tutup galeri dengan tombol Escape

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("open")
    ) {
        closeLightbox();
    }

});


// 8. TANGANI GAMBAR YANG GAGAL DIMUAT

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        image.classList.add("image-error");

        console.warn(
            "Gambar gagal dimuat. Periksa nama dan lokasi file:",
            image.getAttribute("src")
        );

    });

});


// 9. PESAN DI CONSOLE UNTUK PENGEMBANG

console.log(
    "Website Talaga Nila Majalengka berhasil dijalankan."
);

console.log(
    "Dikembangkan oleh Raihan Alfattah."
);