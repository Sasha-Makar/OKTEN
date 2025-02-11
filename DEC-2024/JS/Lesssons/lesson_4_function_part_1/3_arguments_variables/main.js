



function calc() {
    console.log(arguments);
    if (arguments.length === 2){
        return arguments[0] + arguments[1];
    }else if (arguments.length === 3){
        return arguments[0] + arguments[1] + arguments[2];
    }
}

let calc1 = calc(1, 2);
let calc2 = calc(1, 2, 3);
console.log(calc1);
console.log(calc2);