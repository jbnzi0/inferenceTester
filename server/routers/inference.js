const express = require('express');
const lib = require('../config/lib');
    fs = require('fs');
    router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.post('/', (req, res) => {
    res.status(201).send('Inference API');
})

//must return images, algorithm performance
router.get('/test', async (req, res) => {
    var images = req.file; //image send base64
        algo = req.body.algorithm;

    console.log(images);
    if(!['yolo', 'efficientdet', 'ssd', 'frcnn'].includes(algo))
        res.status(500).send('Non existing algorithm');
    else {
        //save files in deepnet/IMG/
        //loop if array
        var pic = "deepnet/IMG/" + images.originalname;
        console.log(pic);
        await fs.writeFile(pic, images.buffer, (err) => {
            if(err) console.error("Error on file creation");
        });
        result = lib.inference(algo);
        res.status(201).send(result);
    }
    
    
    
    //Decode images in Base64 and save it in a folder
    //Execute each algorithm 
    //
});


module.exports = router;