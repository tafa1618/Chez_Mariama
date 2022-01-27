const btnScrolltoTop = document.getElementById('btnScrollToTop');
btnScrolltoTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Navigation bar
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const searchbox = document.getElementById('searchbox');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
