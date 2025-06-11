let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const wrapper = document.getElementById('header-wrapper');
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    wrapper.classList.add('hide');
  } else {
    wrapper.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});
