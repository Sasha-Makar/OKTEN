// function *foo() {
//     yield 100;
//     yield 200;
//     yield 300;
// }
//
// console.log(foo());
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());


function *cardsHolder() {
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 6, suite: 'spade'},
        {value: 9, suite: 'spade'},
        {value: 7, suite: 'diamond'},
        {value: 10, suite: 'spade'},
    ]
    for (const card of cards) {
        yield card;
    }
}
let cardsHolderGenerator = cardsHolder();
console.log(cardsHolderGenerator.next());
//......
//......
//......
let cards2 = cardsHolderGenerator.next();
console.log(cards2);
console.log(cards2.value);
//......
//......
//......

let cardData3 = cardsHolderGenerator.next().value;
console.log(cardData3);