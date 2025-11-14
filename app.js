/* =====================================================
   SELECTORS
===================================================== */
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

/* All elements that must trigger login popup */
const loginTriggers = document.querySelectorAll(".open-login");



/* =====================================================
   1️⃣ OPEN LOGIN MODAL
===================================================== */
function openLoginModal() {
  loginModal.classList.add("show");
}

/* Add click event to ALL open-login elements */
loginTriggers.forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    openLoginModal();
  });
});



/* =====================================================
   2️⃣ CLOSE LOGIN MODAL
===================================================== */
closeLogin.addEventListener("click", () => {
  loginModal.classList.remove("show");
});



/* =====================================================
   3️⃣ CLICK ANYWHERE TO OPEN LOGIN (Only once)
===================================================== */
document.addEventListener("click", function (e) {
  const ignoreTargets = ["loginModal", "closeLogin"];

  if (!ignoreTargets.includes(e.target.id) && !loginModal.contains(e.target)) {
    openLoginModal();
  }
}, { once: true });




/* =====================================================
   4️⃣ HERO AUTO SLIDER
===================================================== */
const slider = document.querySelector(".slides");
let currentSlide = 0;

function autoSlide() {
  currentSlide++;
  if (currentSlide > 2) currentSlide = 0;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(autoSlide, 4000);




/* =====================================================
   5️⃣ MOBILE MENU TOGGLE
===================================================== */
const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links");

hamb.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});




/* =====================================================
   6️⃣ SCROLL ROW (horizontal)
===================================================== */
document.querySelectorAll(".scroll-row").forEach(row => {
  row.addEventListener("wheel", (e) => {
    e.preventDefault();
    row.scrollLeft += e.deltaY;
  });
});
