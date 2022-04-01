const route = require('express').Router();
const Supply = require('./Supply.js');

route.get('/', async (req,res,next) => {    
  try{
    res.status(200).json(await Supply.listar());
  }catch(error){
    next(error);
    handleError(error);
  }    
});

route.post('/', async (req,res,next) => {
  try{
    const supply = new Supply(req.body);
    await supply.store();
    res.status(201);
    res.end();
  }catch(error){
    next(error);      
    handleError(error);
  }
});

route.get('/:id', async (req,res,next) => {
  try{
    const {id} = req.params;
    const supply = new Supply({id: id});
    res.status(200).json(await supply.show());
  }catch(error){
    next(error);
    handleError(error);
  }
});

route.put('/:id', async (req,res,next) => {
  try{
    const {id} = req.params;
    const data = Object.assign({},req.body,{id:id});
    const supply = new Supply(data);
    await supply.update();
    res.status('200');
    res.end();
  }catch(error){
    next(error);      
    handleError(error);
  }
});

route.delete('/:id', async (req,res,next) => {
  try{
    const supply = new Supply({id:req.params.id});
    await supply.show();
    await supply.delete();
    res.end();
  }catch(error){
    next(error);
    handleError(error);
  }
});

function handleError(error){
   throw new Error(error);
}

module.exports = route;




