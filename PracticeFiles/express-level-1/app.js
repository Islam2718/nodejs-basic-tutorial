const express = require('express');
const app = express();

const userRouter = require('./routes/users.route');

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('<h1>:) Welcome to Home</h1>');
})

app.use((req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;