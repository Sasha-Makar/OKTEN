let str = 'hello oKTen';

console.log(str);

let a = '!!!';
let s = str.concat(a);
console.log(str);
console.log(s);
console.log('===');

let s1 = str.toUpperCase();
console.log(s1);
console.log('---');
console.log(str);
let s2 = str.toLowerCase();
console.log(s2);
console.log('=======');

let b = str.startsWith('hell');
console.log(b);
console.log(str.endsWith('ten'));
console.log('===');

let s3 = str.substring(0);
console.log(s3);
let s4 = str.substring(0, 7);
console.log(s4);
console.log(str);
console.log('===');

console.log(str.indexOf('0'));
console.log(str.indexOf('o'));
console.log(str.indexOf('o',5));
console.log(str.lastIndexOf('o'));
console.log('===');

console.log(str.charAt(8));
console.log('===');

let s5 = str.replace('e', '!');
console.log(s5);
console.log(str);
console.log(str.replaceAll('e', '!'));
console.log('===');
let strings = str.split(' ');
console.log(strings);