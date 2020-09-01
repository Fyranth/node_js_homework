//Задание №2
const fs = require('fs');

function parseString(str) {
    return str.split(' ');
}

function getTrue(arr, i) {
    if(arr[i]/2>0) {
        return arr[i]/2==Math.floor(arr[i]/2);
    } else return arr[i]/2==Math.ceil(arr[i]/2);
}

let arr = parseString(fs.readFileSync('data.txt', {encoding: 'UTF-8'}));
console.log(arr);
let str1 = '', str2 = '';

for(let i=0; i<arr.length; i++) {
    //Проверяем деление на 2
    let t = getTrue(arr, i);
    if(t) {
        str1 += `${arr[i]} `;
    }

    //Возводим в степень
    str2 += `${Math.pow(arr[i], 3)} `;
}

fs.writeFile('./out-1.txt', str1.trim(), (err)=> {
    if(err) {
        console.log(`out-1.txt ${err}`);
    } else {
    console.log(`out-1.txt записан`);
    }
});
fs.writeFile('./out-2.txt', str2.trim(), (err)=> {
    if(err) {
        console.log(`out-2.txt ${err}`);
    } else {
    console.log(`out-2.txt записан`);
    }
})