var express = require('express');
var app = express();
var port = 1616;
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var indexRoute = require('./routes/index.route');
var userRoute = require('./routes/user.route');

app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));

app.use('/',indexRoute);
app.use('/user',userRoute);

app.listen(port,()=>{
    console.log('Sever listening on port'+port);
});