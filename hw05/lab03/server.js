const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/registration.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(route);
app.listen(3000); 



