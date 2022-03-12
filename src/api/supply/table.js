const Model = require('./model.js');
 
module.exports = {
    listar(){
        return Model.findAll();
    },
    store(data){
        return Model.create(data);
    },
    async show(id){
       const supply = await Model.findOne({
          where:{
              id:id
          } 
       });
       
       if (!supply)
         throw new Error('Supply was not found');

       return supply;  
    }
}