/* ==========================================
   STUDY KENDRA
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU TOGGLE
    ========================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuBtn.innerHTML = navbar.classList.contains("active")
                ? "✖"
                : "☰";
        });

        // Close menu when link clicked
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {

                navbar.classList.remove("active");
                menuBtn.innerHTML = "☰";
            });
        });
    }

    /* ==========================================
       DARK MODE TOGGLE
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");

    // Load saved preference
    const savedTheme = localStorage.getItem("studyKendraTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const darkEnabled =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "studyKendraTheme",
                darkEnabled ? "dark" : "light"
            );

            themeToggle.textContent =
                darkEnabled ? "☀️" : "🌙";
        });
    }

    /* ==========================================
       ACTIVE NAVIGATION LINK
    ========================================== */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navItems =
        document.querySelectorAll(".navbar a");

    navItems.forEach(link => {

        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
        ) {
            link.classList.add("active");
        }
    });

    /* ==========================================
       SCROLL ANIMATION
    ========================================== */

    const animatedElements =
        document.querySelectorAll(
            ".subject-card, .tool-card, .feature-card, .stat-card, .content-card"
        );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate");

                    observer.unobserve(entry.target);
                }
            });
        },

        {
            threshold: 0.1
        }
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    /* ==========================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId =
                this.getAttribute("href");

            if (targetId.length > 1) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    /* ==========================================
       CURRENT YEAR AUTO UPDATE
       Optional footer span:
       <span id="currentYear"></span>
    ========================================== */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

});

/* ==========================================
   UTILITY FUNCTIONS
========================================== */

/**
 * Show element
 */
function showElement(element) {

    if (element) {
        element.classList.remove("hidden");
    }
}

/**
 * Hide element
 */
function hideElement(element) {

    if (element) {
        element.classList.add("hidden");
    }
}

/**
 * Format number safely
 */
function formatNumber(value, decimals = 2) {

    const num = Number(value);

    if (isNaN(num)) return "0";

    return num.toFixed(decimals);
}