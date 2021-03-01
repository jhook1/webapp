var mysql = require('mysql');
var config = require('./config');

var db = mysql.createConnection(config.db);
db.connect((err)=>{
  if(err)
    return console.error('error: ',err.message);
  else{
    console.log('MySQL server connection established');

    let query = "create database if not exists contacts";
    db.query(query,(err)=>{
      if(err)
        return console.error('error: ',err.message);
      else{

        query = "use contacts";
        db.query(query,(err)=>{
          if(err)
            return console.error('error: ',err.message);
          else{

            query="create table if not exists people ("+
                "id int not null auto_increment primary key,"+ 
                "first_name varchar(255) not null,"+ 
                "nick_name varchar(255),"+
                "last_name varchar(255) not null,"+
                "email varchar(255),"+
                "phone varchar(255)"+
              ")";
            db.query(query,(err)=>{
              if(err)
                return console.error('error: ',err.message);
            });
          }
        });
      }      
    });
  }
});



module.exports = db;