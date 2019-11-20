var express = require('express');
var app = express();
var port = 1616;

app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));


var users=[
    {id:1, name: 'Thịnh'},
    {id:2, name: 'Hiếu'}
];

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/users',(req,res)=>{
    res.render('users/index',{
        users: users
    });
});

app.get('/users/search',(req,res)=>{
    var q = req.query.q;
    var matchussers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });
    res.render('users/index',{
        users: matchussers
    })
    console.log(req.query);
});
app.listen(port,()=>{
    console.log('Sever listening on port'+port);
});