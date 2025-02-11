function calc(a, b) {
    return sum = a + b;
}

let calc1 = calc(10, 20);
let calc2 = calc(20, 30);
console.log(calc1);
console.log(calc2);


console.log('#######');

// function tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     let res = sum - pdv - warTax;
//     return res;
// }
//
// let number = tax(20000);
// console.log(number);

// function percentage(cash,per) {
//     return cash/100 * per;
// }
//
//
// function tax(sum) {
//     let pdv = percentage(sum,20);
//     let warTax = percentage(sum,1.5);
//     let res = sum - pdv - warTax;
//     return res;
// }
//
// let number = tax(20000);
// console.log(number);

function percentage(cash,per) {
    return cash/100 * per;
}


function tax(sum) {
    return sum - percentage(sum, 20) - percentage(sum, 1.5);
}

let number = tax(20000);
console.log(number);


console.log('#############');


function userFilter(arr) {
    let filterArr = [];
    for (const user of arr) {
        if (user.age>30){
            filterArr.push(user);
        }
    }
    return filterArr;
}

let users = [
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
let userFilter1 = userFilter(users);
console.log(userFilter1);

