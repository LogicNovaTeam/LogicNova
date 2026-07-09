console.log("LogicNova Loaded Successfully 🚀");
console.log("LogicNova Loaded Successfully 🚀");

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/* ===================================
   Scroll Reveal
=================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* ===================================
   Animated Counters
=================================== */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters(){

    if(countersStarted) return;

    const statsSection = document.querySelector(".stats");

    if(!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 120){

        countersStarted = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;
                        const updateCounter = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();

/* ===================================
   Contact Form (AJAX)
=================================== */

const contactForm = document.querySelector(".contact-form form");
const formMessage = document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {

                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                formMessage.style.display = "block";
                formMessage.className = "success";
                formMessage.textContent =
                    "✅ تم إرسال رسالتك بنجاح، وسيقوم فريق LogicNova بالتواصل معك قريبًا.";

                contactForm.reset();

            } else {

                formMessage.style.display = "block";
                formMessage.className = "error";
                formMessage.textContent =
                    "❌ حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.";

            }

        } catch (error) {

            formMessage.style.display = "block";
            formMessage.className = "error";
            formMessage.textContent =
                "❌ تعذر الاتصال بالخادم، تحقق من اتصال الإنترنت.";

        }

    });

}

// إغلاق القائمة عند الضغط على أي رابط
const navLinks = document.querySelectorAll(".nav-links a");
const navMenu = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-toggle");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

/* ===========================
   Mobile Menu
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

}

