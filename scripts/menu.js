//Handling menu interactions

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const headerBtn = document.getElementById('headerBtn');
const links = document.getElementsByClassName('link');
const header = document.querySelector('header');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) menu.ariaHidden = 'false';
  else menu.ariaHidden = 'true';
});

btn.addEventListener('keyup', e => {
  if (e.key === 'Enter') btn.click();
});

headerBtn.addEventListener('click', () => {
  btn.classList.remove('active');
  menu.classList.remove('active');
  if (menu.classList.contains('active')) menu.ariaHidden = 'false';
  else menu.ariaHidden = 'true';
});

for (link of links) {
  link.addEventListener('click', () => {
    btn.classList.remove('active');
    menu.classList.remove('active');
  });
}
