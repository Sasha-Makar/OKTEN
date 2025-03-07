//-----------------------№1
// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts
// та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        let container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '20px';
        document.body.appendChild(container);

        carts.forEach(cart => {
            console.log(cart);

            let block = document.createElement('div');
            block.style.border = '1px solid black';
            block.style.margin = '10px';
            block.style.padding = '15px';
            block.style.backgroundColor = 'silver';
            block.style.width = '40vw';

            let idElement = document.createElement('h3');
            idElement.innerText = `ID: ${cart.id}`;
            idElement.style.textAlign = 'center';
            idElement.style.color = 'red';

            let ulElement = document.createElement('ul');
            let liQuantity = document.createElement('li');
            liQuantity.innerText = `Total Quantity: ${cart.totalQuantity}`;
            let liDiscount = document.createElement('li');
            liDiscount.innerText = `Total Discounted: ${cart.discountedTotal}`;
            let liProducts = document.createElement('li');
            liProducts.innerText = `Total Products: ${cart.totalProducts}`;
            let liTotal = document.createElement('li');
            liTotal.innerText = `Total: ${cart.total}`;
            let liUserId = document.createElement('li');
            liUserId.innerText = `User ID: ${cart.userId}`;

            ulElement.append(liQuantity, liDiscount, liProducts, liTotal, liUserId);
            block.appendChild(idElement);
            block.appendChild(ulElement);


            let productContainer = document.createElement('div');
            productContainer.style.display = 'flex';
            productContainer.style.flexDirection = 'column';
            productContainer.style.gap = '20px';


            cart.products.forEach(product => {
                console.log(product);

                let productDiv = document.createElement('div');
                productDiv.style.border = '1px solid black';
                productDiv.style.padding = '10px';
                productDiv.style.width = '70%';
                productDiv.style.margin = '0 auto';
                productDiv.style.backgroundColor = 'white';


                let ulProduct = document.createElement('ul');

                let liProductId = document.createElement('li');
                liProductId.innerText = `Id: ${product.id}`;
                let liDiscountPercentage = document.createElement('li');
                liDiscountPercentage.innerText = `Discount Percentage: ${product.discountPercentage}`;
                let liDiscountedTotal = document.createElement('li');
                liDiscountedTotal.innerText = `Total Discounted: ${product.discountedTotal}`;
                let liQuantity = document.createElement('li');
                liQuantity.innerText = `Quantity: ${product.quantity}`;
                let liTitle = document.createElement('li');
                liTitle.innerText = `Title: ${product.title}`;
                let liPrice = document.createElement('li');
                liPrice.innerText = `Price: ${product.price}`;


                let imageProduct = document.createElement('img');
                imageProduct.src = product.thumbnail;
                imageProduct.style.display = 'block';
                imageProduct.style.margin = '0 auto';
                imageProduct.style.width = '100px';


                ulProduct.append(liProductId, liDiscountPercentage, liDiscountedTotal, liQuantity, liTitle, liPrice);
                productDiv.appendChild(ulProduct);
                productDiv.appendChild(imageProduct);

                productContainer.appendChild(productDiv);
            });

            block.appendChild(productContainer);

            container.appendChild(block);
        });
    });


console.log('=======================================');
console.log('=======================================');
console.log('=======================================');

