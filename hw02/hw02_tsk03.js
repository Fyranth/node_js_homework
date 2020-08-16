//Задание №3
const eventsObj = {};

function bind(func) {
    return function() {
		return func(...arguments);
	};
}

function on(eventName, callback) {
    let bound = bind(callback);
    eventsObj[eventName] = eventsObj[eventName] || [];
    if(eventsObj[eventName].indexOf(bound)) {
        eventsObj[eventName].push(bound);    
    }
    
}
 
function emit(eventName, stringData) {
    for(let i=0; i<eventsObj[eventName].length; i++) {
        let func = eventsObj[eventName][i];
        func(stringData);       
    }     
}

on('eat', stringData => {
    console.log('Первым: Я кушаю  ' + stringData + '.');
});

on('eat', stringData => {
    console.log('Вторым: Я кушаю  ' + stringData + '.');
});

setTimeout(() => {
    emit('eat', 'бутерброд');
}, 3000);

setTimeout(() => {
    emit('eat', 'мясо');
}, 2000);

setTimeout(() => {
    emit('eat', 'яблочко');
}, 500);

 

