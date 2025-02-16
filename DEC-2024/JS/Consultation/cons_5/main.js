let arr = [1, 2, 3, 'qwe', true, 'asd', false, 8, 11];

function iterator(arr, i) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) {
        iterator(arr, i);
    }
}

iterator(arr, 0);


console.log('==========');

function factorial(n) {
    if (n === 1) {
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));
let factorial1 = factorial(4);
console.log(factorial1);

