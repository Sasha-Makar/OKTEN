

new Promise((resolve)=>{
    let x = 1;
    setTimeout(() => {
        console.log(x);
        resolve(x);
    }, 1000);
})
    .then((x) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            x++;
            console.log(x);
            resolve(x);
        },1000)
    })
}).then((x) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            x++;
            console.log(x);
            resolve(x);
        },1000)
    })
})