const http = require('http');
const https = require('https');
let path = process.argv[2];
let type = path.substring(0, 8);
let collection = ''

if(type==='https://') {
    https.get(path, (response) => {
        response.on('data', (chunck)=> {
            collection +=chunck.toString();
        });
        response.on('end', ()=> {
            console.log(collection.length);
            console.log(collection);
        });
    })
} else {
    http.get(path, (response) => {
        response.on('data', (chunck)=> {
            collection +=chunck.toString();
        });
        response.on('end', ()=> {
            console.log(collection.length);
            console.log(collection);
        });
    })
}

