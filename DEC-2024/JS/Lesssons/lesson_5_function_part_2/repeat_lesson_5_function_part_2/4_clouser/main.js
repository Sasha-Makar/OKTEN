function foo() {
    let x = 10;

    function inner() {
        return ++x;
    }

    return inner;
}

console.log(foo());
console.log(foo()());

let asd = foo();
console.log(asd());
console.log(asd());
console.log(asd());
console.log(asd());
console.log(asd());
console.log(asd());
console.log(asd());

let user1 = {name: 'qwe', age: 152};

console.log(user1);

user1.age = -15550;
console.log(user1);

console.log('===========');

function userBuilder(name, age) {
    let user = {name, age};

    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            return user.age = age;
        }
    }
}

// console.log(user);
let user = userBuilder('vasya', 31);
console.log(user);

console.log(user.getAge());
console.log(user.getName());
console.log(user.getName());

user.setAge(15000);
console.log(user.getAge());


