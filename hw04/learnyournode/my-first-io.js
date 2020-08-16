const fs = require('fs');
let path = process.argv[2];
let filedata = fs.readFileSync(path, 'UTF-8');
let reg =  /(\n)/gm;
let arr = filedata.match(reg)
console.log(arr.length);

