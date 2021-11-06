const socket = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require('fs');

const users = ['user1', 'user2', 'user3', 'user4', 'user5']

const getRandomUser = () => {
    return Math.floor(Math.random() * (users.length - 1))
}


const server = http.createServer((req, res) => {
    const indexPath = path.join(__dirname, 'socket.html');
    const readStream = fs.createReadStream(indexPath);

    readStream.pipe(res);
});

const io = socket(server);

io.on('connection', client => {
    const user = users[getRandomUser()]
    client.broadcast.emit('connect_user', user);
    client.emit('connect_user', user);

    client.on('client_msg', data => {

        const payload = {
            name: user,
            message: data.message
        }

        client.broadcast.emit('server_msg', payload);
        client.emit('server_msg', payload);
    });
});

server.listen(3001, console.log('port 3001'));