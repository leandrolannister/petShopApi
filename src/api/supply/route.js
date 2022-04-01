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

route.post('/', async (req,res) => {
   try{
       const supply = new Supply(req.body);
       await supply.store();
       res.status(201).json({'message':'Created','status':201});
   }catch(error){
      res.send(
         JSON.stringify({'status':204,message:error.message})
      );       
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
        res.send(
            JSON.stringify({'error':error.message})
        );
        handleError(error);
    }
});

route.put('/:id', async (req,res, next) => {
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

route.delete('/:id', async (req,res) => {
    try{
      const supply = new Supply({id:req.params.id});
      await supply.show();
      await supply.delete();
      res.end();
    }catch(error){
      res.send(
        JSON.stringify({'error':error.message})
      );      
      handleError(error);
    }
});

function handleError(error){
    throw new Error(error);
}

module.exports = route;




