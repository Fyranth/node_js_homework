//Задание №1
function* passwordGenerator(n) {
    let str = '';
    for(let i = 48; i <= 57; i++) str+=String.fromCharCode(i);
    for(let i = 65; i <= 90; i++) str+=String.fromCharCode(i);
    for(let i = 97; i <= 122; i++) str+=String.fromCharCode(i);
    while(true) {
        let pass = '';
        while(pass.length<n) {
            pass += str[Math.floor(Math.random()*str.length)];
        }

        yield pass;
    }
}
let passwordGen = passwordGenerator(16);
console.log(passwordGen.next().value);
console.log(passwordGen.next().value);
console.log(passwordGen.next().value);
passwordGen = passwordGenerator(8);
console.log(passwordGen.next().value);
console.log(passwordGen.next().value);
console.log(passwordGen.next().value);
