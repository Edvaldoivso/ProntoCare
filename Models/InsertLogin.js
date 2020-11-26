const {Module} = require("module");
const Sequelize = require("sequelize");
const { DATE } = require("sequelize");
const { brotliDecompress } = require("zlib");
const db = require("./db");




var InsertLogin = db.sequelize.define('Usuario', {

id:{
    type:db.Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true

},


cpf: {
    type:db.Sequelize.STRING,
    field:'cpf'
}, 


senha:{
    type:db.Sequelize.STRING,
    field:'senha'
},
data:{
    type:db.Sequelize.DATEONLY,
    field:'data'
}

})



/*


var SelectUser = InsertLogin;

   SelectUser.findOne({
    where:{senha:'Vania'}
}).then(function(SelectUser){
    if(SelectUser){
        console.log(SelectUser)
    }else{
        var mensagem = SelectUser=SelectUser?SelectUser:"usuario";
        console.log("Não Encontrei o "+SelectUser)
        return mensagem;

    }
    
}).catch(function(err){
console.log("Não Encontrei o "+SelectUser + "tive um erro: "+err)

})

*/

//InsertLogin.sync({force:true});//Esta linha serve para criar a tabela


/*
InsertLogin.create({
    cpf:'2020',
    senha:'Teste'
    
    })
    
   */
    


module.exports = InsertLogin;
//module.exports = SelectUser;
