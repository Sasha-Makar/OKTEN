console.log('start');

try {
    console.log(a);
} catch (e) {
    // console.log(e);
    console.error(e);
} finally {
    console.log('finnaly');
}
console.log('end');

console.log('==========');


function calc(a, b) {
    if (b === 0) {
        throw new Error('b=0');
    }
    return a / b;
}

try {
    console.log(calc(10, 0));
} catch (e) {
    console.log(e);
}
console.log('---');
let calc1 = calc(10, 2);
console.log(calc1);