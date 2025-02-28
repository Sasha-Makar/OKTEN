// 2
// створити три блоки з різним текстовим контентом.
// зробити так, щоб всі блоки мали висоту найбільшого
// з них.

let difTxt = ['hello qwe asd', 'okten java scrum', 'js cool different school'];

let count = 0;
while (count < 3) {
    let div = document.createElement('div');
    div.innerText = difTxt[count];
    div.classList.add('foo');

    count++;

    document.body.append(div);
}

let elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName);

// let elementsArray = Array.from(elementsByTagName);
// console.log(elementsArray);

let maxHeight = 0;
for (let i = 0; i < elementsByTagName.length; i++) {
    let currentHeight = elementsByTagName[i].offsetHeight;
    if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
    }
}

for (let i = 0; i < elementsByTagName.length; i++) {
    elementsByTagName[i].style.height = `${maxHeight}px`;
}
