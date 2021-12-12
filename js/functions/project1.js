// Użycie domyślnych parametrów:

const hello = (name = "") => {
    if (name == "") {
        console.log(`Cześć, jak się masz? `);
    } else {
        console.log(`Cześć ${name}, jak się masz? `);
    }
};

hello();

const add = (x = 1, y = 2) => x + y;

console.log(add());
console.log(add(2, 4));
