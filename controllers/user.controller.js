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

