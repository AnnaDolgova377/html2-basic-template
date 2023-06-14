let nav = document.querySelector('.navigation');
let navToogle = document.querySelector('.navigation__toggle');
let map = document.querySelector('.footer-address__wrapper-location');

nav.classList.remove('navigation--nojs');

navToogle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
});

map.classList.remove('footer-address__wrapper-location--nojs');

