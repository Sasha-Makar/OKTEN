console.log([11, 22, 33].reduce((accumulator, item) => {
    return accumulator + item;

}, 0));


console.log([1123, 22432, 33].reduce((accum, item) => {
    return accum + item;
}, 0));

console.log('==========');

// [{value:33},{value:33},{value:33}]=>{value:99}

console.log([{value: 33}, {value: 33}, {value: 33}].reduce((accum, item) => {
    accum.result = accum.result + item.value;
    return accum;
}, {result: 0}));