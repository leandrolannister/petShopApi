const app = require('express')();
const bodyParse = require('body-parser');
const supply = require('./supply/route');
const config = require('./config/default.json');

app.use(bodyParse.json());
app.use('/api/supply', supply);

app.listen(config.api.port, () => console.log('Server running at 3000'));