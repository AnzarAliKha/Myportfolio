// =================== BACK TO TOP ===================
const btn = document.getElementById('backToTop');
btn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

// =================== CONTACT FORM ===================
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    form.reset();
    formMsg.style.display='block';
    setTimeout(()=>formMsg.style.display='none',4000);
  });
}

// =================== THEME SWITCHING ===================
const themeLink = document.getElementById("theme-css");
const today = new Date();
const month = today.getMonth();
const date = today.getDate();

// 🎄 Christmas (Dec 25)
if (date === 25 && month === 11) {
  themeLink.setAttribute("href", "christmas.css");

  // Snowfall effect
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";

    if (Math.random() < 0.2) snowflake.classList.add("twinkle");

    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = Math.random() * 14 + 8 + "px";
    snowflake.style.opacity = Math.random();

    const drift = Math.random() < 0.5 ? "snowFallLeft" : "snowFallRight";
    const duration = Math.random() * 5 + 5;
    snowflake.style.animation = `${drift} ${duration}s linear infinite`;

    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), duration * 1000);
  }
  setInterval(createSnowflake, 200);

  // Swap header text Anzar <-> Merry Christmas
  const headerTitle = document.querySelector("header h1");
  if (headerTitle) {
    let showingChristmas = false;
    function swapHeaderName() {
      headerTitle.style.opacity = 0;
      setTimeout(() => {
        headerTitle.textContent = showingChristmas ? "Anzar Ali Khan." : "🎄 Merry Christmas 🎁";
        showingChristmas = !showingChristmas;
        headerTitle.style.opacity = 1;
      }, 600);
    }
    headerTitle.style.transition = "opacity 0.6s ease";
    setInterval(swapHeaderName, 4000);
  }
}

// ⚡ Harry Potter (July 31)
if (date === 06 && month === 8) {
  themeLink.setAttribute("href", "harrypotter.css");

  // Floating golden sparks
  function createSpark() {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.textContent = "✨";
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.fontSize = Math.random() * 12 + 10 + "px";
    spark.style.animationDuration = Math.random() * 4 + 4 + "s";
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 8000);
  }
  setInterval(createSpark, 300);

  // Wand spell easter egg (press "Lumos")
  let spellKeys = "";
  window.addEventListener("keydown", e => {
    spellKeys += e.key.toLowerCase();
    if (spellKeys.includes("lumos")) {
      document.body.style.background = "radial-gradient(circle, #fff 10%, #000 100%)";
      setTimeout(() => document.body.style.background = "radial-gradient(ellipse at top, #0a0a0f, #000 80%)", 5000);
      spellKeys = "";
    }
    if (spellKeys.includes("nox")) {
      document.body.style.background = "#000";
      setTimeout(() => document.body.style.background = "radial-gradient(ellipse at top, #0a0a0f, #000 80%)", 5000);
      spellKeys = "";
    }
    if (spellKeys.length > 10) spellKeys = spellKeys.slice(-10);
  });
}

// =================== HERO NAME ANIMATION ===================
window.addEventListener("load", () => {
  document.querySelectorAll(".hero-word").forEach(el => el.classList.add("show"));
});

// =================== TYPING EFFECT ===================
const roles = [
  { text: "Web Developer", class: "role-webdev" },
  { text: "Designer", class: "role-designer" },
  { text: "Freelancer", class: "role-freelancer" },
  { text: "Programmer", class: "role-programmer" }
];
const subtitle = document.querySelector(".sub-title");
let roleIndex = 0, charIndex = 0, typing = true;

function typeEffect() {
  const currentRole = roles[roleIndex];
  subtitle.className = `sub-title ${currentRole.class}`;
  if (typing) {
    subtitle.textContent = currentRole.text.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.text.length) {
      typing = false;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    subtitle.textContent = currentRole.text.substring(0, charIndex - 1) || " ";
    charIndex--;
    if (charIndex === 0) {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, typing ? 120 : 80);
}
window.addEventListener("load", typeEffect);

// =================== SCROLL ANIMATIONS ===================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("skills")) {
        const spans = entry.target.querySelectorAll("span");
        spans.forEach((span, i) => setTimeout(() => span.classList.add("show"), i * 150));
      } else {
        entry.target.classList.add("show");
      }
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".animate-on-scroll, .skills").forEach(el => observer.observe(el));

// =================== FUN EASTER EGGS ===================

// 1. Runaway button
document.querySelectorAll("button, .resume-btn").forEach(btn => {
  let hoverTimer;
  btn.addEventListener("mouseenter", () => {
    hoverTimer = setTimeout(() => {
      btn.style.position = "absolute";
      btn.style.transition = "all 0.3s ease";
      btn.style.left = Math.floor(Math.random() * (window.innerWidth - 150)) + "px";
      btn.style.top = Math.floor(Math.random() * (window.innerHeight - 80)) + "px";
    }, 5000);
  });
  btn.addEventListener("mouseleave", () => clearTimeout(hoverTimer));
});

// 2. Popup after 3 minutes
setTimeout(() => alert("👋 You've been here for 3 minutes. Do you like me?"), 180000);

// 3. Hero click spam
const hero = document.querySelector(".hero");
let heroClicks = 0;
if (hero) {
  hero.addEventListener("click", () => {
    heroClicks++;
    if (heroClicks === 5) {
      alert("😂 Stop what are you doing!");
      heroClicks = 0;
    }
  });
}

// 4. Konami Code
let konamiSeq = [];
const konamiPattern = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
window.addEventListener("keydown", (e) => {
  konamiSeq.push(e.key);
  if (konamiSeq.length > konamiPattern.length) konamiSeq.shift();
  if (JSON.stringify(konamiSeq) === JSON.stringify(konamiPattern)) {
    document.body.style.background = "black";
    document.body.style.color = "#0f0";
    alert("👨‍💻 Hacker mode activated!");
  }
});

// 5. Midnight spooky mode
if (today.getHours() === 0) {
  setTimeout(() => alert("🌙 Boo! Why are you browsing so late?"), 10000);
}

// 6. Inactivity detector
let inactivityTimer;
function resetInactivity() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => alert("😴 You still there?"), 60000);
}
["mousemove","keydown","scroll","click"].forEach(evt => window.addEventListener(evt, resetInactivity));
resetInactivity();

// 7. Emoji rain (press "E")
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "e") {
    for (let i = 0; i < 20; i++) {
      let emoji = document.createElement("div");
      emoji.textContent = ["💻","👾","🎉","✨","🔥"][Math.floor(Math.random()*5)];
      emoji.style.position = "fixed";
      emoji.style.left = Math.random() * window.innerWidth + "px";
      emoji.style.top = "-30px";
      emoji.style.fontSize = "24px";
      emoji.style.transition = "top 3s linear";
      document.body.appendChild(emoji);
      setTimeout(() => (emoji.style.top = window.innerHeight + "px"), 50);
      setTimeout(() => emoji.remove(), 3100);
    }
  }
});

// 8. Spin page on double click
document.body.addEventListener("dblclick", () => {
  document.body.style.transition = "transform 1s ease";
  document.body.style.transform = "rotate(360deg)";
  setTimeout(() => document.body.style.transform = "rotate(0deg)", 1000);
});

// 9. "rick" typed easter egg
let typedKeys = "";
window.addEventListener("keydown", (e) => {
  typedKeys += e.key.toLowerCase();
  if (typedKeys.includes("rick")) {
    alert("🎵 Never gonna give you up, never gonna let you down...");
    typedKeys = "";
  }
  if (typedKeys.length > 10) typedKeys = typedKeys.slice(-10);
});

// 10. Cat Mode (press "C")
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "c") {
    for (let i = 0; i < 10; i++) {
      let cat = document.createElement("div");
      cat.textContent = "🐱";
      cat.style.position = "fixed";
      cat.style.bottom = "0px";
      cat.style.left = Math.random() * window.innerWidth + "px";
      cat.style.fontSize = "28px";
      document.body.appendChild(cat);
      setTimeout(() => cat.remove(), 4000);
    }
  }
});
// 🎃 Halloween (Oct 31)
if (date === 27 && month === 7) {
  themeLink.setAttribute("href", "halloween.css");

  // Floating bats & pumpkins
  function createSpooky() {
    const spooky = document.createElement("div");
    spooky.classList.add("spooky");
    spooky.textContent = Math.random() < 0.5 ? "🦇" : "🎃";
    spooky.style.left = Math.random() * window.innerWidth + "px";
    spooky.style.fontSize = Math.random() * 20 + 20 + "px";
    spooky.style.animationDuration = Math.random() * 4 + 4 + "s";
    document.body.appendChild(spooky);
    setTimeout(() => spooky.remove(), 8000);
  }
  setInterval(createSpooky, 300);

  // Header flicker text
  const headerTitle = document.querySelector("header h1");
  if (headerTitle) {
    let showingHalloween = false;
    function swapHeaderName() {
      headerTitle.style.opacity = 0;
      setTimeout(() => {
        headerTitle.textContent = showingHalloween ? "Anzar Ali Khan." : "🎃 Happy Halloween 👻";
        showingHalloween = !showingHalloween;
        headerTitle.style.opacity = 1;
      }, 600);
    }
    headerTitle.style.transition = "opacity 0.6s ease";
    setInterval(swapHeaderName, 4000);
  }

  // Boo Easter Egg
  let spookyKeys = "";
  window.addEventListener("keydown", e => {
    spookyKeys += e.key.toLowerCase();
    if (spookyKeys.includes("boo")) {
      alert("👻 BOOO! You woke the spirits!");
      spookyKeys = "";
    }
    if (spookyKeys.length > 5) spookyKeys = spookyKeys.slice(-5);
  });
}


