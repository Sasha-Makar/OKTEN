let name = 'vasya';
let age = 31;


let user = {
    name,
    age,
    foo (){
        console.log(this);
    },
    wife : {
        name: 'Anya',
        age:33
    }
}

console.log(user);
user.foo();

console.log('******');

let user2 = {
    nameX: 'Petya',
    ageX: 33,
    foo(){
        console.log('foigikiho');
    }
}
console.log(user2);
user2.foo();

let {nameX,ageX,foo} = user2;
console.log(nameX);
console.log(ageX);
foo();

console.log("*********");

function asd({name}) {
    console.log(name);
}

asd({id: 1, name: 'cococco', age: 31, status: true});

console.log('******');

let {name: userName, age: userAge,wife, wife: {name: wifeName}} = user;
console.log(userAge);
console.log(userName);
console.log(wifeName);
console.log(wife);

console.log('******');

let numbers = [1, 2, 3];
let [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

let [z, , x] = [11, 22, 33];
console.log(z, x);

console.log('-------');

// debugger;
let peoples = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'olya', age : 28, status : false},
    {name: 'max', age : 30, status : true},
    {name: 'anya', age : 31, status : false},
    {name: 'oleg', age : 28, status : false},
    {name: 'andrey', age : 29, status : true},
    {name: 'masha', age : 30, status : true},
    {name: 'olya', age : 31, status : false},
    {name: 'max', age : 31, status : true}
];

let [people1, people2,{name:pName,age:pAge,status:pStatus}]=peoples;
console.log(people1);
console.log(people2);
console.log(pName, pAge, pStatus);





