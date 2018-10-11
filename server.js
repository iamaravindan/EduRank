const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mjs = require('mongojs')

const db = mjs('edurank',['students','questionsp']);

const app =express();
//Port and Host variables
const port = 3000;
const host = 'localhost';

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
///////////////////////////////////////////

//View Engine Setup
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/setup',function(req,res){
    res.sendFile(path.join(__dirname,'/views/setup.html'));
});

app.get('/analyse',function(req,res){
    res.render('analyse');
});

app.get('/student',function(req,res){
    res.sendFile(path.join(__dirname,'/views/student.html'));
});

app.get('/student/theory',function(req,res){
    db.questionst.find({},function(err,docs){
        if(err)
        {
            console.log(err);
        }
        res.render('studenttheory',{quet : docs});
    });
});

app.get('/student/lab',function(req,res){
    db.questionsl.find({},function(err,docs){
        if(err)
        {
            console.log(err);
        }
        res.render('studentlab',{quet : docs});
    });
});

app.get('/student/project',function(req,res){
    db.questionsp.find({},function(err,docs){
        if(err)
        {
            console.log(err);
        }
        res.render('studentproject',{quet : docs});
    });
});


//////Theory
app.post('/questions/theory',function(req,res){
    var obj = {
        'question' : req.body.question,
        'a': req.body.a,
        'b': req.body.b,
        'c': req.body.c,
        'd': req.body.d,
    };
    
    db.questionst.insert(obj,function(err){
        if(err)
        {
            console.log(err);
        }
    });

    res.status(200);
    res.redirect(301,'/setup');
    
});

//////Lab
app.post('/questions/lab',function(req,res){
    var obj = {
        'question' : req.body.question,
        'a': req.body.a,
        'b': req.body.b,
        'c': req.body.c,
        'd': req.body.d,
    };
    
    db.questionsl.insert(obj,function(err){
        if(err)
        {
            console.log(err);
        }
    });

    res.redirect(301,'/setup');
});


//////Project
app.post('/questions/project',function(req,res){
    var obj = {
        'question' : req.body.question,
        'a': req.body.a,
        'b': req.body.b,
        'c': req.body.c,
        'd': req.body.d,
    };
    
    db.questionsp.insert(obj,function(err){
        if(err)
        {
            console.log(err);
        }
    });

    res.redirect(301,'/setup');
});

app.post('/ratings/theory',function(req,res){
    db.ratingst.insert(req.body,function(err){
        if(err)
        {
            console.log(err);
        }
    });
    res.redirect(301,'/student/lab');
});

app.post('/ratings/lab',function(req,res){
    db.ratingsl.insert(req.body,function(err){
        if(err)
        {
            console.log(err);
        }
    });
    res.redirect(301,'/student/project');
});

app.post('/ratings/project',function(req,res){
    db.ratingsp.insert(req.body,function(err){
        if(err)
        {
            console.log(err);
        }
    });
    res.redirect(301,'/student/success');
});

//Server Startup
app.listen(port,function(){
    console.log('EduRank Server started at ' + port + ' at ' + Date());
});

