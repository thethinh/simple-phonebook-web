var db = require('../db');
var shortid = require('shortid');

module.exports.getIndex = (req,res)=>{
    res.render('index/index',{
        users: db.get('users').value()
    });
};

module.exports.getSearch = (req,res)=>{
    var q = req.query.q;
    var matchussers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    });
    res.render('index/index',{
        users: matchussers,
        value: req.query
    });
};

module.exports.getCreate_user = (req,res)=>{
    res.render('index/create_user');
};

module.exports.getView_user = (req,res)=>{
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('index/view_user',{
        user: user
    });
};


module.exports.postCreate_user = (req,res)=>{
    req.body.id = shortid.generate();
    
    db.get('users').push(req.body).write();
    res.redirect('/');
};

module.exports.getLogin = (req,res)=>{
    res.render('login/login');
}

module.exports.postLogin = (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email: email}).value();

    if(!user){
        res.render('index/login',{
            errors:[
                'User does not not exist.'
            ],
            values: req.body
        });
        return;
    }

    if(user.password !== password){
        res.render('index/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }

    res.redirect('../user/index');
}


