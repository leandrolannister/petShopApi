const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const config = require('./config/default.json');

app.use(bodyParse.json({extends:true}));

const fornecedor = require('../api/rotas/fornecedores');
app.use('/api/fornecedores', fornecedor);


app.listen(config.api.port, () => console.log('Server running at 3000'));