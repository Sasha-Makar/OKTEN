let arr = [];
console.log(Array.isArray(arr));

arr.push('elements1');
arr.push('elements2');
arr.push('elements2');
arr.push('elements4');
arr.push('elements5');

console.log(arr);
console.log(arr.pop());
let soft = arr.pop();
console.log(soft);
console.log(arr);
console.log('=======');

arr.unshift('!!!');
console.log(arr);
console.log(arr.shift());
console.log('===========');

let num = [1, 2, 3];
let newArr = num.concat(arr);
console.log(newArr);
console.log(arr);
console.log(num);

console.log('===');

let s = arr.join('=');
console.log(s);
let s1 = arr.join(' ');
console.log(s1);
console.log('=====');
console.log(num);
console.log(num.reverse());
console.log('===');

console.log(newArr);
let numbers = newArr.slice(0, 5);
console.log(numbers);
console.log(newArr);

console.log('---');

console.log(newArr);
let numbers1 = newArr.splice(1, 3, '!!!', '@@');
console.log(numbers1);
console.log(newArr);
console.log('======');

console.log(newArr);

console.log(newArr.includes('!'));