class WrongFields extends Error{
    constructor(msg){
        super();
        this.message = msg;
        this.idError = 1;
    }
}
module.exports = WrongFields;