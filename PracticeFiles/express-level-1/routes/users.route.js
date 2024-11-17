const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Login');
});
router.get('/register', (req, res) => {
    // res.send('Hi I am Register');
    res.status(200).json({
        data:[],
        message: 'Success !',
        status: 200
    });
    // res.redirect('/api/user/login');
    // res.sendFile(__dirname + '/views/login.html');
});

module.exports = router;