const Sequelize = require('sequelize');
const instancy = require('../../infra/instancy.js');

const columns = {
    empresa:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria:{
        type: Sequelize.ENUM('Ração', 'Brinquedos'),
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancy.define('fornecedor',columns,options);