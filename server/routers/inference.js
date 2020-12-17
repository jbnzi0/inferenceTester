const express = require('express');
    router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.status(201).send('Inference API');
})









module.exports = router;