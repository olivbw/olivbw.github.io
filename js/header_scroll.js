let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const wrapper = document.getElementById('header-wrapper');
  const currentScrollY = window.scrollY;

  if (currentScrollY < 100) {
    wrapper.classList.remove('hide');
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY > lastScrollY) {
    wrapper.classList.add('hide');
  } else {
    wrapper.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});
