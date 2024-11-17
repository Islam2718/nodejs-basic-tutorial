const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = 3000;
const HOST = 'localhost';

app.get('/', (req, res) => {
    // res.send('<h1>:) Welcome to Home</h1>');
    
    // // receive by query params 
    // const name = req.query.name;
    // const email = req.query.email;
    // res.send(`Welcome ${name} your email is ${email}`);

    // // receive by body params
    // const name = req.body.name;
    // const email = req.body.email;
    // res.send(`Welcome ${name} your email is ${email}`);

    // // route parameter 
    // const name = req.params.name;
    // const email = req.params.email;
    // res.send(`Welcome ${name} your email is ${email}`);

    // header 
    const name = req.headers.name;
    const email = req.headers.email;
    res.send(`Welcome ${name} your email is ${email}`);
})

app.post('/user', (req, res) => {
    // receive json data 
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Welcome ${name} your email is ${email}`);
})

app.listen(PORT, () => {
    console.log(`Server is running successfully on port at - http://${HOST}:${PORT}`);
});