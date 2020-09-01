const http = require('http');
const fs = require('fs');
const url = require('url'); 
function renderUsersData(data) {
    let users = JSON.parse(data);
    let usersList = `<p class="w-100 h3">Список получен по кнопке USERS</p><h<ul class=''>`;
    for(let i=0; i<users.length; i++) {
        let user = users[i];
        usersList += `<li class="d-flex flex-row mt-1">
            <div class="col-4"><img class="w-100 h-auto" src="https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png"></div>
            <div class="col-8 d-flex flex-column">
                <p class='h3'>${user.name}</p>
                <p class='h4'>Логин: ${user.login}</p>
            </div>
        </li>`;    
    }
    usersList +='</ul>';
    return usersList;
}
function renderProductsData(data, showall) {
    let products = JSON.parse(data);
    let productsList = `<p class="w-100 h3">Список получен по кнопке PRODUCTS</p><h<ul class=''>`;
    let length = (showall) ? products.length : 4; 
    for(let i=0; i<length; i++) {
        let product = products[i];
        productsList += `<li class="d-flex flex-row mt-1">
            <div class="col-4"><img class="w-100 h-auto" src="https://w7.pngwing.com/pngs/998/24/png-transparent-computer-icons-goods-others-miscellaneous-angle-logo.png"></div>
            <div class="col-8 d-flex flex-column">
                <p class='h3'>${product.name}</p>
                <p class='h4'>Логин: ${product.login}</p>
            </div>
        </li>`;    
    }
    productsList +='</ul>';
    if(!showall) {
        productsList +=`<div><button type="button" class="btn btn-dark mx-1" onclick="getDataProducts('products', true )">Показать все</button> <div>`;
    }
    return productsList;
}
function camel_to_snake(name) {
    return name.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}
function snake_to_camel(name) {
    return name.replace(/(^\w)|(_\w)/g, function(m){
        console.log(m);
        return (m.length==1) ? m[0].toUpperCase() : m[1].toUpperCase();
    });
}

http.createServer((request, response) => {
    let err404 = `<h1>Content not found</h1>`;
    console.log('request: ' + request.url);
    let pathData = url.parse(request.url, true);
    if(pathData.pathname=='/scripts.js') {
        fs.readFile('./scripts.js','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(data);
                response.end();
                return; 
            }   
        });
    }
    if(pathData.pathname=='/') {
        fs.readFile('./index.html','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(data);
                response.end();
                return; 
            }   
        });
    }
    if(pathData.pathname=='/ajax') {
        fs.readFile('./ajax.html','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(data);
                response.end();
                return; 
            }   
        });
    }
    if(pathData.pathname=='/users') {
        fs.readFile('./users.json','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(renderUsersData(data));
                response.end();
                return; 
            }   
        });
    }
    if(pathData.pathname=='/products') {
        let showall = (pathData.query['showall']==undefined) ? false : pathData.query['showall'];
        fs.readFile('./products.json','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(renderProductsData(data, showall));
                response.end();
                return; 
            }   
        });
    }
    
    if(pathData.pathname=='/nameconvert') {
        fs.readFile('./nameconvert.html','utf8', (err, data) => {
            response.statusCode = 200;
            if(err) {
                response.write(err404);
                response.end();
                return;    
            } else {
                response.write(data);
                response.end();
                return; 
            }   
        });
    }
    if(pathData.pathname=='/camel_to_snake'||pathData.pathname=='/snake_to_camel') {
        let name = pathData.query['name'];
        let newname = '';
        if(pathData.pathname=='/camel_to_snake') {
            newname = camel_to_snake(name); 
        } else {
            newname = snake_to_camel(name);    
        }
        response.write(`<p>${name} -> ${newname}</p>`);
        response.end();
        return;
    }
   
}).listen(8080, ()=>{
    console.log('Server run in 8080 port!');
}); 