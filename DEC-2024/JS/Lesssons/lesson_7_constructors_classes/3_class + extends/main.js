

// class User {
//
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting (){
//         return `hi, my name is ${this.name}`
//     }
// }

class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // static greeting() {
    //     return `hello my name is ${this.name}`;
    // }
     greeting() {
        return `hello my name is ${this.name}`;
    }
}

let user = new User('Aleks', 43);
console.log(user);
// let s = user.greeting();
// console.log(s);
// console.log(User.greeting());//static


class Customer extends User{

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }
    foo () {
        return 'asd';

    }
}

let customer = new Customer('Sveta', 31, 1111);
console.log(customer);
console.log(customer.greeting());
console.log(customer.foo());


console.log('=====================');
console.log('=====================');
console.log('=====================');


function User2(name, age) {
    this.name=name;
    this.age =age;
}

function Customer2(name,age,password) {
    User2.apply(this,arguments);
    this.password = password;
}

let customer2 = new Customer2('dina', 33, 777);
console.log(customer2);