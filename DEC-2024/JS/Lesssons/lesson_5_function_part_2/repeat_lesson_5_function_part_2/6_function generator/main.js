

function *foo() {
    yield 100;
    yield 200;
    yield 300;
}


console.log(foo());

let fooGenerator = foo();
console.log(fooGenerator);

console.log(fooGenerator.next());
console.log(fooGenerator.next().value);

function *cardHolder() {
    const cards = [
        {value: 6, suite: 'spade'},
        {value: 7, suite: 'diamond'},
        {value: 10, suite: 'diamond'},
        {value: 9, suite: 'spade'},
    ]
    for (const card of cards) {
        yield card;
    }
}

let cardHolderGenerator = cardHolder();

console.log(cardHolderGenerator.next());
console.log(cardHolderGenerator.next().value);
console.log(cardHolderGenerator.next().value);
console.log(cardHolderGenerator.next().value.value);