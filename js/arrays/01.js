function btnMsg(e) {
    console.log(`kliknięto: ${e.target.textContent}!`);
}

const buttons = document.querySelectorAll("button");

// console.log(buttons);

buttons.forEach((el) => {
    return el.addEventListener("click", btnMsg, false);
});
