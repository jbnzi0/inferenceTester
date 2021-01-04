const express = require('express');
    bodyParser = require('body-parser');
    inference = require('./routers/inference');
    multer = require('multer');
    app = express();
    multerMid = multer({
        storage: multer.memoryStorage(),
        limits: {
          fileSize: 5 * 1024 * 1024, //file no larger than 5mb
        },
    });
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(multerMid.single('file'));
app.use('/inference', inference);



app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

