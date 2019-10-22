const navIcon = document.querySelector('.nav-icon'),
      navBtn = document.querySelector('.foody-navigation-button'),
      navigation = document.querySelector('.foody-navigation'),
      header = document.querySelector('.foody-header');

navBtn.addEventListener('click', function() {
  navIcon.classList.toggle('nav-icon-open');
  navigation.classList.toggle('foody-navigation-active');
  if (navigation.classList.contains('foody-navigation-active')) {
    header.classList.add('foody-header-active');
  } else {
    header.classList.remove('foody-header-active');
  }
});


let navLinks = document.querySelectorAll('.foody-navigation ul li a');

window.addEventListener('load', function() {
  for (let i = 0; i <= navLinks.length - 1; i++) {
    if (navLinks[i].href === location.href) {
      navLinks[i].setAttribute("class", "nav-current");
    }
  };
});
