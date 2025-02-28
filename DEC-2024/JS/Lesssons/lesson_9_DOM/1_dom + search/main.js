// console.log(document);
// console.log(document.head);
// console.log(document.head.innerHTML);
//
// console.log(document.head.children);
//
// console.log(document.body);
// console.log(document.body.innerHTML);


// let ul1 = document.getElementById('list-1');
// console.log(ul1);
//
//
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
// console.log('---');
// for (const element of menuCollection) {
//     console.log(element);
// }

let ulList = document.getElementsByTagName('ul');
console.log(ulList);
let liList = document.getElementsByTagName('li');
console.log(liList);

console.log('========');


let ul = document.getElementById('list-1');
let li = ul.getElementsByTagName('li');
console.log(li);


console.log('==========');

let ulNodeList = document.querySelector('#list-1');
console.log(ulNodeList);
let ulListOfNOde = document.querySelector('ul');
console.log(ulListOfNOde);
console.log('---');
let nodeListOfulAll = document.querySelectorAll('ul');
console.log(nodeListOfulAll);

for (const node of nodeListOfulAll) {
    console.log(node);
    let liNode = node.querySelectorAll('li');
    for (const element of liNode) {
        console.log(element);
    }
}