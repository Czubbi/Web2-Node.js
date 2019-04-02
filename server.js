const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@centisoftmongocluster-oqjuq.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

var connect = ()=>{
    return new Promise((resolve,reject)=>{
        client.connect(err => {
            if(err) reject(err);
            else resolve('Connected successfully...');
        });
    })
}

app.get('/api/insertTest',(req,res)=>{
    client.connect(err=>{})
})

app.get('/api',(req,res)=>{
    client.connect(con)
})

app.listen(8000,()=>{
    this.connect().then(x=>{
        console.log(x);
        console.log('Server is listening on port 8000');
    }).catch(err=>{console.log(err)})});
