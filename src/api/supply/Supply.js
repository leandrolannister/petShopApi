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
       this.checkFields();
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

   static async listar(){
       return await table.listar();
   }

   async show(){
       const supply = await table.show(this.id);
       this.empresa = supply.empresa;
       this.email = supply.email;
       this.categoria = supply.categoria;
       this.dataCriacao = supply.dataCriacao;
       this.dataAtualizacao = supply.dataAtualizacao;
       this.versao = supply.versao;
       
       return supply;
   }

   async update(){
       await table.show(this.id);
       const fields = ['empresa','email','categoria'];
       const data = {};

       for(let row in fields){
           const value = this[fields[row]];

           if (typeof value === 'string' && value.length > 0){
               data[fields[row]] = value;
           }
       }

       if (Object.keys(data).length === 0)
         throw new Error('Obejct is empty');

       await table.update(this.id,data);       
   }

   async delete(){
       return await table.destroy(this.id);
   }

   checkFields(){
     const fields = ['empresa','email','categoria'];
     
     for (let i in fields){
       let value = this[fields[i]];
       if (typeof value != 'string' || value.length <= 0){            
         let message = `O campo ${fields[i]} não possui valor`;  
         throw new Error(message);
       }
     }
    }
    
}

module.exports = Supply;