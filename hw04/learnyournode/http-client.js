const http = require('http');
let path = process.argv[2];

http.get(path, (response) => {
    response.on('data', (data)=> {
        console.log(data.toString());
    })
})

