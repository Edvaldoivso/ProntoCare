const Sequelize = require("sequelize")

const sequelize = new Sequelize('ProntoCare','root','',{
host:'localhost',
dialect:'mysql',
host: '127.0.0.1',
port: 3306,
})



sequelize.authenticate().then(function(){console.log("Conectou")}).catch(function(err){
    console.log("erro"+err)
})


module.exports = {

    Sequelize:Sequelize,
    sequelize:sequelize,

}