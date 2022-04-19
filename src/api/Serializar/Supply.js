const Serializer = require('./Serializer.js').Serializer;

class Supply extends Serializer{
    constructor(contentType, extraFields){
       super();
       this.contentType = contentType;    
       this.publicFields = [
           'id',
           'empresa',
           'categoria'].concat(extraFields || []);    
    }
}
module.exports = Supply;