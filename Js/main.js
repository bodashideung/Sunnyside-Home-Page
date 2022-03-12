const menu = document.querySelector('.btn-menu');
const close = document.querySelector('main');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
  // console.log('ok')
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});