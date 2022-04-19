const NotAccetable = require("../error/NotAccetable");
const Supply = require("./Supply");

class Serializer{    
    
    json (data){
        return JSON.stringify(data);
    }

    serialize (data){
       if (this.contentType == 'application/json')
          return this.json(
             this.filter(data)
          );

       throw new NotAccetable("content-type must be like application/json");  
    }

    filterObject (data){   
       const newData = {};
       
       this.publicFields.forEach((field) => {                    
          if (data.hasOwnProperty(field))
             newData[field] = data[field];
       });       
       return newData;
    }

    filter (data){
        if (Array.isArray(data)){
            data = data.map(items => {
                return this.filterObject(items);
            });
        }else{
            data = this.filterObject(data);
        }
        return data;
    }
}

class SerializerError extends Serializer{
    constructor(contentType, extraFields){
       super();
       this.contentType = contentType;    
       this.publicFields = [
           'id',
           'message'].concat(extraFields || []);    
    }
}

module.exports = {
    Serializer: Serializer,    
    SerializerError:SerializerError,
    acceptHeader: ['application/json']
}