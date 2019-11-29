var express = require('express');
var app = express();
var port = 1616;

app.set('view engine','pug');
app.set('views','./views');

app.use(express.static('public'));


var users=[
    {id:1, name: 'Nguyễn Thế Thịnh',phone:'0382977766'},
    {id:2, name: 'Kiều Trung Hiếu',phone:'039283747'},
    {id:3, name: 'Vũ Mạnh Hiệp',phone:'03372974824'},
    {id:4, name: 'Tăng Hoàng Anh',phone:'03372944444'},
    {id:5, name: 'Nguyễn Thục Anh',phone:'0405974824'}
];

app.get('/',(req,res)=>{
    res.render('index',{
        users: users
    });
});

app.get('/users',(req,res)=>{
    res.render('users/index',{
        users: users
    });
});

app.get('/search',(req,res)=>{
    var q = req.query.q;
    var matchussers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });
    res.render('index',{
        users: matchussers
    })
    console.log(req.query);
});

app.get('/create-user',(req,res)=>{
    res.render('create_user')
})
app.listen(port,()=>{
    console.log('Sever listening on port'+port);
});