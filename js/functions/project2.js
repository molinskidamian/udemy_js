const arr = [1, 2, 3, 4];
console.log(arr);
console.log(...arr);

// Standard
const numbers = (x, y, z) => {
    console.log(x, y, z);
};
numbers(1, 2, 3);

// Rest

const numbersRest = (x, y, ...z) => {
    console.log(x, y, z);
};
numbersRest(1, 2, 3, 4, 5, 643, 345, 345, 345, 34, 53, 45, 345, 34, 534, 5);
