const fs = require('fs');
const IP1 = '89.123.1.41';
const IP2 = '34.48.240.111';
const readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('./access.log')
});

rd.on('line', function(line) {
    const arr = line.replace('\r', '').split('\n');
    const arrIP1 = arr.filter(el => el.includes(IP1));
    const arrIP2 = arr.filter(el => el.includes(IP2));

    arrIP1.forEach(element => {
        fs.createWriteStream(`./${IP1}_requests.log`, {
            encoding: 'utf-8',
            flags: 'a'
        }).write(element + '\n')
    });

    arrIP2.forEach(element => {
        fs.createWriteStream(`./${IP2}_requests.log`, {
            encoding: 'utf-8',
            flags: 'a'
        }).write(element + '\n')
    });
});

