document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-menu');
  const wrapper = document.getElementById('wrapper_header');
  const body = document.body;

  const isMobile = window.matchMedia('(max-width: 1025px)').matches;
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited && isMobile) {
    wrapper.classList.add('show', 'no-animation');
    burger.classList.add('active');
    body.classList.add('menu-open');

    setTimeout(() => {
      wrapper.classList.remove('no-animation');
    }, 10);
  }

  burger.addEventListener('click', () => {
    const isOpen = wrapper.classList.contains('show');

    if (isOpen) {
      wrapper.classList.remove('show');
      wrapper.classList.add('hide');
      body.classList.remove('menu-open');
      burger.classList.remove('active');

      setTimeout(() => {
        wrapper.classList.remove('hide');
      }, 400);
    } else {
      wrapper.classList.add('show');
      burger.classList.add('active');
      body.classList.add('menu-open');
    }
  });

  document.querySelectorAll('#wrapper_header a').forEach(link => {
    link.addEventListener('click', () => {
      wrapper.classList.remove('show');
      burger.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
});
