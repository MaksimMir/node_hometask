const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = async (query) => new Promise(resolve => rl.question(query, resolve));
const func = async () => {
    const filePathOut = await question('Please inter the path to the file: ');
    const filePathIn = await question('Please inter the path to the file: ');
    const userIP = await question('Please inter IP: ');
    const encoding = await question('Please inter the encoding: ');

    const pathOut = path.resolve(__dirname, filePathOut);
    const pathIn = path.resolve(__dirname, filePathIn);

    if (!fs.lstatSync(pathOut).isFile()) func();

    const rd = readline.createInterface({
        input: fs.createReadStream(pathOut),
        terminal: false
    })

    rd.on('line', line => {
        if (line.includes(userIP)) {
            fs.createWriteStream(pathIn, {
                encoding,
                flags: 'a'
            }).write(line + '\n')
        } else {
            console.log('Error. IP not found')
        }
    })

    rl.close();
}

rl.on('close', () => console.log('Fin'))

func()
