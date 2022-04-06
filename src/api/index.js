const app = require('express')();
const bodyParse = require('body-parser');
const supply = require('./supply/route');
const config = require('./config/default.json');
const NotFound = require('./error/NotFound.js');
const WrongFields = require('./error/WrongFields');
const NotAccetable = require('./error/NotAccetable');

app.use(bodyParse.json());
app.use('/api/supply', supply);

app.use((error,req,res,next) => {
  let status = 500;

  if (error instanceof WrongFields)
    status = 400;
  
  if (error instanceof NotFound) 
    status = 404;  

  if (error instanceof NotAccetable)
    status = 406;
    
  res.status(status);
  res.send(JSON.stringify({'message':error.message,'id':error.idError}));  

});

app.listen(config.api.port, () => console.log('Server running at 3000'));