document.addEventListener('DOMContentLoaded', translateY);
const card = document.querySelector('.cards');

function translateY() {
  card.classList.add('translateY');
  card.classList.add('transition');
  setTimeout(() => {
    card.classList.remove('translateY');
  }, 1000);
}
