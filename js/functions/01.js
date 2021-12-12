//  ======== deklaracja funkcji - podlega hoistingowi

// 1. Możliwe jest najpierw użycie funkcji, a dopiero później ją zadeklarować
test("Damianek");
// 2. deklaracja funkcji
function test(name) {
    console.log(`Cześć ${name}!`);
}

// ========= wyrażenie funkcyjne

const helloWorld = function () {
    console.log(`Hello World!`);
};
helloWorld();

// praca z return
function add(x, y) {
    return x + y;
    console.log(x + y); // Zwróc uwagę, że po return ta linijka się już nie wywoła
}
add(2, 2);

// ================================= Arrow function

const arrow = () => {
    return `Podstawowa deklaracja`;
};

const arrow2 = (name) => `Hello! ${name}. Arrow function with one argument.`;

const arrow3 = (firstName, lastName) => `I'm first ${firstName} ${lastName}.`;

console.log(arrow3("kevin", "Mc Alister"));
