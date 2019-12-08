var express = require('express');
var app = express();
var port = 1616;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

var indexRoute = require('./routes/index.route');
var userRoute = require('./routes/user.route');
var loginRoute = require('./routes/login.route');
var authMiddlewares = require('./middlewares/auth.middlewares');


app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));

app.use('/',indexRoute);
app.use('/user',authMiddlewares.requireAuth,userRoute);
app.use('/auth',loginRoute);

app.listen(port,()=>{
    console.log('Sever listening on port'+port);
});