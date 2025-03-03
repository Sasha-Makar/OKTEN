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

let productsDiv = document.getElementsByClassName('products')[0];
// console.log(productsDiv);


for (const product of products) {
    let productBlock = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} - ${product.price} UAH`;

    let img = document.createElement('img');
    img.src = product.image;

    let button = document.createElement('button');
    button.innerText = 'add to cart'

    button.onclick = function (ev) {
        // ev.preventDefault();
        // console.log(localStorage.getItem('cart'));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // console.log(cart);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

    }


    productBlock.append(h2,img,button);

    productsDiv.appendChild(productBlock);
}
