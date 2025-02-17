function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(10, 20, (a, b) => a + b));
console.log(calc(10, 20, (a, b) => a - b));
console.log(calc(10, 20, (a, b) => a * b));
console.log(calc(10, 20, (a, b) => a / b));