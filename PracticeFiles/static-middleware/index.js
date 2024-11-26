// creating server 
const express = require('express');
const http = require('http');
const fs = require('fs');

const PORT = 3000;
const HOST = 'localhost';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running successfully on port at - http://${HOST}:${PORT}`);
});