const app = require('./app');

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
    console.log(`Server is running successfully on port at - http://${HOST}:${PORT}`);
});