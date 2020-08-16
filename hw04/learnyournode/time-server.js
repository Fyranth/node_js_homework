const net = require('net');
let port = process.argv[2];
net.createServer((socket) => {
    let date = new Date;
    let year = date.getFullYear();
    let month = (date.getMonth()+1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    socket.write(`${year}-${month}-${day} ${hour}:${minutes}` + '\n');
    socket.end();
}).listen(port);