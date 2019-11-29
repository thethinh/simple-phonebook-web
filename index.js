var express = require('express');
var app = express();
var port = 1616;
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);
 db.defaults({users: [] }).write();
app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    res.render('index',{
        users: db.get('users').value()
    });
});

app.get('/search',(req,res)=>{
    var q = req.query.q;
    var matchussers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });
    res.render('index',{
        users: matchussers
    });
});

app.get('/create-user',(req,res)=>{
    res.render('create_user');
});

app.post('/create-user',(req,res)=>{
    db.get('users').push(req.body).write();
    res.redirect('/');
});
app.listen(port,()=>{
    console.log('Sever listening on port'+port);
});