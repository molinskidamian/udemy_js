const name = "Global-Damian";

const scope1 = () => {
    let name = "scope1: Kasia";

    const scope2 = () => {
        let name = "Staszek";
        console.log(`scope2: ${name}`);
        return name;
    };

    let name = scope2();
    console.log(name);
};

console.log(name);

scope1();
