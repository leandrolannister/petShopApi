const routes = require('express').Router();
const supply = require('./table.js');

routes.get('/', async (req,res) => {
    const result = await supply.listar();
    try{
        res.status(200).json(result);
    }catch(error){
        res.status(400).json(error);
    }    
});

module.exports = routes;




