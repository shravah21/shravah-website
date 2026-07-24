/*=========================================
  Shravah Speech & Hearing Clinic
  Premium Coming Soon Website
=========================================*/

// =========================================
// Launch Date
// Change this to your website launch date
// Format: Year, Month (0-11), Day
// =========================================

const launchDate = new Date(2026, 0, 1, 10, 0, 0).getTime();

// Countdown Timer
const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        document.querySelector(".counter h3").innerHTML =
            "🎉 We Are Live!";

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

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}, 1000);


// =========================================
// Scroll Animation
// =========================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});


// =========================================
// Newsletter Form
// =========================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = form.querySelector("input").value;

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    alert(
        "Thank you!\n\nWe will notify you when Shravah Speech & Hearing Clinic goes live."
    );

    form.reset();

});


// =========================================
// Smooth Floating Effect
// =========================================

window.addEventListener("mousemove", function (e) {

    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    const hearing = document.querySelector(".hearing");

    hearing.style.transform =
        `translate(${x}px, ${y}px)`;

});
/*====================================
  PREMIUM GLASSMORPHISM EFFECTS
====================================*/

.hero,
.counter,
.features,
.newsletter{
    position:relative;
    z-index:2;
}

.box,
.card,
.countdown div{

    backdrop-filter:blur(15px);
    -webkit-backdrop-filter:blur(15px);

    background:rgba(255,255,255,.75);

    border:1px solid rgba(255,255,255,.35);

}

/*====================================
  PREMIUM BUTTON
====================================*/

.newsletter button{

    background:linear-gradient(135deg,#00b4ff,#0b78d1);

    box-shadow:0 15px 30px rgba(11,120,209,.35);

}

.newsletter button:hover{

    transform:translateY(-4px);

    box-shadow:0 25px 45px rgba(11,120,209,.45);

}

/*====================================
  HERO TITLE
====================================*/

.left h1{

    background:linear-gradient(90deg,#003366,#0b78d1,#00c6ff);

    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;

}

/*====================================
  GLOWING SERVICE BOXES
====================================*/

.box:hover{

    box-shadow:
    0 15px 40px rgba(0,170,255,.30);

}

/*====================================
  FEATURE CARD EFFECT
====================================*/

.card{

    overflow:hidden;

    position:relative;

}

.card::before{

    content:"";

    position:absolute;

    width:120px;

    height:120px;

    background:rgba(0,180,255,.10);

    border-radius:50%;

    top:-40px;

    right:-40px;

}

.card:hover{

    transform:translateY(-12px) scale(1.03);

}

/*====================================
  FLOATING PARTICLES
====================================*/

body::before{

    content:"";

    position:fixed;

    left:0;
    top:0;

    width:100%;
    height:100%;

    pointer-events:none;

    background-image:

radial-gradient(circle at 20% 30%,rgba(0,180,255,.18) 2px,transparent 2px),

radial-gradient(circle at 70% 20%,rgba(0,120,255,.15) 3px,transparent 3px),

radial-gradient(circle at 80% 80%,rgba(0,180,255,.15) 2px,transparent 2px),

radial-gradient(circle at 40% 70%,rgba(0,120,255,.15) 3px,transparent 3px);

    animation:particlesMove 30s linear infinite;

}

@keyframes particlesMove{

0%{

transform:translateY(0);

}

100%{

transform:translateY(-120px);

}

}

/*====================================
  HERO IMAGE GLOW
====================================*/

.hearing{

    filter:

drop-shadow(0 35px 60px rgba(0,150,255,.30));

}

/*====================================
  PULSE RINGS
====================================*/

.sound-circle::before,
.sound-circle::after{

content:"";

position:absolute;

left:50%;
top:50%;

transform:translate(-50%,-50%);

border-radius:50%;

border:2px solid rgba(0,180,255,.30);

animation:ring 5s infinite;

}

.sound-circle::before{

width:320px;
height:320px;

}

.sound-circle::after{

width:430px;
height:430px;

animation-delay:2s;

}

@keyframes ring{

0%{

transform:translate(-50%,-50%) scale(.8);

opacity:1;

}

100%{

transform:translate(-50%,-50%) scale(1.5);

opacity:0;

}

}

/*====================================
  SCROLLBAR
====================================*/

::-webkit-scrollbar{

width:10px;

}

::-webkit-scrollbar-thumb{

background:#0b78d1;

border-radius:20px;

}

::-webkit-scrollbar-track{

background:#eef8ff;

}

/*====================================
  FOOTER
====================================*/

footer{

background:linear-gradient(135deg,#0b78d1,#004e92);

}

/*====================================
  WHATSAPP BUTTON
====================================*/

.whatsapp{

transition:.3s;

}

.whatsapp:hover{

transform:scale(1.15);

box-shadow:0 20px 45px rgba(37,211,102,.45);

}