// let form = document.getElementsByTagName('form');
// console.log(form);


// let form = document.forms[0];
// // console.log(form);
//
//
//
// form.onsubmit = function (ev) {
//     ev.preventDefault();
//
//     let userId = this.userId.value;
//     // console.log(userId.match(/[0-9]/g));
//     if(!userId.match(/[0-9]/g)){
//         console.log('error');
//     }
//     let title = this.title.value;
//     let body = this.body.value;
//     console.log(!!body.match(/(\w+\s){3,}/g));
//     // console.log(userId, title, body);
// }

//https://regex101.com/
// https://stackoverflow.com/questions/58248441/regex-template-for-ukrainian-phone-numbers
// https://regex-generator.olafneumann.org/?sampleText=2020-03-12T13%3A34%3A56.123Z%20INFO%20%20%5Borg.example.Class%5D%3A%20This%20is%20a%20%23simple%20%23logline%20containing%20a%20%27value%27.&flags=i
// https://regexr.com/
// https://www.akto.io/tools/javascript-regex-tester


let form = document.forms[0];
// console.log(form);


form.onsubmit = function (ev) {
    ev.preventDefault();

    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;
    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

}


