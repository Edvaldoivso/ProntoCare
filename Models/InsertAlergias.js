const {Module} = require("module");
const Sequelize = require("sequelize");
const { DATE } = require("sequelize");
const db = require("./db");

var DadosAlergia = db.sequelize.define('alergias',{


    id:{
        type:db.Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    
    },

    NomeAlergia:{
        type:db.Sequelize.STRING,
        field:'NomeAlergia'
    },
    
    Descricao:{
        type:db.Sequelize.STRING,
        field:'Descricao'
    },
    Homologador:{
        type:db.Sequelize.STRING,
        field:'Homologador'
    },
    DataInclusao:{
        type:db.Sequelize.DATEONLY,
        field:'DataInclusao'
    }

    

})

   


//DadosAlergia.sync({force:true})

/*

DadosAlergia.create({

    NomeAlergia:"Camarão",
    Descricao:"Alergia a camarão",
    Homologador:"DRº Vanut",
    DataInclusao:"2020-10-05",

})
*/


module.exports = DadosAlergia;

