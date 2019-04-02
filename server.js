const express=require('express');
const app=express();
var customerCtr = require('./customer/controllers/customerController.js');
var myCustomerCtr = new customerCtr();

app.get('/api/insertCustomer',(req,res)=>{
    myCustomerCtr.insertCustomer({name:"Fucker", salary:"a lot", sex:"yes"},(err,result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})
app.get('/api/getCustomers',(req,res)=>{
    myCustomerCtr.getCustomers((error,docs)=>{
        if(error) res.json(error);
        else res.json(docs);
    })
})

app.get('/api/getCustomer/:name',(req,res)=>{
    console.log(req.params.name);
    myCustomerCtr.getCustomerByName(req.params.name,(error,docs)=>{
        if(error) res.json(error);
        else res.json(docs);
    })
})

app.get('/api/modifyTest',(req,res)=>{
    client.db('CentiSoft').collection('Customer').updateOne({}).toArray((err, docs)=>{
        if (err) res.json(err);
        else {
            res.json(docs);
        }
    })
})

app.get('/api/deleteTest',(req,res)=>{
    //var o_id = new mongo.ObjectID(theidID);
    //collection.update({'_id': o_id});
    client.db('CentiSoft').collection('Customer').deleteOne({}).toArray((err, docs)=>{
        if (err) res.json(err);
        else {
            res.json(docs);
        }
    })
})

app.listen(8000,()=>{
    console.log('Server started on localhost:8000');
})
