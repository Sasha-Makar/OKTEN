let a = {};
console.log(a);
console.log(a.__proto__);

let base = {
    name: 'qwe',
    age:21
}

let copy = Object.create(base);


console.log(copy);

console.log(copy.__proto__);
console.log(copy.age);


console.log(copy.hasOwnProperty('id'));

copy.id = 1;
console.log(copy);

console.log(copy.hasOwnProperty('id'));

let obj = {};
obj.__proto__ = base;
console.log(obj);
console.log(obj.__proto__);
console.log(obj.hasOwnProperty('id'));
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('age'));

console.log(base.hasOwnProperty('name'));
