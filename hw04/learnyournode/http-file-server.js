const http = require('http');
const fs = require('fs');

let port = process.argv[2];
let file = process.argv[3]

http.createServer((request, response) => {
    let stream = fs.createReadStream(file, 'UTF-8');
    stream.pipe(response);
}).listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});
