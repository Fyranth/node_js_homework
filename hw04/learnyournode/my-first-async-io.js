const fs = require('fs');
let path = process.argv[2];
fs.readFile(path, 'UTF-8', (err, filedata) => {
    if(err) {
        console.log(err); return;
    }
    let reg =  /(\n)/gm;
    let arr = filedata.match(reg)
    console.log(arr.length);
});
