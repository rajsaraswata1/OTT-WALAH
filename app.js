// ===== Data (yahan apne real products add kar sakte ho) =====
const data = {
  apps: [
    { title: "Netflix Premium", price: "₹249", tag: "Hot",
      img: "https://picsum.photos/seed/netflix/600/340", meta: "4 Devices • 1 Month" },
    { title: "Amazon Prime", price: "₹199", tag: "Deal",
      img: "https://picsum.photos/seed/prime/600/340", meta: "4K • 1 Month" },
    { title: "Disney+ Hotstar", price: "₹149",
      img: "https://picsum.photos/seed/hotstar/600/340", meta: "Full HD • 1 Month" }
  ],
  courses: [
    { title: "Video Editing Masterclass", price: "₹499",
      img: "https://picsum.photos/seed/edit/600/340", meta: "30+ Lessons • Files" },
    { title: "YouTube Growth Course", price: "₹399",
      img: "https://picsum.photos/seed/youtube/600/340", meta: "Fast Growth Strategy" }
  ],
  tools: [
    { title: "CapCut Pro Pack", price: "₹149",
      img: "https://picsum.photos/seed/capcut/600/340", meta: "Presets + LUTs" },
    { title: "AE Transition Pack", price: "₹299",
      img: "https://picsum.photos/seed/ae/600/340", meta: "For After Effects" }
  ]
};

// ===== Utilities =====
const q = (s, root=document) => root.querySelector(s);
const qa = (s, root=document) => [...root.querySelectorAll(s)];

function cardTemplate(item){
  return `
    <article class="card">
      ${item.tag ? `<span class="badge">${item.tag}</span>` : ""}
      <div class="card__img">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="card__body">
        <h3 class="card__title">${item.title}</h3>
        <div class="card__meta">${item.meta}</div>
        <div class="card__actions">
          <a class="btn btn-dark">₹ ${item.price}</a>
          <a class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </article>
  `;
}

function renderRow(rowId, items){
  const row = q(`#${rowId}`);
  row.innerHTML = items.map(cardTemplate).join("");
}

// ===== Init rows =====
renderRow("row-apps", data.apps);
renderRow("row-courses", data.courses);
renderRow("row-tools", data.tools);

// ===== Row controls =====
qa(".row-btn").forEach(btn=>{
  const dir = btn.classList.contains("next") ? 1 : -1;
  const targetId = btn.getAttribute("data-target");
  const el = q(`#${targetId}`);
  btn.addEventListener("click", () => el.scrollBy({left: dir * 600, behavior: "smooth"}));
});

// ===== Login Popup =====
const modal = q("#loginModal");
q("#loginBtn").onclick = q("#openLogin").onclick = () => modal.classList.add("show");
q("#closeLogin").onclick = () => modal.classList.remove("show");
modal.addEventListener("click", (e)=>{ if(e.target===modal) modal.classList.remove("show") });

// ===== Mobile nav =====
q("#hamb").onclick = ()=> q("#navLinks").classList.toggle("show");

// Year in footer
q("#yr").textContent = new Date().getFullYear();
