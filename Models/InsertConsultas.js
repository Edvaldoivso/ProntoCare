const { Module } = require("module");
const Sequelize = require("sequelize")
const { DATE } = require("sequelize");
const db = require("./db");

var DadosConsulta = db.sequelize.define('Consultas',{

Consulta:{
    type:db.Sequelize.STRING,
    field:'Consultas'
},
Data:{
    type:db.Sequelize.DATEONLY,
    field:'Data'
},
Especialidade:{
type:db.Sequelize.STRING,
field:'Especialidade'

},
Medico:{
type:db.Sequelize.STRING,
field:'Medico'
},
NomeHospital:{
    type:db.Sequelize.STRING,
    field:'NomeHospital'
},

RuaHospital:{
    type:db.Sequelize.STRING,
    field:'RuaHospital'
},

NumeroHospital:{
    type:db.Sequelize.STRING,
    field:'NumeroHospital'
},

BairroHospital:{
    type:db.Sequelize.STRING,
    field:'BairroHospital'
},

CepHospital:{
    type:db.Sequelize.STRING,
    field:'CepHospital'
},

TelefoneHospital:{
    type:db.Sequelize.STRING,
    field:'TelefoneHospital'
},


})

//DadosConsulta.sync({force:true})

/*

DadosConsulta.create({

    Consulta:'Cardiologista',
    Data: '2020-12-14',
    Especialidade:'Especialista do Coração',
    Medico:'Valerio Souza',
    NomeHospital:'Santa Vida',
    RuaHospital:'Rua das Pedras',
    NumeroHospital:'1521',
    BairroHospital:'POÁ',
    CepHospital:'05035886',
    TelefoneHospital:'11-56875525',
    
    })
*/



    module.exports = DadosConsulta;
