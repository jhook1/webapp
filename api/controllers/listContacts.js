var db = require('../config/db.config');

const listContacts = async (req,res) => {
    let query = "select id,first_name,last_name from people";

    db.query(query,(err,result)=>{
        if(err)
            res.send(err);
        else
            res.json(result).end();
    });
};

module.exports = listContacts;