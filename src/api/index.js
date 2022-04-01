const app = require('express')();
const bodyParse = require('body-parser');
const supply = require('./supply/route');
const config = require('./config/default.json');
const NotFound = require('./error/NotFound.js')

app.use(bodyParse.json());
app.use('/api/supply', supply);

app.use((error,req,res,next) => {
  (error instanceof NotFound) ? res.status(404) : res.status(400);
  
  res.send(JSON.stringify({'message':error.message,'id':error.idError}));  

});

app.listen(config.api.port, () => console.log('Server running at 3000'));