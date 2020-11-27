const Sequelize = require('sequelize');
const express = require("express");
const bodyParser = require("body-parser")
const handlebars = require ("express-handlebars")
const DadosProntuario = require("./Models/InsertProntuario")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const InsertVacinas = require("./Models/InsertVacinas")
const InsertConsultas = require("./Models/InsertConsultas")
const DadosAlergia = require("./Models/InsertAlergias")
const InsertLogin = require("./Models/InsertLogin")
const IndexDB = require("./Models/Index")
const cookie = require("cookie")
const path = require("path");
const { urlencoded } = require('body-parser');
const { sequelize } = require('./Models/db');
const { where } = require('sequelize');
const { response } = require('express');
const app = express();







// parse application/x-www-form-urlencoded--Incluido por causa que era assim !
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//app.engine("handlebars", handlebars({defaultLayout:'main'})) Antigo que dava erro

app.engine('handlebars', handlebars({//Novo substituiu o inicial e da certo
    defaultLayout: 'main',
     handlebars: allowInsecurePrototypeAccess(Handlebars)
  }));

app.set('view engine','handlebars')


//Arquivos Staticos


app.use(express.static(path.join(__dirname,"img")))
app.use(express.static(path.join(__dirname,"css")))
app.use(express.static(path.join(__dirname,"js")))

  
/*
//Rotas do handlebars
app.get("/Index", function(req, res){    
    res.render("Index");
  }),

*/


app.get("/Index", function(req, res){   

    res.render("Index");
   
  }),





app.post('/Index2',function(req,res){
//res.send("Senha:" + req.body.senha + "Aqui o dado </br>" + "CPF:" + req.body.CPF)
InsertLogin.create({
    cpf:req.body.CPF,
    senha:req.body.senha
    
    })


})


app.post('/Login', function(req,res){

    InsertLogin.findOne({
     where:{
        senha: req.body.senha,
        cpf:req.body.CPF           
    }
 }).then(function(InsertLogin){
     if(InsertLogin){
        res.render("Home")
     }else{
        //res.render("Index");        
         //var mensagem = InsertLogin=InsertLogin?InsertLogin:"usuario";
         //console.log("Não Encontrei o "+InsertLogin)
         //return mensagem;
         res.render("Erro") 
     }
     
 }).catch(function(err){
 console.log("Não Encontrei o "+InsertLogin + "tive um erro: "+err)

 })


})

app.get("/Vacinas", function(req, res){
    //res.render("Vacinas");
    InsertVacinas.findOne({
        where:{
            //senha: req.body.senha,
            id:2, 
        },
    }
    ).then(function(InsertVacinas){
        res.render('Vacinas',{InsertVacinas:InsertVacinas})
    })
   
}),


app.get("/Consultas", function(req, res){
    //res.render("Consultas")
    
    
    InsertConsultas.findOne({
        where:{
            //senha: req.body.senha,
            id:1
        },
    }
    ).then(function(DadosConsulta){
    res.render('Consultas', {DadosConsulta:DadosConsulta})

    })
   
   
}),


app.get("/Home", function(req, res){
    res.render("Home")
   
})



app.get("/Alertas", function(req, res){
    res.render("Alertas")
   
})



app.get("/Alergias", function(req, res){
    //res.render("Alergias")
    

    DadosAlergia.findOne({
        where:{
            //senha: req.body.senha,
            id:2, 
        },
    }
    ).then(function(DadosAlergia){                   
        res.render('Alergias',{DadosAlergia:DadosAlergia})
    })    
   
})




app.post('/InsertAlergias',function(req,res){
//res.send("Titulo:" + req.body.Descricao + "Aqui o Titulo </br>" + "CPF:" + req.body.Titulo)
    DadosAlergia.create({

            NomeAlergia:req.body.Titulo,
            Descricao:req.body.Descricao,            
            
            
    }).then(function(DadosAlergia){
    if(DadosAlergia){
        res.render("Sucesso")
    }else{
        res.send("Erro")    

    }

    }).catch(function(err){
        console.log("Tivemos um erro em" +DadosAlergia + err)
    })

})





app.get("/Prontuario",function(req,res){
 
    DadosProntuario.findOne({
        where:{
            //senha: req.body.senha,
            id:2, 
        },
    }
    ).then(function(DadosProntuario){                   
    res.render('Prontuario',{DadosProntuario:DadosProntuario})
})


});



/*
app.get("/IndexAtendimento", function(req, res){
    //res.render("IndexAtendimento")
    
    DadosProntuario.update({
    
    Nome:"Teste",
    CPF:45000000
       
},{
    where:{
        id:1
    }
}

).then(function(DadosProntuario){                   
    res.render('IndexAtendimento',{DadosProntuario:DadosProntuario})
}).catch(function(err){
console.log("Tivemos um erro em" + err)
})

   
})
*/










app.get("/IndexAtendimento", function(req, res){
    //res.render("IndexAtendimento")
    
    DadosProntuario.findOne({
        where:{
            nome:"TESTE"
        }
}).then(function(DadosProntuario){                   
    res.render('IndexAtendimento',{DadosProntuario:DadosProntuario})
}).catch(function(err){
console.log("Tivemos um erro em" + err)
})

   
})






app.post('Update',function(req,res){
    //res.send("Titulo:" + req.body.Descricao + "Aqui o Titulo </br>" + "CPF:" + req.body.Titulo)
    DadosProntuario.findOne({
            
                   
                 NomeAlergia:req.body.Titulo,
                CPF:req.body.CPF,
                
                
        }).then(function(DadosProntuario){
        if(DadosProntuario){
            res.render("Salvei Sucesso")
        }else{
            res.send("Erro")    
    
        }
    
        }).catch(function(err){
            console.log("Tivemos um erro em" + DadosProntuario + err)
        })
    
    })







app.listen(8081);
