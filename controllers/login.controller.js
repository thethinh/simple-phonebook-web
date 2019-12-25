var db = require('../db');
var md5 = require('md5');
module.exports.getLogin = (req,res)=>{
    if(req.signedCookies.userId)
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
    res.cookie('userId',user.id, { expires: new Date(Date.now() + 864000000), signed: true});
    res.redirect('../user/index');

}