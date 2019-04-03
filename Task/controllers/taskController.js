var dbConnection = require('../../db/connection.js');
var projectCtr = require('../../project/controllers/projectController');
var ObjectId = require('mongodb').ObjectID;
var myProjectCtr = new projectCtr();
var conn={};

class TaskController{

    constructor(){
        dbConnection.connectToDb('Project', ()=>{
            conn = dbConnection.get();
        })
    }
    getTasks(_id, callback){
        conn.find({"_id":ObjectId(_id)}).toArray((err, docs)=>{
            if(err) callback(err);
            else if(docs.length>0)
            {
                callback(docs[0].tasks);
            }
        })
    }
    addTaskToProject(task, projectId,callback){
        conn.find({"_id":ObjectId(projectId)}).toArray((err, docs)=>{
            if(err) callback(err);
            else if(docs.length>0)
            {
                var projectTasks=docs[0].tasks;
                projectTasks.push(task);
                conn.updateOne({"_id":ObjectId(projectId)},{$set:{tasks: projectTasks}},(err,res)=>{
                    if(err) callback(err,null);
                    else callback(null,res);
                })
            }
        })
    }
}
module.exports = TaskController;