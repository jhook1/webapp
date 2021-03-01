var db = require('../config/db.config');

const addContact = async (req,res) => {
    let post = {
        first_name: req.body.first_name,
        nick_name: req.body.nick_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    };

    let query = "insert into people set ?";

    db.query(query,post,(err,result)=>{
        if(err)
            res.send(err);
    });
};

module.exports = addContact;