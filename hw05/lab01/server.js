//Задача №1
let express = require('express');
let app = express(); 
let route = require('./routes/products.js');
app.use('/products', route);
app.listen(3000); 
//ответ "Cannot GET /" приходить потому что не используем папку статических данных (express static) и вообще не отдаем стартовую страницу

