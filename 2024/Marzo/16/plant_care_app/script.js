//Select Elements
const hamburguerIcon = document.querySelector('.fa-bars');
const cardHeaderTitle = document.querySelector('.card__header h1');
const cardInfo = document.querySelector('.card__info');
const cardImage = document.querySelector('.card__images');
const card1 = document.querySelector('.card__1');
const card2 = document.querySelector('.card__2');
const goTologinOne = document.querySelector('.login__screen-paragraph');
const goTologinTwo = document.querySelector('.fa-arrow-right');
const goToHome = document.querySelector('.fa-right-from-bracket');

// Call events
hamburguerIcon.addEventListener('click', hideElements);
goTologinOne.addEventListener('click', changeScreen);
goTologinTwo.addEventListener('click', changeScreen);
goToHome.addEventListener('click', goToHomeScreen);

//Functions
function hideElements() {
  cardHeaderTitle.classList.toggle('hide');
  cardInfo.classList.toggle('hide');
  cardImage.classList.toggle('hide');
}
function changeScreen() {
  card1.style.display = 'none';
  card2.style.display = 'block';
}
function goToHomeScreen() {
  card2.style.display = 'none';
  card1.style.display = 'block';
}
