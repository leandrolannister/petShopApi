const NotAccetable = require("./error/NotAccetable");

class Serializador{

    json (data)
    {
        return JSON.stringify(data);
    }

    serializar (data)
    {
        if (this.contentType == 'application/json')
          return this.json(data);

        throw new NotAccetable(this.contentType);  
    }
}

module.exports = {
    Serializador: Serializador,
    acceptHeader: ['application/json']
}