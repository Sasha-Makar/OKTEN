

function asd() {
    let x = 10;
    function inner() {
        return ++x;
    }
    return inner;
}

console.log(asd()());
let asd1 = asd();
console.log(asd1());
console.log(asd1());
console.log(asd1());
console.log(asd1());

console.log('-------');


// let user = {
//     name: 'Vasya',
//     age:31,
// }
// console.log(user.age);
// user.age = -100500;
// console.log(user.age);

function userBuilder(name,age) {
    let user = {name, age};

    return {
        getName(){
            return user.name;
        },
        getAge(){
            return user.age;
        },
        setAge(age){
            if (age > 0){
                user.age = age;
            }
        }
    }
}

let builder = userBuilder('Vasya', 31);
console.log(builder);

// console.log(user);
console.log(builder.getAge());
builder.setAge(100);
console.log(builder.getAge());
