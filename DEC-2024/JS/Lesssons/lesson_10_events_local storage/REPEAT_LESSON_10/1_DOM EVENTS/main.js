// let target = document.getElementById('target');
// console.log(target);

// target.onclick = ()=>{
//     console.log('log');
// }

// target.onmousemove = ()=>{
//     console.log('log');
// }

// target.onmousemove = (ev) => {
//     // console.log(ev);
//     let r = ev.clientX;
//     let g = ev.clientY;
//     let b = ev.clientX;
//     target.style.backgroundColor = ` rgb(${r},${g},${b})`;
// }


// target.onclick = function () {
//     console.log('qweasdwwdfe');
// }
//
// target.addEventListener('click',function () {
//     console.log('click');
// })

// target.onmouseover=function () {
//     console.log('over');
// }
//
// target.onmouseleave=function () {
//     console.log('leave');
// }


// let i1 = document.getElementById('in1');
//
// console.log(i1);
//
// i1.oninput =function () {
//     console.log(this.value);
//     target.innerText = this.value;
// }

// let f1 = document.forms.f1;
// console.log(f1);
//
// // let input = f1.username;
// // console.log(input);
//
// f1.onsubmit=function (ev) {
//     ev.preventDefault();
//     // console.log('asd');
//     // let value = f1.username.value;
//     // console.log(value);
//     let user = {name: this.username.value}
//     console.log(user);
// }


window.onload = function () {
    console.log('load');
}

document.onreadystatechange = function () {
    console.log(document.readyState);
    if (document.readyState === 'interactive') {
        document.body.innerText = 'loading.....';
    }
    if (document.readyState === 'complete') {
        document.body.innerText = 'complete!!!';
    }
}