const express = require('express');
const route = express.Router(); 
const db = require('../model/model_widgets.js'); 
 
route.get('/', (req, res, next)=> {
    db.findAll((err, data)=>{
        if(err) return res.send('Error all widget!');
        res.render('all', {
            title:"All Widgets",
            route_url:"/widgets",
            arrData:data
        });
    });
}); 

route.get('/add', (req, res, next)=>{
    res.render('add', {
        title:"New Widget",
        route_url:"/widgets"
    });
}); 
 
route.post('/add', (req, res, next)=>{
    db.add(req.body, (err, data)=>{
        if(err) return res.send('Error add widget!'); 
        res.redirect('/widgets/');
    });
}); 
 
route.get('/delete/:id', (req, res, next)=>{
    db.find(parseInt(req.params.id), (err, data)=>{
        if (err || !data) return res.send('Error delete widget!');
        res.render('delete', {
            title:"Delete widget",
            route_url:"/widgets",
            data:data
        });
    });
}); 
 
route.post('/delete/:id', (req, res, next)=>{
    db.delete(parseInt(req.params.id), (err, data)=>{
        if (err || !data) return res.send('Error delete widget!');
        res.redirect('/widgets/');
    });
}); 

//Задача №2
route.get('/modify/:id', (req, res, next)=>{
    db.find(parseInt(req.params.id), (err, data)=>{
        if (err || !data) return res.send('Error modify widget!');
        res.render('modify', {
            title:"Modify widget",
            route_url:"/widgets",
            data:data
        });
    });
});

route.post('/modify/:id', (req, res, next)=>{
    let dataParam = {
        id: parseInt(req.params.id),
        data: req.body
    }
    db.modify(dataParam, (err, data)=>{
        if(err) return res.send(err); 
        res.redirect('/widgets/');
    });
}); 
 
module.exports = route; 