const NotAccetable = require("../error/NotAccetable");
const Supply = require("./Supply");

class Serializer{    
    
    json (data){
        return JSON.stringify(data);
    }

    checkType (data){
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

module.exports = {
    Serializer: Serializer,    
    acceptHeader: ['application/json']
}