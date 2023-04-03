const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});


function destructivelyAppendCat() {
    cats.push("Ralph")
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat() {
    cats.pop()
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat() {
    cats.shift()
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats.slice(-4);
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});


function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat() {
    const newCats = cats.slice(0, -1);

    return newCats;
}

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat() {
    const newCats = cats.slice(1);

    return newCats;
}