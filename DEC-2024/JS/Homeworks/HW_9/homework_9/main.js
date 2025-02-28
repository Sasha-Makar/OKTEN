// 1
// - створити блок,
// - додати йому класи wrap,
// collapse, alpha, beta
// - додати стилі(довільні
// значення) : колір фону,
// колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю,
// та додати клон в body.

let div = document.createElement('div');

div.classList.add('collapse', 'alpha', 'beta');
div.style.background = 'silver';
div.style.color = 'red';
div.style.fontSize = '25px';
div.style.width = '200px'
div.style.textAlign = 'center';
div.style.marginBottom = '30px';

div.innerText = 'Hello World';

document.body.appendChild(div);

// let br = document.createElement('br');
// document.body.appendChild(br);

let copyDiv = div.cloneNode(true);

document.body.appendChild(copyDiv);


console.log('============================');

// 2
// #OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати
// елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];

let ul = document.createElement('ul');

for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);


console.log('============================');


// 3
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому
// вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let forAllDivs = document.createElement('div');
document.body.appendChild(forAllDivs);
for (const elements of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = elements.title + ' - ' + elements.monthDuration + ' monthes';

    divCourse.appendChild(p);
    forAllDivs.appendChild(divCourse);
}



console.log('============================');

// 4
// #Kx1xgoKy8
// - Є масив
     coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// За допомоги скріпта для кожного елементу масиву
// зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration
// елементу.
//Завдання робити через цикли.

let coursesDiv = document.createElement('div');
document.body.appendChild(coursesDiv);

for (const elements of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = elements.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = elements.monthDuration;

    div.append(h1, p);
    coursesDiv.appendChild(div);
}



