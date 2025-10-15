document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-menu');
  const wrapper = document.getElementById('wrapper_header');
  const body = document.body;

  const isMobile = window.matchMedia('(max-width: 1025px)').matches;
  const hasVisited = localStorage.getItem('hasVisited');

  const closeMenu = () => {
    wrapper.classList.remove('show');
    wrapper.classList.add('hide');
    body.classList.remove('menu-open');
    burger.classList.remove('active');

    setTimeout(() => {
      wrapper.classList.remove('hide');
    }, 400);
  };


  if (!hasVisited && isMobile) {
    wrapper.classList.add('show', 'no-animation');
    burger.classList.add('active');
    body.classList.add('menu-open');

    requestAnimationFrame(() => {
      wrapper.classList.remove('no-animation');
    });

    localStorage.setItem('hasVisited', 'true');
  }

  burger.addEventListener('click', () => {
    if (wrapper.classList.contains('show')) {
      closeMenu();
    } else {
      wrapper.classList.add('show');
      burger.classList.add('active');
      body.classList.add('menu-open');
    }
  });

  document.querySelectorAll('#wrapper_header a').forEach(link => {
    link.addEventListener('click', () => {
      if (wrapper.classList.contains('show')) {
        closeMenu();
      }
    });
  });
});
