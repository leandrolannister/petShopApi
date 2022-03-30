const app = require('express')();
const bodyParse = require('body-parser');
const supply = require('./supply/route');
const config = require('./config/default.json');
const NaoEncontrado = require('./config/NaoEncontrado.js');

app.use(bodyParse.json());
app.use('/api/supply', supply);

app.use((error,req,res,next) => {
  (error instanceof NaoEncontrado) ? res.status(404) : res.status(400);
  
  res.send(JSON.stringify({'message':error.message,'id':error.idErro}));
  handleError(error);    

});

app.listen(config.api.port, () => console.log('Server running at 3000'));