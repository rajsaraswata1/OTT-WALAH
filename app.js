/* =======================================
   GLOBAL VARIABLES
======================================= */
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const navLinks = document.getElementById("navLinks");
const hamb = document.getElementById("hamb");
const yearSpan = document.getElementById("yr");


/* =======================================
   1️⃣ AUTO UPDATE YEAR
======================================= */
yearSpan.textContent = new Date().getFullYear();


/* =======================================
   2️⃣ LOGIN MODAL OPEN / CLOSE
======================================= */
function openLoginModal() {
  loginModal.classList.add("show");
}

function closeLoginModal() {
  loginModal.classList.remove("show");
}

// Navbar login button
if (loginBtn) loginBtn.addEventListener("click", () => {
  openLoginModal();
});

// Hero login button
if (openLogin) openLogin.addEventListener("click", () => {
  openLoginModal();
});

// Close login modal
if (closeLogin) closeLogin.addEventListener("click", () => {
  closeLoginModal();
});


/* =======================================
   3️⃣ OPEN LOGIN WHEN USER CLICKS ANYWHERE
   (except inside modal)
======================================= */
document.addEventListener("click", function (e) {
  const isInsideModal = loginModal.contains(e.target);
  const isLoginButton = e.target.id === "loginBtn" || e.target.id === "openLogin" || e.target.id === "closeLogin";

  if (!isInsideModal && !isLoginButton) {
    openLoginModal();
  }
}, { once: true });  // Run only once (best UX)


/* =======================================
   4️⃣ MOBILE MENU TOGGLE
======================================= */
hamb.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


/* =======================================
   5️⃣ HORIZONTAL ROW SLIDERS
======================================= */
function setupRowSlider(rowId) {
  const row = document.getElementById(rowId);
  const next = document.querySelector(`.next[data-target="${rowId}"]`);
  const prev = document.querySelector(`.prev[data-target="${rowId}"]`);

  if (!row) return;

  next.addEventListener("click", () => {
    row.scrollBy({ left: 300, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    row.scrollBy({ left: -300, behavior: "smooth" });
  });
}

setupRowSlider("row-apps");
setupRowSlider("row-courses");
setupRowSlider("row-tools");


/* =======================================
   6️⃣ LOAD PRODUCTS FROM data.js
======================================= */
if (typeof productsData !== "undefined") {
  function loadRow(rowId, category) {
    const container = document.getElementById(rowId);
    const items = productsData[category];

    container.innerHTML = items.map(item => `
      <div class="card login-block">
        <img src="/uploads/${item.img}" alt="">
        <p>${item.name}</p>
      </div>
    `).join("");
  }

  loadRow("row-apps", "apps");
  loadRow("row-courses", "courses");
  loadRow("row-tools", "tools");
}


/* =======================================
   7️⃣ HERO AUTO-SLIDER
======================================= */
const slider = document.querySelector(".slides");
let currentSlide = 0;

function autoSlide() {
  currentSlide++;
  if (currentSlide > 2) currentSlide = 0;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(autoSlide, 4500);


/* =======================================
   8️⃣ LOGIN REQUIRED FOR ANY INTERACTION
======================================= */
document.querySelectorAll("a, .card, .collection-card").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openLoginModal();
  });
});

