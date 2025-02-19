let map = new Map();
console.log(map);

map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

console.log(map);
console.log('---');
console.log(map.get(1));


console.log('===========');

let map1 = new Map();

console.log(map1);

let likar = {id: 'likar'}
let petya = {id: 'petya'}


map1.set(likar, {name: 'petya', age: 44});
map1.set(petya, {name: 'oleg', age: 33});

console.log(map1);
console.log(map1.get(likar));