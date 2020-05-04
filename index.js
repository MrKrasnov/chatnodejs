const express = require('express');
const mongodb = require('mongodb');
const path = require('path');
const app = express();
const todoRoutes = require('./routes/todos');

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(todoRoutes);

//подключение к mongoDB
async function start() {
    try{
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://Admin:zet5Yanki@cluster0-hap6z.mongodb.net/todos', {
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

