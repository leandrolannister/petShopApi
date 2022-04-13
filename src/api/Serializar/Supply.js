const Serializer = require('./Serializer.js').Serializer;

class Supply extends Serializer{
    constructor(contentType){
       super();
       this.contentType = contentType;    
       this.publicFields = ['id','empresa','categoria'];    
    }
}
module.exports = Supply;