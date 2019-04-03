var dbConnection = require('../../db/connection.js');
var conn={};

class ProjectController{
    constructor(){
        dbConnection.connectToDb('Project', ()=>{
            conn=dbConnection.get();
        })
    }

    getProjects(callback){
        conn.find({}).toArray((err, docs)=>{
            if(err) callback(err);
            else callback(docs);
        })
    }

    getProjectByName(name, callback){
        conn.find({"name":{'$regex': name}}).toArray((err, docs)=>{
            if(err) callback(err);
            else callback(docs);
        })
    }
    getProjectById(id,callback){
        conn.find({"_id":id}).toArray((err,docs)=>{
            if(err) callback(err);
            else callback(docs[0]);
        })
    }
    insertProject(project, callback){
        conn.insertOne(project, (err, result)=>{
            if(err) callback(err);
            else callback(result);
        })
    }
}

module.exports = ProjectController;