// 1
// #y7crMeFwHcS
// - За допомогою циклу for і document.write()
// вивести 10 блоків div c довільним текстом всередині

for (let j = 0; j < 10; j++) {
    document.write('<div>okten</div>');
}

document.write('==================');

// 2
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести
// 10 блоків div c довільним текстом і індексом всередині

for (let j = 0; j < 10; j++) {
    document.write('<div>okten - ' + j + '</div>');
}
// for (let j = 0; j < 10; j++) {
//     document.write(`<div>okten - ${j}</div>`);
// }

document.write('==================');

// 3
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20
// блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20){
    document.write(`<div><h1>Hello World</h1></div>`);
    i++;
}

document.write('==================');

// 4
// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20
// блоків h1 c довільним текстом і індексом всередині.

let index = 0;
while (index < 20){
    document.write(`<div><h1>Hello World - ${index}</h1></div>`);
    index++;
}

document.write('==================');

// 5
// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги
// document.write та циклу побудувати структуру
// по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву
// щоб получився цілий список з даними з масиву

for (let item of listOfItems) {
    document.write(`<ul>
                    <li>${item}</li>
                    </ul>`)
}


document.write('======================-------------------------------------===========================' + '<br>');
document.write('======================-------------------------------------===========================' + '<br>');
document.write('======================-------------------------------------===========================' + '<br>');



// 6
// #Hdjws7E
// Використовуючи данні з масиву, за допомоги
// document.write та циклу побудувати структуру
// по шаблону
// Великими літерами прописанні властивості
// об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


let products = [

    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg'
    },
];

for (let product of products) {
    // console.log(product);
    document.write(`<div class="product-card">
                    <h3 class="product-title">Title: <span class="title">${product.title}</span>. Price - ${product.price}</h3>
                    <img class="product-image" alt="" src="${product.image}">
                    </div>`)
}


document.write('======================-------------------------------------===========================' + '<br>');
document.write('======================-------------------------------------===========================' + '<br>');
document.write('======================-------------------------------------===========================' + '<br>');


console.log('------========START======------');
// 7
// #4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users);
console.log('===');
// за допомоги циклу вивести:
//- користувачів зі статусом true

for (let user of users) {
    if (user.status) {
        console.log(user);
    }
}

console.log('=======');
// - користувачів зі статусом false

for (let user of users) {
    if (!user.status) {
        console.log(user);
    }
}

console.log('=======');
// - користувачів які старші за 30 років

for (let user of users) {
    if (user.age > 30) {
        console.log(user);
    }
}


console.log('========----END---------========');
