





function asd(x,y,...arr) {
    for (const item of arr) {
        if (Array.isArray(item)){
            console.log(item);
        }
    }
}

asd(11, 22, [333, 44, 55], 66, 77);

console.log('---------------');

function exchange(sum,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sum/item.value;
        }
    }
    return 'error';
}

let result = exchange(10000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45,}], 'US');
let result1 = exchange(10000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45,}], 'USD');
let result2 = exchange(10000, [{currency: 'USD', value: 42}, {currency: 'EUR', value: 45,}], 'EUR');
console.log(result);
console.log(result1);
console.log(result2);

console.log('-----------');


// document.write('<div></div>')//alt+enter->html

// document.write('<br>')//alt+enter->edit HTML fragment

