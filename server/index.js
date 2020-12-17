const express = require('express');
    app = express();
const bodyParser = require('body-parser');
    inference = require('./routers/inference');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/inference', inference);

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});

