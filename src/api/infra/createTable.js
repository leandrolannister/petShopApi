const Model = require('../rotas/fornecedores/Model.js');

Model.sync()
.then(() => console.log('Table was created successfully'))
.catch((error) => console.log(error));

