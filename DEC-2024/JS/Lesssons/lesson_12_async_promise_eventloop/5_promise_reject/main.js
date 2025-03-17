

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let x = 1;
        console.log(x);
        resolve(x);
    },1000)
})
// .then(value => {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             value++;
//             console.log(value);
//             if (true) {
//                 reject('ahahahaha')
//             }else {
//                 resolve(value);
//             }
//         }, 1000);
//     } )
//
// }).catch(reason => {
//     console.log(reason);
// })
// .then(value => {
//     console.log(value);
// })
    .then(value => {
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                value++;
                console.log(value);
                if (false) {
                    reject('ahahahaha')
                }else {
                    resolve(value);
                }
            }, 1000);
        } )

    }).catch(reason => {
    console.log(reason);
})
    .then(value => {
        console.log(value);
    })