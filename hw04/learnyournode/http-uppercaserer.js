const http = require('http');
const map = require('through2-map');
let port = process.argv[2];

http.createServer((req, res) => {

    if(req.method==='POST') {
        res.writeHead(200,  {'Content-Type': 'text/plain'});
        req.pipe(map((chunck)=>{
            return chunck.toString().toUpperCase();   
        })).pipe(res);
    } else {
        res.writeHead(405);
    }   
}).listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});