const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const config = require('./config/default.json');

app.use(bodyParse.json({extends:true}));

app.get('/', (req,res) => {
    res.send('Welcome to NodeJs');
});

app.listen(config.api.port, () => console.log('Server running at 3000'));