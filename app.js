// app.js - renders rows from data.js, modal, banner slider

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('yr')?.appendChild(document.createTextNode(new Date().getFullYear()));

  // render cards
  function createCard(item){
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="thumb"><img src="${item.file}" alt="${item.title}"></div>
      <h3>${item.title}</h3>
      <div class="meta">
        <span class="badge">${item.tag || ''}</span>
        <div>
          <strong>${item.price || ''}</strong>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn btn-primary buyBtn" data-id="${item.id}">Buy Now</button>
        <button class="btn btn-outline detailsBtn" data-id="${item.id}"><i class="ri-information-line"></i></button>
      </div>
    `;
    return div;
  }

  function populateRow(targetId, list){
    const container = document.getElementById(targetId);
    if(!container) return;
    container.innerHTML = '';
    list.forEach(it => container.appendChild(createCard(it)));
  }

  // from data.js
  populateRow('row-apps', PRODUCTS.apps);
  populateRow('row-courses', PRODUCTS.courses);
  populateRow('row-tools', PRODUCTS.tools);

  // row scroll controls
  document.querySelectorAll('.row-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const target = btn.dataset.target;
      const row = document.getElementById(target);
      if(!row) return;
      const dir = btn.classList.contains('next') ? 1 : -1;
      row.scrollBy({left: dir * 300, behavior:'smooth'});
    });
  });

  // modal open/close
  const loginModal = document.getElementById('loginModal');
  document.getElementById('openLogin')?.addEventListener('click', ()=> loginModal.classList.add('show'));
  document.getElementById('loginBtn')?.addEventListener('click', ()=> loginModal.classList.add('show'));
  document.getElementById('closeLogin')?.addEventListener('click', ()=> loginModal.classList.remove('show'));
  window.addEventListener('click', (e)=> { if(e.target === loginModal) loginModal.classList.remove('show') });

  // buy click
  document.body.addEventListener('click', e=>{
    if(e.target.closest('.buyBtn')){
      const id = e.target.closest('.buyBtn').dataset.id;
      alert('Buy clicked for ' + id + '. You will add payment flow here.');
    }
  });

  // banner slider (simple)
  const banners = Array.from(document.querySelectorAll('.hero .banner'));
  let bi = 0;
  setInterval(()=> {
    if(banners.length<=1) return;
    banners[bi].classList.remove('show');
    bi = (bi+1) % banners.length;
    banners[bi].classList.add('show');
  }, 3500);

  // hamburger toggle
  const hamb = document.getElementById('hamb');
  const navLinks = document.getElementById('navLinks');
  hamb?.addEventListener('click', ()=> {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

});
