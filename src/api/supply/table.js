const Model = require('./model.js');
 
module.exports = {
    listar(){
        return Model.findAll();
    }
}