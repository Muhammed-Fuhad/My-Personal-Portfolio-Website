/*===== OPEN AND CLOSE MENU =====*/
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
  navMenu.classList.toggle('show');
}

const allNavLinks = document.querySelectorAll('.nav__link');

allNavLinks.forEach(link => link.addEventListener('click', ({ target }) => {

  /*Remove class from active link*/
  allNavLinks.forEach(link => link.classList.remove('active'));

  /*Add active class to clicked link*/
  target.classList.add('active');

  /*Close menu mobile*/
  toggleMenu();

}));
