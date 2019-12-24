var db = require('../db');
var md5 = require('md5');
module.exports.getLogin = (req,res)=>{
    if(req.cookies.userId)
    {
        res.redirect('../user/index');
    }
    res.render('auth/login')
}

module.exports.postLogin = (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email: email}).value();

    if(!user){
        res.render('auth/login',{
            errors:[
                'User does not not exist.'
            ],
            values: req.body
        });
        return;
    }
    
    var hashPass = md5(password);
    if(user.password !== password){
        res.render('auth/login',{
            errors:[
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    if(req.body.check){
        res.cookie('userId',user.id, { expires: new Date(Date.now() + 864000000)});
        res.redirect('../user/index'); 
    }
    else if(!req.body.check){
        res.cookie('userId',user.id,{ expires: 0});
        res.redirect('../user/index');    
    }

}