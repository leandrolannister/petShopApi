const NotAccetable = require("../error/NotAccetable");

class Serializer{    
    json (data){
        return JSON.stringify(data);
    }

    checkType (data){
       if (this.contentType == 'application/json')
          return this.json(data);

       throw new NotAccetable("content-type must be like application/json");  
    }
}

module.exports = {
    Serializer: Serializer,    
    acceptHeader: ['application/json']
}