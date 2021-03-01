var db = require('../config/db.config');

const deleteContact = async (req,res) => {
    let query = "delete from people where id= ?";
    db.query(query,req.params.id,(err,response)=>{
        if(err)
            res.send(err);
    });
};

module.exports = deleteContact;