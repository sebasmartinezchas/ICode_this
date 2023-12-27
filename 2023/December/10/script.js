const feedback = document.querySelectorAll(".feedback-icon-item");
const feedbackContainer = document.querySelector(".feedback-icon-container");
const sendBtnFeedback = document.querySelector("#send-feedback");


feedback.forEach((item) => {
  item.addEventListener("click", (e) => {
    removeActive()
    item.classList.add("active");
  });
});

sendBtnFeedback.addEventListener('click',(e)=>{
    feedbackContainer.innerHTML=`
    <i class="fas fa-heart""></i>
    <strong>Thank You</strong>
    `
})

function removeActive(){
    for(let i=0;i<feedback.length;i++){
        feedback[i].classList.remove('active')
    }
}