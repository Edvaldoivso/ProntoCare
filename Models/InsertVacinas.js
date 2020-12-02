const Sequelize = require("sequelize")
const { DATE } = require("sequelize");
const db = require("./db");





var DadosVacina =  db.sequelize.define('Vacina', { // Este é a forma de montar correta

    Vacina :{
        type:db.Sequelize.STRING,
        field:'vacina'
    },
    Validade:{
        type:db.Sequelize.DATE,
        field:'Date'
    }
    

});



//DadosVacina.sync({force:true}); //Este é o modelo correto do Insert

/*
DadosVacina.create({
    //Exemplo do create  Nome:"Edvaldo",
    Vacina:"HEPATITE",
    Validade:"10-10-2021"

})

*/


module.exports = DadosVacina;
    

