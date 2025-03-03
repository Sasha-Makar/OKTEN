let target = document.getElementById('target');

// target.onclick = function () {
//     console.log('click');
// }

// target.onclick = (event)=> {
//     console.log('click');
//     console.log(event);
// }


// target.onmousemove = (ev)=>{
//     // console.log('click');
//     // console.log(ev);
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     // console.log(ev.clientX, ev.clientY);
//     target.style.background = `rgb(${r},${g},${b})`;
// }


// target.addEventListener('click',function () {
//     console.log('qwersadcsfs');
// })
//
// target.addEventListener('click',function () {
//     console.log('okten');
// })
//
// target.addEventListener('click',function () {
//     console.log('school');
// })



//FOR HEATMAP

// target.onmouseleave = function () {
//     console.log('leave');
// };
//
// target.onmouseover = function () {
//     console.log('over');
// }

// console.log(document.forms.);

// let input = document.getElementById('inp');
// input.oninput = function (ev) {
//     // console.log(this.value);
//     target.innerText = this.value;
// }


// let f1 = document.forms.f1;
// // console.log(f1.username);
// f1.onsubmit = function (ev) {
//     ev.preventDefault();
//     // console.log('qwe');
//     let user = {user: this.username.value}
//     console.log(user);
// }



// window.onload = function () {
//     console.log('load');
// }

document.onreadystatechange = function (ev) {
    // console.log(ev);
    // console.log(document.readyState);
    if (document.readyState === 'interactive') {
        console.log('loading start - interactive.....');
    }
    if (document.readyState === 'complete') {
        console.log('loading complete');
    }

}



