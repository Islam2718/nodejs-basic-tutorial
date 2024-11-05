const fs = require('fs');

// creating file 
fs.writeFile('testfile.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created successfully');
    }
})

// writing to file 
fs.appendFile('testfile.txt', ' My created file updated', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created successfully');
    }
})

// reading file
fs.readFile('testfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
//rename file
fs.rename('testfile.txt', 'testfile2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created successfully');
    }
})

// delete file
fs.unlink('testfile2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created successfully');
    }
})

// all are the syncronous operations if you want to use asyncronous operations then use fs module without callback function. 
