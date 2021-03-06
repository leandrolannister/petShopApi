const app = require('express')();
const bodyParse = require('body-parser');
const supply = require('./supply/route');
const config = require('./config/default.json');
const NotFound = require('./error/NotFound.js');
const WrongFields = require('./error/WrongFields');
const NotAccetable = require('./error/NotAccetable');
const acceptHeader = require('./Serializar/Serializer').acceptHeader;
const SerializerError = require('./Serializar/Serializer').SerializerError;

app.use(bodyParse.json());

app.use((req,res,next) => {
  let header = req.header('Accept');
  
  if (header == '*/*')
     header = 'application/json';
  
  if (acceptHeader.indexOf(header) == -1)
    throw new NotAccetable(`Tipo ${header} não permitido`);      
 
  res.setHeader('Content-Type', header);
  next();
});

app.use('/api/supply', supply);

app.use((error,req,res,next) => {
  let status = 500;

  if (error instanceof WrongFields)
    status = 400;
  
  if (error instanceof NotFound) 
    status = 404;  

  if (error instanceof NotAccetable)
    status = 406;

  const serializer = new SerializerError(
    req.header('Content-type')
  );  
    
  res.status(status);
  res.send(
    serializer.serialize({'message':error.message,'id':error.idError})
  );  

});

app.listen(config.api.port, () => console.log('Server running at 3000'));