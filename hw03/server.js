const http = require('http');
const fs = require('fs');
//лаб. задание №1
//а
/*const lang = process.argv[2];


http.createServer((request, response) => {
    let pathname = (lang=='en') ? 'en.html': 'ru.html';
    console.log("Request: " + request.url);
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${pathname} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});*/

//б
/*const lang = process.env.LANG;
console.log(lang);

http.createServer((request, response) => {
    let pathname = (lang=='en_EN') ? 'en.html': 'ru.html';
    console.log("Request: " + request.url);
    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Could not find or open file for reading\n');
            response.statusCode = 404;
            response.end();
        } else {
            console.log(`The file ${pathname} is read and sent to the client\n`);
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
}).listen(8080, ()=>{
    console.log("HTTP server works in 8080 port!\n");
});*/

//Лаб. задание №2
const cp = require('child_process');
const child = cp.fork('./child.js');

http.createServer((request, response)=>{
    child.send({ 
        method: request.method,
        params: request.url 
    }); 
    response.statusCode = 200;
    response.end();
}).listen(8080, ()=>{
    console.log('Server run in 8080 port!');
}); 
 


