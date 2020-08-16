const http = require('http');
const https = require('https');

let results = [];

function printResult() {
    let print = true;
    results.forEach((obj) => {
        if(!obj['collected']) print = false; return;
    });    
    if(!print) return
    results.forEach((obj) => {
        console.log(obj['data']);
    });
}

let i=2;
while(process.argv[i]!=undefined) {
    let result = {
        path: process.argv[i],
        https: process.argv[i].substring(0.8)==='https://',
        data: '',
        collected: false
    };
    results.push(result);
    i++
}

results.forEach((result) => {
    if(result.https){
        https.get(result.path, (response) => {
            response.on('data', (chunck)=> {
                result.data +=chunck.toString();
            });
            response.on('end', ()=> {
                result.collected=true;
                printResult();
            });
        })
    } else {
        http.get(result.path, (response) => {
            response.on('data', (chunck)=> {
                result.data +=chunck.toString();
            });
            response.on('end', ()=> {
                result.collected=true;
                printResult();
            });
        })
    }
});
