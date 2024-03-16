const body = document.body;
const images = document.querySelectorAll(".image");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const gallery=document.querySelector(".slider__gallery")
let activeImage = 0;

rightBtn.addEventListener("click", function () {
activeImage++;


if (activeImage > images.length - 1) {
  activeImage = 0;

}
setBgToBody();
setActiveImage();

});
leftBtn.addEventListener("click", function () {
activeImage--;

if (activeImage < 0) {
activeImage = images.length - 1;
}
setBgToBody()
setActiveImage()
});
setBgToBody();

function setBgToBody() {
body.style.backgroundImage = images[activeImage].style.backgroundImage;
}

function setActiveImage() {
images.forEach((image) => image.classList.remove("active"));

images[activeImage].classList.add("active");
}
