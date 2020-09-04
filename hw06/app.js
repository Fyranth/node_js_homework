const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
 
const app = express();
const widgetRoute = require('./routes/widgets.js'); 

app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/widgets', widgetRoute);
app.get('/', (req, res, next)=> {
    res.render('index', { title: 'Task:' });
}); 
app.listen(3000); 