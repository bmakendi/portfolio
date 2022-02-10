// handling menu button on click and when using key enter
const btn = document.getElementById('menu-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});

btn.addEventListener('keyup', e => {
  if (e.key === 'Enter') btn.click();
});
