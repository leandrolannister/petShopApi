const route = require('express').Router();
const Supply = require('./Supply.js');

route.get('/', async (req,res) => {    
    try{
        const supplies = await Supply.listar();
        res.status(200).json({'data':supplies,'status':200});
    }catch(error){
        res.status(204).json({'message':'not content','status':204});
        handleError(error);
    }    
});

route.post('/', async (req,res) => {
   try{
       const supply = new Supply(req.body);
       await supply.store();
       res.status(201).json({'message':'Created','status':201});
   }catch(error){
       res.status(204).json({'message':'not content','status':204});
       handleError(error);
   }
});

route.get('/:id', async (req,res) => {
    try{
       const {id} = req.params;
       const supply = new Supply({id: id});
       const data = await supply.show();

       res.status(200).json({
          'data':data,
          'status':"200"
       });

    }catch(error){
        res.status(404).json({'message': error.message});
        handleError(error);
    }
});

route.put('/:id', async (req,res) => {
    try{
      const {id} = req.params;
      const data = Object.assign({},req.body,{id:id});
      const supply = new Supply(data);
      await supply.update();
      res.end();
    }catch(error){
      res.status(204).json({'status':'not content','message':error});
      handleError(error);    
    }
});

route.delete('/:id', async (req,res) => {
    try{
        const supply = new Supply({id:req.params.id});
        await supply.show();
        await supply.delete();
        res.end();
    }catch(error){
        res.json({'status':404, 'message':error.message});       
        handleError(error);
    }
});

function handleError(error){
    throw new Error(error);
}

module.exports = route;




