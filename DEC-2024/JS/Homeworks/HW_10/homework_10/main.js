//-----------------------HOMEWORK_№10
//
// ---------------------------№1
// #sH8c4er
// - Створити довільний елемент з id = text та
// створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".

let divTxt = document.createElement('div');
divTxt.style.marginBottom = '100px';

let pElement = document.createElement('p');
pElement.id = 'text';
pElement.innerText = 'Hello World';


let btnHidden = document.createElement('button');
btnHidden.innerText = 'hide';

btnHidden.onclick = function () {
    pElement.style.display = 'none';
}

let btnShow = document.createElement('button');
btnShow.innerText = 'show';
btnShow.style.marginLeft = '20px';

btnShow.onclick = function () {
    pElement.style.display = 'block';
}

divTxt.append(pElement, btnHidden, btnShow);
document.body.appendChild(divTxt);


console.log('=====================');

// -------------------------------№2
// #j693ca8
// - створити інпут який приймає вік людини
// та кнопку яка підтверджує дію.При натисканні
// на кнопку зчитати інформацію з інпуту та
// перевірити вік чи меньше він ніж 18, та
// повідомити про це користувача

let divAge = document.createElement('div');
divAge.style.marginBottom = '100px';


let input = document.createElement('input');
input.type = 'number';
input.placeholder = 'enter your age...';

let btnAge = document.createElement('button');
btnAge.innerText = 'verify';
btnAge.style.marginLeft = '20px';

let h3 = document.createElement('h3');

btnAge.addEventListener('click', () => {
    if (input.value < 18) {
        h3.innerText = 'watch cartoons!!!';
    } else {
        h3.innerText = 'WELCOME!!!';
    }
})

divAge.append(input, btnAge, h3);
document.body.appendChild(divAge);


console.log('=====================');

// ------------------------------№3
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,
// sruname,age та кнопкою. При натисканні
// на кнопку зчитати данні з полів, та вивести
// об'єкт в документ. Іншими словами : заповниои
// форму, натиснули кнопку, під формою
// з'явився блок з вашим об'єктом

let divForms = document.createElement('div');
divForms.style.marginBottom = '100px';

let h3Form = document.createElement("h3");


let form = document.createElement('form');

let nameLabel = document.createElement('label');
nameLabel.innerText = 'Name: ';
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';
nameInput.id = 'name';


let surnameLabel = document.createElement('label');
surnameLabel.innerText = 'Surname: ';
let surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.placeholder = 'Enter your surname';
surnameInput.id = 'surname';

let ageLabel = document.createElement('label');
ageLabel.innerText = 'Age: ';
let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Enter your age';
ageInput.id = 'age';


let btnForm = document.createElement('button');
btnForm.innerText = 'DATA';
btnForm.addEventListener('click', (ev) => {
    ev.preventDefault();
    let user = {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value
    }
    // console.log(user);
    h3Form.innerText = `${user.name} ${user.surname} - вік ${user.age} років`
})


divForms.append(form, h3Form);
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '200px';
form.style.gap = '10px';
form.append(nameLabel, nameInput, surnameLabel, surnameInput, ageLabel, ageInput, btnForm);
document.body.append(divForms);


console.log('=====================');

// -------------------------------№4
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся
// цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1

let divInteger = document.createElement('div');
divInteger.style.marginBottom = '100px';


let h3Int = document.createElement('h3');
h3Int.style.fontSize = '25px';
h3Int.style.textAlign = 'center';

let currentCounter = localStorage.getItem('counter');

if (currentCounter) {
    currentCounter = +(currentCounter) + 1;
} else {
    currentCounter = 1;
}

localStorage.setItem('counter', currentCounter);

h3Int.innerText = currentCounter;
divInteger.appendChild(h3Int);


document.body.appendChild(divInteger);


console.log('=====================');


// --------------------------№5
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при
// відвідуванні якої в локальне сховще, в масив
// sessionsList зберігається інформація про дату
// та час відвідування сторінки. Є  сторінка
// sessionsListPage.html (назва довільна), при
// відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM


let divPage = document.createElement('div');
divPage.style.marginBottom = '100px';


let date = new Date().toLocaleString();
// console.log(date);

let visiting = JSON.parse(localStorage.getItem('visit')) || [];
visiting.push(date);
// console.log(visiting);

localStorage.setItem('visit', JSON.stringify(visiting));


let btnGoToPage = document.createElement('button');
btnGoToPage.style.cursor = 'pointer';
btnGoToPage.innerText = 'GO TO PAGE';

btnGoToPage.addEventListener('click', () => {
    window.open('to_the_fifth _task/sessionsListPage.html', '_blank');

})


divPage.appendChild(btnGoToPage)


document.body.appendChild(divPage);


console.log('=====================');
// document.body.innerHTML += '<hr><hr><hr><hr><hr>';
[1, 2, 3].forEach(() => {
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
});
console.log('=====================');


// ---------------------------№6
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні
// заповнюються через інпут. При введенні даних
// обрахунок стається миттєво, без натискань
// додаткових кнопок
// 50 кг в фунтах будут 50 × 2,2046 = 110,23 lbs
// 1 kg = 2.2046223302272 lb
// 1 lb = 0.45359243 kg.

// converter
let divConv = document.createElement('div');
divConv.style.marginBottom = '100px';

let h3Convert = document.createElement('h3');
h3Convert.innerText = 'Конвертер з кілограм у фунти';

let inpConv = document.createElement('input');

let pConv = document.createElement('p');
pConv.style.marginBottom = '30px';

function Converter() {
    let kg = inpConv.value;
    let ft = (Number(kg) * 2.2046).toFixed(2);

    pConv.innerText = `${kg} кілограм це ${ft} фунтів`;

}

inpConv.addEventListener('input', Converter);

divConv.append(h3Convert, inpConv, pConv);
document.body.appendChild(divConv);


console.log('=====================');
// document.body.innerHTML += '<hr><hr><hr><hr><hr>';
[1, 2, 3].forEach(() => {
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
});
console.log('=====================');


//------------------------------№ 7
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам
// потрібно зробити функцію, які дістає потрібний
// вам масив з localStorage та додає в нього
// об'єкт сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

let h2 = document.createElement('h2');
h2.style.marginBottom = '100px';
h2.style.marginTop = '100px';
h2.style.textAlign = 'center';
h2.innerText = 'homework_10_part_7 - in main.js';
document.body.appendChild(h2);


let addToLocalStorage = (arrayName, objToAdd) => {

    let isArray = JSON.parse(localStorage.getItem('arrayName')) || [];
    isArray.push(objToAdd);

    localStorage.setItem('arrayName', JSON.stringify(isArray));

}
addToLocalStorage('product', {name: 'apple', price: 55});
addToLocalStorage('TV', {name: 'Panasonic', price: 10000, id: 1});
addToLocalStorage('PC', {name: 'Lenovo', price: 40000});


console.log('=====================');
// document.body.innerHTML += '<hr><hr><hr><hr><hr>';
[1, 2, 3].forEach(() => {
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
});
console.log('=====================');


// --------------------------------№8
// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає
// кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація
// зчитується і формується табличка, з
// відповідним вмістом.


let divForm = document.createElement('div');
divForm.style.marginBottom = '100px';
divForm.style.marginTop = '50px';


let formTable = document.createElement('form');

let rowInput = document.createElement('input');
rowInput.type = 'number';
rowInput.placeholder = 'number of rows';

let colsInput = document.createElement('input');
colsInput.type = 'number';
colsInput.placeholder = 'number of cells';

let txtInput = document.createElement('input');
txtInput.type = "text";
txtInput.placeholder = "content";

let btnTable = document.createElement('button');
btnTable.innerText = "create table";

let divContainerTable = document.createElement('div');


let tableCreator = (ev)=>{
    ev.preventDefault();

    let rows = +(rowInput.value);
    let cols = +(colsInput.value);
    let txt = txtInput.value;

    divContainerTable.innerHTML = '';

    let table = document.createElement('table');
    table.style.border = '1px solid black';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.innerText = txt;
            td.style.border = '1px solid';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    divContainerTable.appendChild(table);
}

btnTable.addEventListener('click', tableCreator);

formTable.append(rowInput, colsInput, txtInput, btnTable);
divContainerTable.appendChild(formTable);
divForm.appendChild(divContainerTable);
document.body.appendChild(divForm);




console.log('=====================');
// document.body.innerHTML += '<hr><hr><hr><hr><hr>';
[1, 2, 3].forEach(() => {
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
});
console.log('=====================');

// --------------------------------№9
// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні
// в другій частині) створити сторінку з
// довільним блоком, в середині якого є
// значення "100грн"
// при перезавантаженні сторінки до значаення
// додається по 10грн, але !!!
// зміна ціни відбувається тільки на
// перезавантаження, які відбулись пізніше
// ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось
// раніше ніж минуло 10 секунд - нічого
// не відбувається


let localDiv = document.createElement('div');
localDiv.style.margin = '50px 100px';

let localH2 = document.createElement('h2');
localH2.style.textAlign = 'center';
localH2.innerText = '100 grn';

localDiv.appendChild(localH2);
document.body.appendChild(localDiv);


window.onload = ()=> {
    let currentPrice = parseInt(localH2.innerText);

    let lastTimeUpdate = localStorage.getItem('lastTimeUpdate');
    let currentTime = Date.now();

    if (!lastTimeUpdate) {
        localStorage.setItem('lastTimeUpdate', currentTime);
        return;
    }

    if (currentTime - lastTimeUpdate >= 10000) {
        currentPrice += 10;
        localStorage.setItem('lastTimeUpdate', currentTime);
    }

    localH2.innerText = `${currentPrice} grn`;
}



console.log('=====================');
// document.body.innerHTML += '<hr><hr><hr><hr><hr>';
[1, 2, 3].forEach(() => {
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
});
console.log('=====================');


// --------------------------------№10
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та
// дві кнопки prev next
// при завантажені сторінки з'являються
// перші 10 об'єктів.
// При натисканні next виводяться
// наступні 10 об'єктів
// При натисканні prev виводяться
// попередні 10 об'єктів


let objectsArray = [];
for (let i = 1; i <= 100; i++) {
    objectsArray.push({ id: i, name: `something - ${i}` });
}
// console.log(objectsArray);

let currentIndex = 0;

let displayContainer = document.createElement('div');
displayContainer.style.marginBottom = '20px';
document.body.appendChild(displayContainer);

let prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
document.body.appendChild(prevButton);

let nextButton = document.createElement('button');
nextButton.textContent = 'Next';
document.body.appendChild(nextButton);

function displayObjects() {

    displayContainer.innerHTML = '';

    let objectsToDisplay = objectsArray.filter((item, index) => index >= currentIndex && index < currentIndex + 10);
    objectsToDisplay.forEach(obj => {
        let objDiv = document.createElement('div');
        objDiv.textContent = `${obj.id}. ${obj.name}`;
        displayContainer.appendChild(objDiv);
    });
}

nextButton.addEventListener('click', () => {
    if (currentIndex + 10 < objectsArray.length) {
        currentIndex += 10;
        displayObjects();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        displayObjects();
    }
});

window.onload = function() {
    displayObjects();
};
