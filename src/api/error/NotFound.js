class NotFound extends Error{
    constructor(){
        super();
        this.message = 'Not found';
        this.idError = 2;
    }
}

module.exports = NotFound;