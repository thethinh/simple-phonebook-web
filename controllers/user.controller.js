var db = require('../db');

module.exports.getLogin = (req,res)=>{
    res.render('user/login');
}