var db = require('../config/db.config');

const readContact = async (req,res) => {
    let query = "select * from people where id= ?";

    db.query(query,req.params.id,(err,result)=>{
        if(err)
            res.send(err);
        else
            res.json(result).end();
    });
};

module.exports = readContact;