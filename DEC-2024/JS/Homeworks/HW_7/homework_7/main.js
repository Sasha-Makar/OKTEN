// 1
// #XjJuucOMR0
// - Створити функцію конструктор для
// об'єктів User з полями id, name,
// surname , email, phone
// створити пустий масив, наповнити
// його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let user = new User(1, 'Oleg', 'Kokosov', 'qwe@gmail.com', '+380987777777');
console.log(user);

let users = [];
users.push(user);
console.log(users);

console.log('---');

users.push(new User(2, 'Ivan', 'Chmut', 'qwegmail.com', '+380987777777'))
console.log(users);

console.log('---');

//через цикл
let names = ['Olena', 'Diana', 'Max', 'Dina', 'Yulia', 'Nata', 'Aleks', 'Serg'];
let surnames = ['Abrikosova', 'Kokosova', 'Petrenko', 'Tusk', 'Tramp', 'Chernenko', 'Ahmetov', 'Kolodiy'];

for (let i = 0; i < 8; i++) {
    users.push(new User(
        i + 3,
        names[i],
        surnames[i],
        `qwe${i + 1}@gmail.com`,
        `+3809877${i + 1}7777`
    ));
}
console.log(users);

console.log('============');
console.log('============');
console.log('============');

// 2
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього
// завдання, та відфільтрувати , залишивши
// тільки об'єкти з парними id (filter)

let filterUsers = users.filter(value => value.id % 2 === 0);
console.log(users);
console.log(filterUsers);

console.log('============');
console.log('============');
console.log('============');

// 3
// #pOeHKct
// - Взяти масив з  User[] з попереднього
// завдання, та відсортувати його по id.
// по зростанню (sort)

//зробив по спаданню-10=>9=>8...
let sortUsersId = users.sort((id1, id2) => id2.id - id1.id);
console.log(sortUsersId);

console.log('============');
console.log('============');
console.log('============');

// 4
// #nkMXISv
// - створити конструктор для об'єктів Client
// з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10
// об'єктами Client


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order

}

let client = new Client(1, 'Aleks', 'Trump', 'qwe@gmail.com', '+380987777777', ['apple', 'bread', 'milk', 'wiski', 'meat']);
console.log(client);

console.log('---');

let clientList = [];
clientList.push(client);
console.log(clientList);
clientList.push(new Client(2, 'Yura', 'Chikatilo', 'asd1@gmail.com', '+380987774741', ['vodka', 'wiski', 'snack']));
console.log(clientList);

console.log('---');

//через цикл

let orderList = [
    ['meat', 'bread', 'onions'],
    ['vodka', 'tiolky', 'patifon))'],
    ['cucumbers', 'peaches', 'meat', 'bread', 'phone'],
    ['laptop', 'disk', 'meat', 'milk', 'bluewater', 'toys', 'coca-cola'],
    ['book', 'milk'],
    ['bread'],
    ['potato', 'wiski'],
    ['lamp', 'powerbank', 'tv']
];

for (let i = 0; i < 8; i++) {
    clientList.push(new Client(
        i + 3,
        `client Serg-${i + 1}`,
        `Kokosov ${i + 1}`,
        `asd${i + 1}`,
        `+3809877${i + 1}777`,
        orderList[i]
    ));

}

console.log(clientList);

console.log('============');
console.log('============');
console.log('============');

// 5
// #8abtVjRv
// - Взяти масив (Client [] з попереднього
// завдання).Відсортувати його по кількості
// товарів в полі order по зростанню. (sort)

let sortOrderList = clientList.sort((item1, item2) => item1.order.length - item2.order.length);
console.log(sortOrderList);

console.log('============');
console.log('============');
console.log('============');

// 6
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє
// створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість,
// об'єм двигуна.

function Car(model, manufacturer, carYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.carYear = carYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    // додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі
    // швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    // -- info () - яка виводить всю інформацію про
    // автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`модель авто - ${this.model},виробник-${this.manufacturer},${this.carYear} року випуску,обєм двигуна-${this.engineCapacity}, макс швидкість-${this.maxSpeed}`);
    };
    // -- increaseMaxSpeed (newSpeed) - яка підвищує
    // значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`гова макс швидкість - ${this.maxSpeed}км/год`);
    };
    // -- changeYear (newValue) - змінює рік випуску на
    // значення newValue
    this.changeYear = function (newValue) {
        this.carYear = newValue;
        console.log(`новий рік випуску(перекупи))))-${this.carYear} рік`);
    };
    // -- addDriver (driver) - приймає об'єкт який "водій"
    // з довільним набором полів, і додає його в поточний
    // об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`прийшов водій - ${driver.name}, віком - ${driver.age}`);
    }
}


let car = new Car('BMW-X6', 'BMW', 2008, 250, 5.5);
console.log(car);
console.log('---');
car.drive();
console.log('***');
car.info();
console.log('***');
car.increaseMaxSpeed(50);
console.log('***');
car.changeYear(2020);
console.log('***');
car.addDriver({name: 'Oleg', age: 37});
console.log(car);


console.log('============');
console.log('============');
console.log('============');

// 7
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в
// об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі
// швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про
// автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує
// значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на
// значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій"
// з довільним набором полів, і додає його в поточний
// об'єкт car

class Cars {

    constructor(model, manufacturer, carYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.carYear = carYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`модель авто - ${this.model},виробник-${this.manufacturer},${this.carYear} року випуску,обєм двигуна-${this.engineCapacity}, макс швидкість-${this.maxSpeed}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`гова макс швидкість - ${this.maxSpeed}км/год`);
    };

    changeYear(newValue) {
        this.carYear = newValue;
        console.log(`новий рік випуску(перекупи))))-${this.carYear} рік`);
    };

    addDriver(driver) {
        this.driver = driver;
        console.log(`прийшов водій - ${driver.name}, віком - ${driver.age}`);
    }
}

let rangeRover = new Cars('RangeRover', 'LandRover', 2011, 230, 5.5);
console.log(rangeRover);
console.log('***');
rangeRover.drive();
console.log('***');
rangeRover.info();
console.log('***');
rangeRover.increaseMaxSpeed(40);
console.log('***');
rangeRover.changeYear(2025);
console.log('***');
rangeRover.addDriver({name: 'Donald', age: 77});
console.log('***');
console.log(rangeRover);


console.log('============');
console.log('============');
console.log('============');


// 8
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з
// полями ім'я, вік, розмір ноги. Створити масив з
// 10 попелюшок.

class Cinderella {


    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellaNames = ['Alisa', 'Monica', 'Inga', 'Olya', 'Kate', 'Dina', 'Ira', 'Oksana', 'Anya', 'Nata'];
let ages = [22, 32, 20, 55, 31, 35, 38, 37, 41, 19];
let footSizes = [36, 33, 27, 25, 38, 31, 42, 45, 37, 45];
let cinderellaList = [];

function randomItemCinderella(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (let i = 0; i < 10; i++) {
    name = randomItemCinderella(cinderellaNames);
    age = randomItemCinderella(ages);
    footSize = randomItemCinderella(footSizes);
    let cinderella = new Cinderella(name, age, footSize);
    cinderellaList.push(cinderella);
}
console.log(cinderellaList);


console.log('***');

// Сторити об'єкт класу "принц" за допомоги класу
// який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, findeShoose) {
        this.name = name;
        this.age = age;
        this.findeShoose = findeShoose;
    }
}
 let shoes = [36, 33, 27, 25, 38, 31, 42, 45, 37, 45];

function randomShoes(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let prince = new Prince('Oleksandr', 33, randomShoes(shoes));
console.log(prince);

console.log('***');

// За допомоги циклу знайти яка попелюшка повинна
// бути з принцом.
let cinderellaLovePrince;
for (let cinderella of cinderellaList) {
     if (cinderella.footSize === prince.findeShoose) {
        cinderellaLovePrince = cinderella;
        break;
    }
}
if (cinderellaLovePrince) {
    console.log(`Попелюшка, яку знайшов принц за допомогою ЦИКЛУ: ${cinderellaLovePrince.name}`);
} else {
    console.log('Попелюшка не знайдена за допомогою ЦИКЛУ - ПЕЧАЛЬКА');
}

console.log('***');

// Додатково, знайти необхідну попелюшку за
// допомоги функції масиву find та відповідного
// колбеку

cinderellaLovePrince = cinderellaList.find(value => value.footSize === prince.findeShoose);
if (cinderellaLovePrince) {
    console.log(`Попелюшка, яку знайшов принц за допомогою FIND: ${cinderellaLovePrince.name}`);
} else {
    console.log('Попелюшка не знайдена за допомогою FIND - ПЕЧАЛЬКА');
}

console.log('============');
console.log('============');
console.log('============');

// 9
// #gsKLAsNWM
// *Через Array.prototype. створити
// власний foreach, filter


// foreach

Array.prototype.myForEach = function (arrCallback) {
    for (let i = 0; i < this.length; i++) {
        arrCallback(this[i], i, this);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
array.myForEach(item => console.log(item));

console.log('***');


//filter

Array.prototype.myFilter = function (arrCallback) {
    let finalResult = [];
    for (let i = 0; i < this.length; i++) {
        if (arrCallback(this[i], i, this)) {
            finalResult.push(this[i]);
        }
    }
    return finalResult;
}


let myFilter = array.myFilter(value => value > 3);
console.log(myFilter);
console.log('***');
let myFilter1 = array.myFilter(value => value % 2 === 0);
console.log(myFilter1);


console.log('========-------------END----------==========');








