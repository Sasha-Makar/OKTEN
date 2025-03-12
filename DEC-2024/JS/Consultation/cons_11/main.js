// Будь ласка, уточніть, що саме не слід зробити при рекурсії, щоб уникнути зависання браузера?Дякую

// function asd() {
//     asd();
// }

// Мене мучить одне ще питання по JS  КР.
// Те що ментор скачає на свій ПК мою КР і в нього буде помилка при переході по сторінкам - томущо сторінки локально вже мають іншу адресу....То це він має руцями міняти адресу локальну?
// Чи я маю якось це зроботи автоматизовано?
// Якщо я то я пробував через location добратися до УРЛ локальної сторінки і  вивезти в окему смінну І от ця змінна не переводиться на іншу сторінку- дає помилку. Виходить замкнутий круг


// "1. Поясніть, будь ласка, як зробити у button js посилання на іншу сторінку, оскільки з html знаю, що a href вставляти у button є не коректно
let a = document.createElement('a');
a.href = 'next.html'
a.innerText = 'pick me';
document.body.appendChild(a);

let btn = document.getElementById('xxx');
console.log(location.href);
btn.onclick = function () {
    // location.href = 'next.html';

    let box = document.getElementsByClassName('box')[0];
    box.classList.toggle('show');
}


// 2. Щоб натискаючи на кнопку, можна було відкрити більше інформації про даний елемент"


// "як ефективніше створити HTML?
// структуру в HTML файлі і потім її дозмінювати за допомогою JS чи створювати структуру сайту через JS?


// Якщо є інформація про всіх users, кожний user має кнопку, потрібно щоб при натисканні на кнопку отримувати інформацію саме про цей user, a не всіх users


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
        image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
    },
];

for (const product of products) {
    const btn = document.createElement('button');
    btn.innerText = product.title;
    document.body.appendChild(btn);
}