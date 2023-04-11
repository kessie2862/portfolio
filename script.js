const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');
const overlay = document.querySelector('.overlay');

// open nav menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
  overlay.classList.remove('hidden');

  // Prevent scrolling when overlay is active
  document.body.style.overflow = 'hidden';
});


