//Handling menu interactions

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const headerBtn = document.getElementById('headerBtn');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
});

btn.addEventListener('keyup', e => {
  if (e.key === 'Enter') btn.click();
});

headerBtn.addEventListener('click', () => {
  btn.classList.remove('active');
  menu.classList.remove('active');
});
