const express = require('express');
const mongodb = require('mongodb');
const app = express()

// routes

app.get('/', function (req, res) {
    res.send('root layer');
})

app.get('/registration', function (req, res) {
    res.send('layer registration');
})

//подключение к mongoDB
async function start() {
    try{
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/cash-control', {
        useNewUrlParser: true,
        userFindAndModify: false,
    })
    app.listen(8080, function() {
        console.log('server listening at port :8080');
    })
    } catch (e) {
        console.log(e);
    }
}

start()

