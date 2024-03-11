const btnClose = document.querySelector(".fa-solid");
const cardChoose = document.querySelector(".card-1");
btnClose.addEventListener("click", function () {
  cardChoose.classList.add("hide");
  setTimeout(() => cardChoose.classList.remove("hide"), 2000);
});
