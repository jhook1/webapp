var db = require('../config/db.config');

const updateContact = async (req,res) => {
    let post = {
        first_name: req.body.first_name,
        nick_name: req.body.nick_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    };

    let query="update people set ? where id= ?";

    db.query(query,[post,req.params.id],(err,response)=>{
        if(err)
            res.send(err);
    })
};

module.exports = updateContact;