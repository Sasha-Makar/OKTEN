function User(name, age, status, wife, brotherName, brotherAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    //композиція і агрегація
    this.wife = wife;
    this.brother = {name: brotherName, age: brotherAge};
    this.greeting = function () {
        console.log('hello my name is ' + this.name);
    }

}
//композиція і агрегація

let user1 = new User('vasya', 31, true, {name: 'Olena', age: 37}, 'Yura', 45);
console.log(user1);
user1.greeting();


