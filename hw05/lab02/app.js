const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
//app.listen(80);
app.listen(1025);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.post('/somepath',  (req, res, next) => {
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.send(JSON.stringify(req.body));
});

//Если использовать 80 порт - то на Windows - у меня система в голос ругается об ошибке доступа к 80 порту.
//Если изменить порт на > 1025 - то сервер считает нам файлик index.html и отправка данных формы - вернет нам эти данные в JSON формате