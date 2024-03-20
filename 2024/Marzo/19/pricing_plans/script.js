const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', transateY);

function transateY() {
  container.classList.add('translate1');
  setTimeout(() => {
    container.classList.add('translate2');
  }, 1000);
}
