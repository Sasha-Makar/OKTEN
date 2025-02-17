

// let user = {
//     name: 'Vasya',
//     age:31,
//     greening:function () {
//         console.log('hello, my name is ' + this.name);
//     }
// }
//
// console.log(user);
// user.greening();




let user = {
    name: 'Vasya',
    age:31,
    greening:function () {
        return 'hello, my name is ' + this.name;
    },
    vitannya:()=>{
        return 'hello, my age is ' + this.age;
    },
    vitannya1:()=>{
        return 'hello, my age is ' + user.age;
    }
}

console.log(user);
console.log(user.greening());
console.log(user.vitannya());
console.log(user.vitannya1());
