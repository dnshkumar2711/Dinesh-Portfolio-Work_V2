/* ==========================================================
   🚀 DINESH KUMAR - CLOUD INFRASTRUCTURE ENGINEER SCRIPTS
========================================================== */

console.log("🚀 Dinesh Portfolio Loaded Successfully");

// Select DOM elements once for better performance
const topButton = document.getElementById("topBtn");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

/* ==========================================================
   1. Unifed Scroll Event Listener (Handles Top Btn & Nav Links)
========================================================== */
window.addEventListener("scroll", () => {
    // A. Handle "Scroll To Top" button visibility
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

    // B. Handle Navbar Active Link Highlighting
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140; // Calibrated offset to account for navbar height
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* ==========================================================
   2. Interactive Scroll To Top Click Trigger
========================================================== */
topButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

/* ==========================================================
   3. Typed.js Cloud Animation
========================================================== */
var typed = new Typed(".typing", {
    strings: [
        "Microsoft Azure",
        "Linux Administration",
        "Kubernetes (AKS)",
        "Docker",
        "Terraform",
        "DevOps Engineer",
        "Cloud Automation",
        "Azure Migration"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

/* ==========================================================
   4. AOS (Animate On Scroll) Framework Engine
========================================================== */
AOS.init({
    duration: 1200,
    once: false
});

/* ==========================================================
   5. Clean Component Smooth Scrolling Links
========================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ==========================================================
   6. Interactive Skills Architecture Triggers
========================================================== */
function showSkill(skill) {
    alert(skill.toUpperCase() + " Infrastructure Experience Details Coming Soon!");
}

/* ================= NAVBAR DYNAMIC SCROLL CLASS ================= */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* ==========================================================
   精 High-Precision Navigation Active Link Tracker
========================================================== */
const systemSections = document.querySelectorAll("section");
const dockLinks = document.querySelectorAll(".cyber-nav-dock .nav-links a");

window.addEventListener("scroll", () => {
    let activeSectionId = "";

    systemSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Triggers the active link change when the section fills 40% of the viewport window
        if (window.pageYOffset >= (sectionTop - window.innerHeight * 0.4)) {
            activeSectionId = section.getAttribute("id");
        }
    });

    dockLinks.forEach(link => {
        link.classList.remove("active");
        
        // Maps the exact matching anchor reference to the visible viewport section
        if (link.getAttribute("href") === "#" + activeSectionId) {
            link.classList.add("active");
        }
    });
});

/* ================= UPLINK NODE ENGINE ================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Tilt the card based on mouse position
        card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.02)`;
    });
});

// Reset tilt when mouse leaves
document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
    });
});
