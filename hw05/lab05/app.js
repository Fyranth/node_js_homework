let express = require('express');
let mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const route = require('./routes/registration.js');
let app = express();
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);
app.listen(3000);