const {v4: uuid4} = require('uuid');

const users = [
    {
        id: uuid4(),
        name: 'A Rahman',
        email: 'ar@example.com',
        password: '123456'
    },
    {
        id: uuid4(),
        name: 'Abdullah',
        email: 'ab@example.com',
        password: '123456'
    },
    {
        id: uuid4(),
        name: 'Islam Hossain',
        email: 'ih@example.com',
        password: '123456'
    }
];

module.exports = users;
