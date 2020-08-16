const http = require("http");
const fs = require("fs");
const server = new http.Server();
//сделаем регулярку фильтр для определения типа url
let regPNG = new RegExp('.*png', 'ig');
server.on('request', (request, resultat)=> {
    //Делаем возврат картинки по запросу
    if(regPNG.test(request.url)) {
        fs.readFile(__dirname + request.url, function(err, file) {
            resultat.writeHead(200, {'Content-Type': 'image/png'});
            resultat.end(file);
        });
    }
    //попытка загрузить стартовую страницу
    if(request.url=='/') {
        fs.readFile('index.html', (err, Data)=> {
            if(err) {
                fs.readFile('404.html', (err404, page404) => {
                    resultat.write(page404);
                    resultat.end();
                });
            } else {
                resultat.write(Data);
                resultat.end();
            }
        });
    };
    
});
server.listen(8080);