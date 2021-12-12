// Exercise 1

let score;

const even = (score) => {
    /**  Parzysta */
    console.log(`Liczba ${score} jest przysta`);
};

const odd = (score) => {
    /** Nieparzysta */
    console.log(`Liczba ${score} jest nieparzysta`);
};

const add = (a = 0, b = 0) => {
    score = a + b;

    if (score % 2) {
        return odd(score);
    } else {
        return even(score);
    }
};

add(2, 2);

// Exercise 2

let celsius, temp;

const fahrenheit = (tempValue) => {
    celsius = tempValue;
    temp = celsius * 1.8 + 32;
    return console.log(`${celsius} stopni celsiusa jest to: ${temp} stopni fahrenheita`);
};

fahrenheit(20);

// Exercise 3

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
    numbers.push(i);
}

console.log(numbers);

const test = (num) => {
    if (num % 3 || num == 0) {
        return console.log(`Liczba ${num} nie jest podzielna przez 3 lub jest zerem`);
    } else {
        return console.log(`Liczba ${num} jest podzielna przez 3`);
    }
};

// test(5);

numbers.forEach(test);
