class NotFound extends Error{
    constructor(){
        super();
        this.message = 'Not found';
        this.idError = 0;
    }
}

module.exports = NotFound;