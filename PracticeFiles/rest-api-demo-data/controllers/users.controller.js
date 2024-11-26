const users = require('../models/users.model');

const getAllUsers = (req, res) => {
    res.status(200).json({
        data: users,
        message: 'Success !',
        status: 200
    });
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    users.push(newUser);

    res.status(201).json({
        data: newUser,
        message: 'Success !',
        status: 201
    });
};

const updateUser = (req, res) => {
    const userid = req.params.id;
    const { username, email, password } = req.body;
    users
        .filter((user) => user.id === userid)
        .map(selecteduser => {
            selecteduser.username = username;
            selecteduser.email = email;
            selecteduser.password = password;
        });
    const updatedUser = users.find(user => user.id === userId);
    res.status(200).json({
        data: updatedUser,
        message: 'Success !',
        status: 200
    });
};

module.exports = { getAllUsers, createUser, updateUser };