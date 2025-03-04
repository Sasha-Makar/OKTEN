// Прокоментуйте код задачі 8-1 (2 спосіб) зроблений через рекурсію, ніяк не можу його збагнути.


// Є форма. Як з неї зробити відправку на сервер, щоб там воно у Джейсон файл записалось?


// "1. Чи можна при формуванні кількох класів до об'єкту використовувати такий
// синтаксис: object.classList.add('wrap', 'collapse', 'alpha', 'beta');
// Чи є можливість стилізувати за класом безпосередньо зі script?
//     2. Чому не додається створений елемент div декілька разів в document?"


// document.body.classList.add();


// Питання не до конкретної лекції,
// але хотів б спитати чи будемо розбирати тестування на JS,
// хотів б спробувати застосувати TDD для написання функції в ДЗ


// Поясніть, будь ласка, завдання #RbQGnH5DuC
// дивилась розв'язок, але так і не зрозуміла
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний
// вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName, objToAdd) {
//
//     let arrayFromLocalStorage = JSON.parse(localStorage.getItem(arrayName));
//
//     if (arrayFromLocalStorage) {
//         arrayFromLocalStorage.push(objToAdd);
//         localStorage.setItem(arrayName, JSON.stringify(arrayFromLocalStorage));
//
//     } else {
//         throw new Error('Invalid local storage');
//     }
//
// }


function dClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // Примітиви повертаємо без змін
    }

    if (typeof obj === "function") {
        return obj.bind(obj); // Прив’язуємо `this` до нового об'єкта
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = dClone(obj[key]); // Рекурсія для вкладених властивостей
        }
    }

    return clone;
}

console.log(dClone({name: 'kokos', foobar() {}}));
