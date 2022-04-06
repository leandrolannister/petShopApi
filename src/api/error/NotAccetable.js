class NotAccetable extends Error{
    constructor(contentType){
        super();
        this.message = `Tipo ${contentType} não é permitido`;
        this.idError = 3;
    }
}
module.exports = NotAccetable;