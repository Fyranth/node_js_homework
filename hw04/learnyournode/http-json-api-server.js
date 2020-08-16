const http = require('http');
const url = require('url');
let port = process.argv[2];

http.createServer((req,res) => {
    let url_data = url.parse(req.url,true);
    let dateStr = url_data.query['iso'];
    if(req.method==='GET') {
        if(url_data.pathname==='/api/parsetime') {
            let date = new Date(dateStr);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
            res.end();
        } else if(url_data.pathname==='/api/unixtime') {
            let date = new Date(dateStr);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({unixtime: date.getTime()}));
            res.end();
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.writeHead(405); 
        res.end();  
    }
}).listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
});
