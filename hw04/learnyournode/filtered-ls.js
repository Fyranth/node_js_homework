const fs = require('fs');
const path = require('path')
let dir = process.argv[2];
let ext = "."+process.argv[3];

fs.readdir(dir, 'UTF-8', (err, files) => {
    if (err) return console.error(err)
    for(let i=0; i<files.length; i++) {
        let file = files[i];
        if(path.extname(file)===ext) {
            console.log(file);
        }
    }
});