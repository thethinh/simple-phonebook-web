var db = require('../db');


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

module.exports.getprofile = (req,res)=>{
    res.render('user/wall_user');
}

module.exports.getview_user = (req,res)=>{
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('user/view_user',{
        oneuser: user
    });
}

module.exports.getaddAvata = (req,res)=>{
    res.render('user/addAvata');
}

module.exports.postaddAvata = (req,res)=>{
    req.body.avata = req.file.path;
    var user = db.get('users').find({id: req.cookies.userId}).value();
    user.avata.push('/'+req.file.path.split('\\').slice(1).join('/'));
    db.get('users').find({id: req.cookies.userId}).assign({avata: user.avata}).write();
    res.redirect('../user/profile');
}

