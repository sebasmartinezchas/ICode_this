const btnClose = document.querySelector('.fa-solid');
const container = document.querySelector('.container');

btnClose.addEventListener('click', () => {
  container.classList.add('hide');
  setTimeout(() => container.classList.remove('hide'), 3000);
});
