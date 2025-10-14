document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger-menu');
  const wrapper = document.getElementById('wrapper_header');

  burger.addEventListener('click', () => {
    wrapper.classList.toggle('show');
    burger.classList.toggle('active');
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll('#wrapper_header a').forEach(link => {
    link.addEventListener('click', () => {
      wrapper.classList.remove('show');
      burger.classList.remove('active');
    });
  });
});