module.exports.postCreate = (req,res,next)=>{
    var errors = [];

    if(!req.body.name){
        errors.push('Name is require !');
    }
    if(!req.body.phone){
        errors.push('Phone is require !');
    }

    if(errors.length){ //falsy
        res.render('index/create_user',{
            errors: errors,
            values: req.body
        });
        return;
    }

    next();
}