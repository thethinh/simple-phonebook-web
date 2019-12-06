var db = require('../db');

module.exports.getLogin = (req,res)=>{
    res.render('user/login');
}

module.exports.postLogin = (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email: email}).value();

    if(!user){
        res.render('user/login',{
            errors:[
                'User does not not exist.'
            ],
            values: req.body
        });
        return;
    }

    if(user.password !== password){
        res.render('user/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }

    res.redirect('../user/index');
}

module.exports.getIndex = (req,res)=>{
    res.render('user/index',{
        users: db.get('users').value()
    });
}

module.exports.getSearch = (req,res)=>{
    var q = req.query.q;
    var matchussers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });
    res.render('user/index',{
        users: matchussers,
        value: req.query
    });
}