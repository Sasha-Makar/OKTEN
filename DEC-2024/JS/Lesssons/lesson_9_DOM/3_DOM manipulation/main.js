let target = document.getElementById('target');
console.log(target);

console.log('---');

console.log(target.innerText);
// target.innerText = 'okten';


target.style.color = 'red';

console.log(target.classList);
target.classList.add('foo');
target.classList.toggle('bar');
console.log(target.classList.item([0]));
console.log(target.classList.contains('asd'));

console.log('---');

console.log(target.getAttribute('id'));
// target.setAttribute('id','qwe');

console.log('------');


console.log(target.previousElementSibling);
let previous = target.previousElementSibling;
console.log(previous);

console.log(target.nextElementSibling);

console.log('======');

console.log(target.children);//html
console.log(target.childNodes);//nodes


console.log('===');

target.innerText = '<b>qweraasd<b>';
target.innerHTML = '<b>qweraasd<b>';

console.log('---');
console.log(target.outerHTML);