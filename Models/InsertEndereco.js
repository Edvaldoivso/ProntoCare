const Sequelize = require("sequelize")
const { DATE } = require("sequelize");
const db = require("./db");





var DadosEndereco =  db.sequelize.define('Endereco', { // Este é a forma de montar correta

    Rua :{
        type:db.Sequelize.STRING,
        field:'Rua'
    },
    Bairro:{
        type:db.Sequelize.STRING,
        field:'Bairro'
    },
    Cidade:{
        type:db.Sequelize.STRING,
        field:'Cidade'
    },
    Cep:{
        type:db.Sequelize.STRING,
        field:'Cep'
    },
    Complemento:{
        type:db.Sequelize.STRING,
        field:'Complemento'
    },
    Numero:{
        type:db.Sequelize.STRING,
        field:'Numero'
    },
    
    

});



DadosEndereco.sync({force:true}); //Este é o modelo correto do Insert

/*
DadosEndereco.create({
    //Exemplo do create  Nome:"Edvaldo",
    Vacina:"BCG",
    Validade:"10-10-2021"



})
*/

module.exports = DadosEndereco;
    

