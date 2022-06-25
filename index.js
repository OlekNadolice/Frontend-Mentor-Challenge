const hamburgerMenu = document.querySelector('.header__hamburger');
const closeIcon = document.querySelector('.header__iconClose');

hamburgerMenu.addEventListener('click', () => {
  const list = document.querySelector('.header__list');
  hamburgerMenu.style.display = 'none';
  closeIcon.style.display = 'block';
  list.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  const list = document.querySelector('.header__list');
  hamburgerMenu.style.display = 'block';
  closeIcon.style.display = 'none';
  list.style.display = 'none';
});
