var dbConnection = require('../../db/connection.js');
var conn={};

class CustomerController
{
    constructor(){
        dbConnection.connectToDb('Customer',()=>{
            conn = dbConnection.get();
        })
    }
    getCustomers(callback){
        conn.find({}).toArray((err,docs)=>{
            if(err) callback(error,null);
            else callback(null,docs);
        })
    }
    getCustomerByName(name,callback){
        conn.find({"name":{'$regex': name}}).toArray((err,docs)=>{
            if(err) callback(error,null);
            else callback(null,docs);
        })
    }
    insertCustomer(customer,callback){
        conn.insertOne(customer,(err,result)=>{
            if(err) callback(err,null);
            else{
                callback(null,result);
            }
        })
    }
}
module.exports = CustomerController;