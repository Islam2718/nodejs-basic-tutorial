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
        name: req.body.username,
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
    // console.log('UID: '+userid);
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

// get by id 
const getUserById = (req, res) => {
    const userId = Number(req.params.id); // Convert userId to a number
    const user = users.find(user => user.id === userId); // Match based on type and value

    if (!user) {
        return res.status(404).json({
            message: 'User not found!',
            status: 404,
        });
    }

    res.status(200).json({
        message: 'Success!',
        status: 200,
        data: user,
    });
};

// delete 
const deleteUserById = (req, res) => {
    const userId = Number(req.params.id); // Convert userId to a number
    const userIndex = users.findIndex(user => user.id === userId); // Match based on type and value

    if (userIndex === -1) {
        return res.status(404).json({
            message: 'User not found!',
            status: 404,
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.status(200).json({
        message: 'Success!',
        status: 200,
        data: deletedUser,
    });
};


module.exports = { getAllUsers, createUser, updateUser, getUserById, deleteUserById };