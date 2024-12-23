// creating server 
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT;
const HOST = process.env.HOST;


const handleread = (fileName, statusCode, req, res) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}

const server = http.createServer((req, res) => {
    // res.end('Welcome to Server');
    // get routing 
    if (req.url === '/') {
        handleread('./views/index.html', 200, req, res);
    }else if(req.url === '/contact'){
        handleread('./views/contact.html', 200, req, res);
    }else if(req.url === '/about'){
        handleread('./views/about.html', 200, req, res);
    }else{
        handleread('./views/404.html', 404, req, res);
    }
});

server.listen(PORT, ()=>{
    console.log(`Server is running successfully on port at - http://${HOST}:${PORT}`);
});
