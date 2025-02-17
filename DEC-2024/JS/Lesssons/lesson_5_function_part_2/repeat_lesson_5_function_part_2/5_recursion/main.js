function factorial(n) {
    if (n === 1) {
        return 1;
    } else {

        return n * factorial(n - 1);
    }
}

let factorial1 = factorial(4);
console.log(factorial1);

console.log('===========');

let arr = [1, 2, 3, 'qwe', true, 'asd', false, 8, 11];

function iterator(arr, i) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        iterator(arr, i);
    }
}

iterator(arr, 0);

console.log('===========');

let innerArr = [];
function flatter(arr) {

    for (const item of arr) {
        if (Array.isArray(item)) {
            flatter(item);
        }else {
            innerArr.push(item);
        }
    }
}
flatter([1, 2, 3, [44, 55, 66],7,[88,99,[10,11,12,[13,14,15]]],16],17);
console.log(innerArr);
