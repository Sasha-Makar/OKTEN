



function filter(arr,predicate) {
    let exitArr = [];
    if (predicate === 'хочу парні') {
        for (const item of arr) {
            if (item % 2 === 0) {
                exitArr.push(item);
            }
        }
    }
    if (predicate === 'хочу не парні') {
        for (const item of arr) {
            if (item % 2 !== 0) {
                exitArr[exitArr.length] = item;
            }
        }
    }
    return exitArr;
}

let filter1 = filter([1, 2, 3, 4, 5, 6, 7], 'хочу парні');
let filter2 = filter([1, 2, 3, 4, 5, 6, 7], 'хочу не парні');
console.log(filter1);
console.log(filter2);

console.log('================');


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


let filter3 = users.filter(value => value.status);
console.log(filter3);