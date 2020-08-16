//Задание №1
console.log('Задание 1');
function pause(func, time) {
    return function () {
        console.log(`Функция выполниться с задержкой в ${time} секунды!`);
        let result = func.apply(this, arguments)
        setTimeout(result, time*1000);
    };   
}

function fib(n) {
    if(!n) { n = 10 };
    let a = 1;
    let b = 1;
    let arr = [a,b];
    for (let i = 3; i <= n; i++) {
      let c = arr[arr.length-1] + arr[arr.length-2];
      arr.push(c);
    }
    console.log(`Числа Фибоначчи: ${arr}`);
    return arr;
};
let paused = pause(fib, 1);
paused(5);

//Задание №2
console.log('Задание 2');
function returnObject(func, ...props) {
    return function () {
        let data = func();
        if(Array.isArray(data)) {
            let result = {};
            for (let i=0; i<props.length; i++) {
                result[props[i]] = data[i];
            }
            return result;
        } else {
            return data;
        }
    }
}

let func_decoreted = returnObject(fib, 'one', 'two', 'three', 'four', 'five');
let result = func_decoreted(10);
console.log(result.one); // 1
console.log(result.two); //2
console.log(result)

function func(){
	return ['JS', 'is', 'programming language']
}
let result2 = returnObject (func, 'a', 'b', 'c')();
console.log(result2.c) // 'programming language'