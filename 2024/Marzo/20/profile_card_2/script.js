const ellipsisIcon=document.querySelector(".fa-ellipsis")
const cardModal=document.querySelector(".card__modal")
ellipsisIcon.addEventListener("click",showModal)

function showModal(){
  cardModal.classList.toggle("hide")
}