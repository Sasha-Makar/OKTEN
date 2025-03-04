let ul = document.createElement('ul');

let visitInfo = JSON.parse(localStorage.getItem('visit'));
// console.log(visitInfo);

visitInfo.forEach(item => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerText = item;
    span.style.color = 'red';
    li.innerText = `Інформація про відвідування index.html - `;

    li.appendChild(span);
    ul.appendChild(li);
})


document.body.appendChild(ul);