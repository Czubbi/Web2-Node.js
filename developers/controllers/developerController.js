var dbConnection = require('../../db/connection.js');
var conn={};

class DeveloperController{
    constructor(){
        dbConnection.connectToDb('Developer', ()=>{
            conn = dbConnection.get();
        })
    }
    getDevelopers(callback){
         conn.find({}).toArray((err, docs)=>{
             if(err) callback(err);
            else callback(docs);
        })
    }

    getDeveloperByName(name, callback){
        conn.find({"name":{'$regex': name}}).toArray((err, docs)=>{
            if(err) callback(err);
            else callback(docs);
        })
    }

    insertDeveloper(developer, callback){
        conn.insertOne(developer, (err, result)=>{
            if(err) callback(err);
            else callback(result);
        })
    }
}

module.exports = DeveloperController;
