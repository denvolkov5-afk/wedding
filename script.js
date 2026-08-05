// ======================================
// Свадебный сайт Даниил ❤️ Алина
// script.js
// ======================================

// -----------------------------
// Таймер
// -----------------------------

const weddingDate = new Date("2026-10-16T16:30:00").getTime();

function countdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

countdown();
setInterval(countdown, 1000);

// -----------------------------
// Плавое появление карточек
// -----------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {

    observer.observe(card);

});

// -----------------------------
// Летающие сердечки
// -----------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 2500);

// -----------------------------
// Конфетти при открытии
// -----------------------------

window.addEventListener("load", () => {

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const conf = document.createElement("div");

            conf.className = "confetti";

            conf.style.left = Math.random() * 100 + "vw";

            conf.style.background =
                `hsl(${Math.random() * 360},80%,80%)`;

            document.body.appendChild(conf);

            setTimeout(() => {

                conf.remove();

            }, 5000);

        }, i * 80);

    }

});

// -----------------------------
// Плавная прокрутка
// -----------------------------

const button = document.querySelector(".button");

if (button) {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector("#invite");

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}