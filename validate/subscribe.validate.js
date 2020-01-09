module.exports.postSubscribe = (req,res,next)=>{
    if(req.body.password.length < 4){
        res.render('auth/subscribe',{
            error : "Password minimum four char"          
        });
        return;
    }
    next();

}