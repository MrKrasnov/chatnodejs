const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/index.html');
}) 

module.exports = router