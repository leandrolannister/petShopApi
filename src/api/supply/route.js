const route = require('express').Router();
const table = require('./table.js');
const Supply = require('./Supply.js');

route.get('/', async (req,res) => {
    const result = await table.listar();
    try{
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error);
    }    
});

route.post('/', async (req,res) => {
   const supply = new Supply(req.body);
   
   try{
       await supply.store();
       res.status(200).json('success');
   }catch(error){
       res.status(201).json(`Error:${error}`);
   }

});

module.exports = route;




