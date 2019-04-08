const express=require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var customerCtr = require('./customer/controllers/customerController.js');
var myCustomerCtr = new customerCtr();
var developerCtr = require('./developers/controllers/developerController.js')
var myDeveloperCtr = new developerCtr();
var projectCtr = require('./project/controllers/projectController.js');
var myProjectCtr = new projectCtr();
var taskController = require('./Task/controllers/taskController.js');
var myTaskCtr = new taskController();
const swaggerTools = require('swagger-tools');
const yaml = require('yamljs');
const swqggerDoc = yaml.load('openApi.yaml')

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
          // Serve the Swagger documents and Swagger UI
         app.use(middleware.swaggerUi());
    });


app.post('/api/insertCustomer',(req,res)=>{
    console.log(req.body);
    myCustomerCtr.insertCustomer({name: req.body.name, address:req.body.address, city:req.body.city , zip:req.body.zip , phone: req.body.phone, email: req.body.email},(err,result)=>{
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

app.get('/api/getDevelopers', (req, res)=>{
    myDeveloperCtr.getDevelopers((err, docs)=>{
        if(err) res.json(err);
        else res.json(docs);
    })
})

app.get('/api/insertDeveloper', (req, res)=>{
    myDeveloperCtr.insertDeveloper({name:"Developer 1", salary:"50000 DKK", sex:"sure"}, (err, result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})

app.get('/api/getDeveloper/:name', (req, res)=>{
    myDeveloperCtr.getDeveloperByName(req.params.name, (err, docs)=>{
        if(err) res.json(err);
        else res.json(docs);
    })
})

app.get('/api/getProjects', (req, res)=>{
    myProjectCtr.getProjects((err, docs)=>{
        if(err) res.json(err);
        else res.json(docs)
    })
})

app.get('/api/getProject/:name', (req, res)=>{
    myProjectCtr.getProjectByName(req.params.name, (err, docs)=>{
        if(err) res.json(err);
        else res.json(docs);
    })
})

app.get('/api/getProject/:_id', (req, res)=>{
    myProjectCtr.getProjectByName(req.params._id, (err, docs)=>{
        if(err) res.json(err);
        else res.json(docs);
    })
})

app.get('/api/getTasks/:_id', (req, res)=>{
    myTaskCtr.getTasks(req.params._id, (err, docs)=>{
        if(err) res.json(err);
        else res.json(docs);
    })
})
app.get('/api/insertTask/:projectId',(req,res)=>{
    myTaskCtr.addTaskToProject({name:"Task1",length:6},req.params.projectId,(err,result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})
app.get('/api/insertProject', (req, res)=>{
    myProjectCtr.insertProject({name: "Test", importance: "medium", time: "3 days"}, (err,result)=>{
        if(err) res.json(err);
        else res.json(result);
    })
})

app.post('/api/deleteCustomer/:id',(req,res)=>{
    //var o_id = new mongo.ObjectID(theidID);
    //collection.update({'_id': o_id});
    myCustomerCtr.deleteCustomer(req.params.id, (err, result)=>{
        if(err) res.json(err);
        else res.json(result)
    })
})


app.listen(8000,()=>{
    console.log('Server started on localhost:8000');
})
