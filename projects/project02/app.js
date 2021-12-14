const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const color = document.querySelector(".color");
const text = document.querySelector(".text > p");
const body = document.body;
let fontSize = (body.style.fontSize = 16);

const smaller = () => {
    let number = fontSize;
    if (number > 8) {
        number--;
        console.log(`Rozmiar tekstu: ${number}px`);
        text.style.fontSize = `${number}px`;
        sizeDown.removeAttribute("disabled", "disabled");
        return (fontSize = number);
    } else {
        sizeDown.setAttribute("disabled", "disabled");
        console.log(`Nie można bardziej zmnienjszyć`);
    }
};

const upper = () => {
    let number = fontSize;
    if (number < 48) {
        number++;
        console.log(`Rozmiar tekstu: ${number}px`);
        text.style.fontSize = `${number}px`;
        sizeUp.removeAttribute("disabled");
        return (fontSize = number);
    } else {
        sizeUp.setAttribute("disabled", "disabled");
        console.log(`Nie można bardziej powiększyć`);
    }
};

const changeColor = () => {
    let number1 = Math.round(Math.random() * 256);
    let number2 = Math.round(Math.random() * 256);
    let number3 = Math.round(Math.random() * 256);
    let color = `rgb(${number1},${number2},${number3})`;
    text.style.color = color;
};

text.style.fontSize = `${fontSize}px`;

sizeDown.addEventListener("click", smaller);
sizeUp.addEventListener("click", upper);
color.addEventListener("click", changeColor);
