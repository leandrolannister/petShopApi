const NotAccetable = require("../error/NotAccetable");

class Serializer{
    constructor(contentType){
        this.contentType = contentType;
    }

    json (data){
        return JSON.stringify(data);
    }

    checkType (data){
        if (this.contentType == 'application/json')
          return this.json(data);

        throw new NotAccetable(this.contentType);  
    }
}

module.exports = {
    Serializer: Serializer,    
    acceptHeader: ['application/json']
}