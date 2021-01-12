const express = require('express');
const { setTimeout } = require('timers');
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
router.post('/test', async (req, res) => {
    var images = req.files; //image send base64
        algo = req.body.algorithm;

    if(!['yolo', 'efficientdet', 'ssd', 'frcnn'].includes(algo))
        res.status(500).send('Non existing algorithm');
    else {

        for(var i=0; i<images.length; i++){

            console.log(images[i].originalname);
            var pic = "deepnet/IMG/" + images[i].originalname;
            await fs.writeFile(pic, images[i].buffer, (err) => {
                if(err) console.error("Error on file creation");
            });
        }
        
        result = lib.inference(algo);
        res.status(201).send(result);
        
        
    }

});

router.get('/rmdir', async (req, res) => {
    
    var error = false
    fs.rmdir('/Users/golfdivine/Desktop/CS/ESIEA/2020-2021/PFE/inferenceTester/client/src/InferenceResults/results', {recursive: true}, (err) => {
        if(err)
            error = true
        fs.unlink('/Users/golfdivine/Desktop/CS/ESIEA/2020-2021/PFE/inferenceTester/client/src/InferenceResults/itworks.txt', (err) => {
            if(err && error){
                console.log("File doesn't exist");
                res.status(500).send("Deletion error");
            }
            res.status(201).send("Deleted");
        });
    });

});


module.exports = router;