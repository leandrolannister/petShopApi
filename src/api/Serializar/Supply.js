const Serializer = require('./Serializer.js').Serializer;

class Supply extends Serializer{
    constructor(contentType){
       super();
       this.contentType = contentType;        
    }
}
module.exports = Supply;