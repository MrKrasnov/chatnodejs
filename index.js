const express = require('express');

const app = express()

app.get('/', function (req, res) {
    res.send('root layer');
})

app.listen(8080, function() {
    console.log('server listening at port :8080');
})