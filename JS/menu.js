
const openBtn = document.querySelector('.open-btn');
const menu = document.querySelector('.menu');

openBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
