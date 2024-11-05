const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// }).listen(3000);

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(port, ()=>{
    console.log(`Server is running successfully on port at - http://${host}:${port}`);
});