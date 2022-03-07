const Model = require('./Model.js');
 
module.exports = {
    listar(){
        return Model.findAll();
    }
}