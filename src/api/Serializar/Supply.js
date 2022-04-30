const Serializer = require('./Serializer.js').Serializer;

class Supply extends Serializer{
    constructor(contentType, extraFields){
       super();
       this.contentType = contentType;    
       this.publicFields = [
           'id',
           'empresa',
           'categoria'].concat(extraFields || []);   
       this.tagSingle = "supply";
       this.tagPlurol = "supplies";     
    }
}
module.exports = Supply;