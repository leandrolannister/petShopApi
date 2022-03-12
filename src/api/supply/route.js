const route = require('express').Router();
const Supply = require('./Supply.js');

route.get('/', async (req,res) => {    
    try{
        const supplies = await Supply.listar();
        res.status(200).json({'data':supplies,'status':200});
    }catch(error){
        res.status(200).json({'message':'not content','status':201});
        handleError(error);
    }    
});

route.post('/', async (req,res) => {
   try{
       const supply = new Supply(req.body);
       await supply.store();
       res.status(200).json({'message':'Record successfully','status':200});
   }catch(error){
       res.status(200).json({'message':'not content','status':201});
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
        res.status(201).json({'message': error.message});
        handleError(error);
    }

});

function handleError(error){
    throw new Error(error);
}

module.exports = route;




