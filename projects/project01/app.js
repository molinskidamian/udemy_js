const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const btnArrow = document.querySelector(".arrow");
const arrowIcon = document.querySelector("i");

btnArrow.addEventListener("click", () => {
    item1.classList.toggle("hide");
    arrowIcon.classList.toggle("fa-arrow-down");
    arrowIcon.classList.toggle("fa-arrow-up");
});
