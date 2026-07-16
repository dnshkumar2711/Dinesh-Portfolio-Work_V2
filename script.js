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

// Slow smooth-scroll function so recruiters can view full details
function slowScrollToResume() {
    const target = document.getElementById('resume');
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 4500; // 4.5 Seconds for slow, full-page view scan
    let starttime = null;

    function animation(currentTime) {
        if (starttime === null) starttime = currentTime;
        const timeElapsed = currentTime - starttime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Smooth Easing algorithm
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Function to open Modal
function openResumeModal() {
    document.getElementById('resumeModal').classList.add('active');
}

// Function to close Modal
function closeResumeModal() {
    document.getElementById('resumeModal').classList.remove('active');
}

// Function to handle Form Submission & Trigger Download
function handleResumeDownload(event) {
    event.preventDefault(); // Prevent page refresh

    // Capture User Inputs
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const company = document.getElementById('userCompany').value || "Not Specified";

    // Console Log Details (In future, you can connect this to Formspree, Google Sheets or Email API)
    console.log("New Resume Download Request:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company}`);

    // Trigger PDF File Download
    const link = document.createElement('a');
    link.href = 'assets/Resume.pdf';
    link.download = 'Dinesh_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset Form & Close Modal
    document.getElementById('resumeForm').reset();
    closeResumeModal();
}

// Function to handle Form Submission & Send Details to Email + Download PDF
function handleResumeDownload(event) {
    event.preventDefault(); // Page refresh ஆவதைத் தடுக்கிறது

    // Capture User Inputs
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const company = document.getElementById('userCompany').value || "Not Specified";

    // Your Formspree Endpoint
    const formspreeEndpoint = "https://formspree.io/f/xbdngrey";

    // Send Data to Formspree via AJAX/Fetch
    fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            Name: name,
            Email: email,
            Company: company,
            _subject: `New Resume Downloaded by ${name} (${company})`
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Details sent successfully to your email!");
        } else {
            console.error("Formspree submission failed.");
        }
    })
    .catch(error => {
        console.error("Error sending details:", error);
    });

    // Immediately Trigger PDF File Download for User
    const link = document.createElement('a');
    link.href = 'assets/Resume.pdf';
    link.download = 'Dinesh_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset Form & Close Modal
    document.getElementById('resumeForm').reset();
    closeResumeModal();
}