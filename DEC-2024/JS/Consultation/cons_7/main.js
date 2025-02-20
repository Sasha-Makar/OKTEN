let array = [1, 2, 3];
let array1 = new Array('asd', 'qwe', 12, 3, 4, 5, 8, 7);//alt+enter
console.log(array);
console.log(array1);

console.log('===========');


//forEach

// function myForEach() {
//     console.log('.');
// }
// myForEach();

// function myForEach() {
//     console.log(this);
// }
// myForEach();

Array.prototype.myForEach = function (callback) {
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
array.myForEach(item=> console.log(item));

console.log('========');

Array.prototype.myFFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}


let fFilter = array1.myFFilter(item => typeof item === 'string');
console.log(fFilter);


console.log('======');


let products = [
    {
        title: 'milk',
        price: 30,
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/taste-teach_prodcatcard.png?sfvrsn=fb05538d_2'
    },
    {
        title: 'juice',
        price: 28,
        image: 'https://img.freepik.com/free-vector/illustration-juce-glass_250435-779.jpg?auto=format&h=200'
    },
    {
        title: 'tomato',
        price: 45,
        image: 'https://img.freepik.com/free-vector/set-realistic-full-sliced-tomatoes-vectors_1441-834.jpg?auto=format&h=200'
    },
    {
        title: 'tea',
        price: 25,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonQ8OD5ZbGBe7c9XolRfXgQjvPU5iFvIwOQ&usqp=CAU'
    }
];


for (const product of products) {
    for (const key in product) {
        console.log(key,':',product[key]);
    }
}

