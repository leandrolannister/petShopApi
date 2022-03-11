const table = require('./table.js');

class Supply {
   constructor({id,empresa,email,categoria,dataCriacao,dataAtualizacao,versao}){
       this.id = id;
       this.empresa = empresa,
       this.email = email,
       this.categoria = categoria
       this.dataCriacao = dataCriacao,
       this.dataAtualizacao = dataAtualizacao,
       this.versao = versao
   }

   async store(){
       const store = await table.store({
           empresa: this.empresa,
           email: this.email,
           categoria: this.categoria
       });

       this.id = store.id;
       this.dataCriacao = store.dataCriacao;
       this.dataAtualizacao = store.dataAtualizacao;
       this.versao = store.versao;      
   }
}

module.exports = Supply;