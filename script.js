
const navToggler = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');
navToggler.addEventListener('click', () => {
  navigation.classList.toggle('nav__visible');
});