const Sequelize = require("sequelize")
const { DATE } = require("sequelize");
const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser")
const handlebars = require ("express-handlebars")
const DadosProntuario = require("./InsertProntuario")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const InsertVacinas = require("./InsertVacinas")
const InsertConsultas = require("./InsertConsultas")
const DadosAlergia = require("./InsertAlergias")
const InsertLogin = require("./InsertLogin")
const cookie = require("cookie")
const path = require("path");
const { urlencoded } = require('body-parser');
const { where } = require('sequelize');
const { response } = require('express');
const app = express();

//Permissions e Relações
















var IndexDB = db.sequelize.define('Index',{

    id:{
        type:db.Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    
    }, 


    idEndereco:{
        type:db.Sequelize.INTEGER,
        Key:true
    
    },
    
    idAlergias:{
        type:db.Sequelize.INTEGER,
         Key:true
    
    },

    idProntuario:{
        type:db.Sequelize.INTEGER,
        Key:true
    
    },    
    




 });
 


 IndexDB.belongsTo(IndexDB, {
     as:'IndexDB',
 foreingKey:'id'


})


/*
IndexDB.create({
idEndereco:1,
idAlergias:1,
idProntuario:1,
Nome:"TESTE",
senha:"ARROZ",

})
*/
 //IndexDB.sync({force:true})



 
 module.exports = IndexDB;

