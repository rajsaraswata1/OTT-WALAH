// app.js - order modal + API caller

function openOrderModal(product) {
  document.getElementById('orderProduct').value = product || '';
  document.getElementById('orderName').value = '';
  document.getElementById('orderMobile').value = '';
  document.getElementById('orderEmail').value = '';
  document.getElementById('orderMsg').innerText = '';
  document.getElementById('orderOverlay').style.display = 'flex';
}

function closeOrderModal() {
  document.getElementById('orderOverlay').style.display = 'none';
}

async function placeOrder() {
  const name = document.getElementById('orderName').value.trim();
  const mobile = document.getElementById('orderMobile').value.trim();
  const email = document.getElementById('orderEmail').value.trim();
  const product = document.getElementById('orderProduct').value.trim();
  const msgEl = document.getElementById('orderMsg');

  // Basic validation
  if (!name) { msgEl.innerText = 'Please enter your name'; return; }
  if (!/^\d{10}$/.test(mobile)) { msgEl.innerText = 'Enter a valid 10-digit mobile'; return; }
  if (!product) { msgEl.innerText = 'Product missing'; return; }

  msgEl.innerText = 'Placing order...';

  try {
    const res = await fetch('/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobile, email, product })
    });

    const data = await res.json();
    if (data && data.success) {
      msgEl.innerText = 'Order placed! We will contact you soon.';
      // optional: close modal after a delay
      setTimeout(() => { closeOrderModal(); }, 1500);
    } else {
      msgEl.innerText = data.message || 'Error placing order';
    }
  } catch (err) {
    console.error(err);
    msgEl.innerText = 'Network error — try again';
  }
}

// Close modal on click outside box
document.addEventListener('click', (e) => {
  const overlay = document.getElementById('orderOverlay');
  if (!overlay) return;
  if (e.target === overlay) closeOrderModal();
});
