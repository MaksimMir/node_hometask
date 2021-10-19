const colors = require('colors');
const arg1 = +process.argv[2];
const arg2 = +process.argv[3];

const getPrimeNumbers = () => {
    const argumentsArr = [];
    if (arg1 < 2) arg1 = 2;
    if (isNaN(arg1) || isNaN(arg2)) {
        console.log('Один из аргументов не является числом!');
        return;
    } else {
        nextPrime:
        for (let i = arg1; i <= arg2; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }
            argumentsArr.push(i);
        }
        
    }
    return argumentsArr;
}

const getNumbersOfColor = arr => {
    if(!arr) return;

    for (let i = 0; i < arr.length; i+=3) {
        console.log(colors.green(arr[i]));
        if (arr[i + 1]) console.log(colors.yellow(arr[i+1]));  
        if (arr[i + 2]) console.log(colors.red(arr[i+2]));                       
    }
}

const numbers = getPrimeNumbers();
getNumbersOfColor(numbers);


