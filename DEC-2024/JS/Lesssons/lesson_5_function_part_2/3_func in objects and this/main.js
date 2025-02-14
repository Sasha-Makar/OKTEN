console.log('Функції в об`єктах та контекст this');
console.log('***********************************');
console.log('***********************************');
console.log('***********************************');



let user = {
    name: 'Vasya',
    age:31,
    greeting:function (msg) {
        console.log(`${msg} my name is ${this.name}`);
    },
    // whatAge: (msg) => console.log(`${msg} my age is ${user.age}`),
    whatAge: (msg) => console.log(`${msg} my age is ${this.age}`),
}

user.greeting('hi');
user.whatAge('hi');


