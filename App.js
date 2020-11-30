const Sequelize = require('sequelize');
const express = require("express");
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const DadosProntuario = require("./Models/InsertProntuario")
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
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
const DadosVacina = require('./Models/InsertVacinas');
const app = express();







// parse application/x-www-form-urlencoded--Incluido por causa que era assim !
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.engine('handlebars', handlebars({//Novo substituiu o inicial e da certo
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));


app.set('view engine', 'handlebars')


//Arquivos Staticos-------------------------------


app.use(express.static(path.join(__dirname, "img")))
app.use(express.static(path.join(__dirname, "css")))
app.use(express.static(path.join(__dirname, "js")))


//ROTAS APLICATIVO---------------------------------- 


app.get("/Index", function (req, res) {

    res.render("Index")

}),
    

//-----------------------------------------------------

    app.post('/Login', function (req, res) {

        InsertLogin.findOne({


            where: {
                senha: req.body.senha,
                cpf: req.body.CPF
            }
        }).then(function (InsertLogin) {
            if (InsertLogin) {
                res.render("Home", { InsertLogin: InsertLogin })
            } else {

                res.render("Erro")
            }

        }).catch(function (err) {
            console.log("Não Encontrei o " + InsertLogin + "tive um erro: " + err)

        })


    })

//------------------------------------------------------------


app.get("/Vacinas/:CPF", function (req, res) {
    //res.render("Vacinas");
    DadosProntuario.findOne({
        where: {
           CPF:req.params.CPF
        },
    }
    ).then(function (DadosProntuario) {
        res.render('Vacinas', { DadosProntuario: DadosProntuario })
    })

}),

    //---------------------------------------------------------

    app.get("/Home", function (req, res) {
        res.render("Home")

    })

//-------------------------------------------------------


app.get("/Alertas/:CPF", function (req, res) {
    

    DadosProntuario.findOne({
        where: {
          CPF: req.params.CPF
        },
    }
    ).then(function (DadosProntuario) {
        res.render('Alertas', { DadosProntuario: DadosProntuario })
    }).catch(function (err) {
        console.log("Não peguei ID " + err)
    })


})


//-------------------------------------------------------



app.get("/Alergias/:CPF", function (req, res) {
    //res.render("Alergias")


    DadosProntuario.findOne({
        where: {
            //senha: req.body.senha,
            CPF:req.params.CPF
        },
    }
    ).then(function (DadosProntuario) {
        res.render('Alergias', { DadosProntuario: DadosProntuario })
    })

})



//------------------------------------------------------



app.post('/InsertAlergias', function (req, res) {
    //res.send("Titulo:" + req.body.Descricao + "Aqui o Titulo </br>" + "CPF:" + req.body.Titulo)
    DadosAlergia.create({

        NomeAlergia: req.body.Titulo,
        Descricao: req.body.Descricao,


    }).then(function (DadosAlergia) {
        if (DadosAlergia) {
            res.render("Sucesso")
        } else {
            res.send("Erro")

        }

    }).catch(function (err) {
        console.log("Tivemos um erro em" + DadosAlergia + err)
    })

})



//---------------------------------------------------------



app.get("/Prontuario/:CPF", function (req, res) {

    DadosProntuario.findOne({
        where: {
          CPF: req.params.CPF
        },
    }
    ).then(function (DadosProntuario) {
        res.render('Prontuario', { DadosProntuario: DadosProntuario })
    }).catch(function (err) {
        console.log("Não peguei ID " + err)
    })


});


//----------------------------------------------------------------------


app.get("/Consultas/:CPF", async function (req, res) {
    //res.render("Consultas")


    await DadosProntuario.findOne({
        where: {
            CPF: req.params.CPF

        },
    }
    ).then(function (DadosProntuario) {
        res.render('Consultas', { DadosProntuario: DadosProntuario })
    }).catch(function (err) {
        console.log("Não peguei ID " + err)
    })


})



//ROTAS DESC-------------------------------------------------------


app.get("/IndexAtendimento", function (req, res) {
    //res.render("IndexAtendimento")

    DadosProntuario.findAll({
        where: {
            nome:'Teste'
        }
    }).then(function (DadosProntuario) {
        res.render('IndexAtendimento', { DadosProntuario: DadosProntuario })


    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})

//---------------------------------------------------------------


app.get("/PrincipalConsulta", function (req, res) {
    //res.render("IndexAtendimento")

    DadosProntuario.findAll({
        where: {
            nome: "TESTE"
        }
    }).then(function (DadosProntuario) {
        res.render('PrincipalConsulta')


    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})
//----------------------------------------------------------------



app.get("/DadosAtendimento/:id", async function (req, res) {
    //res.render("IndexAtendimento")


    await DadosProntuario.findOne({

        where: {
            id: req.params.id
        }
    }).then(function (DadosProntuario) {
        res.render('DadosAtendimento', { DadosProntuario: DadosProntuario })
        console.log("Valor parametro= " + req.params.id)


    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})


//---------------------------------------------------



app.post("/IndexUpdate", function (req, res) {
    DadosProntuario.update({
        Nome: req.body.nome,
        Peso: req.body.Peso,
        Pressao: req.body.Pressao,
        Idade: req.body.Idade,
        Rua: req.body.Rua,
        Bairro: req.body.Bairro,
        Cidade: req.body.Cidade,
        Cep: req.body.Cep,
        Complemento: req.body.complemento,
        Numero: req.body.numero,
        email: req.body.email,
        TelefoneRecado: req.body.TelefoneRecado,
        emailOpcional: req.body.emailOpcional,
        NomeResponsavel: req.body.NomeResponsável,
        NomeCuidador: req.body.NomeCuidador,
        TelefoneCuidador: req.body.TelefoneCuidador


    }, {
        where: {
            id: 2
        }
    }

    ).then(function (DadosProntuario) {
        //res.render("IndexAtendimento")
        res.render('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})


//-------------------------------------------------------------------------------
/*


app.post("/IndexUpdate", function (req, res) {
    DadosProntuario.update({
        Nome: req.body.nome,
        Peso: req.body.Peso,
        Pressao: req.body.Pressao,
        Idade: req.body.Idade,
        Rua: req.body.Rua,
        Bairro: req.body.Bairro,
        Cidade: req.body.Cidade,
        Cep: req.body.Cep,
        Complemento: req.body.complemento,
        Numero: req.body.numero,
        email: req.body.email,
        TelefoneRecado: req.body.TelefoneRecado,
        emailOpcional: req.body.emailOpcional,
        NomeResponsavel: req.body.NomeResponsável,
        NomeCuidador: req.body.NomeCuidador,
        TelefoneCuidador: req.body.TelefoneCuidador


    }, {
        where: {
            id: 2
        }
    }

    ).then(function (DadosProntuario) {
        //res.render("IndexAtendimento")
        res.render('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})


*/



//------------------------------------------------------------------------------

app.post("/NovaConsulta", function (req, res) {
    DadosProntuario.create({
        Nome: "Teste",
        Consulta: req.body.Consulta,
        Data: req.body.Data,
        Especialidade: req.body.Especialidade,
        Medico: req.body.Medico,
        NomeHospital: req.body.NomeHospital,
        RuaHospital: req.body.RuaHospital,
        CepHospital: req.body.CepHospital,
        GrupoRisco: req.body.GrupoRisco,
        PCD: req.body.PCD,
        DisturbioPsquicos: req.body.DisturbioPsquicos,

    }).then(function (DadosProntuario) {
        //res.render("IndexAtendimento")
        res.send('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})

//-----------------------------------------------------------------------------

app.post("/NovaVacina", function (req, res) {
    DadosProntuario.create({

        Nome: req.body.nome,
        Vacina: req.body.Vacina,


    }).then(function (DadosProntuario) {
        res.send('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})


//---------------------------------------------------------------------------

app.post("/NovoLembrete", function (req, res) {
    DadosProntuario.create({
        Alertas: req.body,
        Hora: req.body,
        Data: req.body,
        Descrição: req.body,



    }).then(function (DadosProntuario) {
        //res.render("IndexAtendimento")
        res.send('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})

//-------------------------------------------------------------------------------


app.post("/NovaAlergia", function (req, res) {
    DadosProntuario.create({
        NomeAlergia: req.body.NomeAlergia,
        Descricao: req.body.Descricao,
        Homologador: req.body.Homologador,
        DataInclusao: req.body.DataInclusao,

    }).then(function (DadosProntuario) {
        //res.render("IndexAtendimento")
        res.send('DadosAtendimento')
    }).catch(function (err) {
        console.log("Tivemos um erro em" + err)
    })


})


//--------------------------------------------------------------------------

app.post("/AcessarDados", function (req, res) {
    //res.render("IndexAtendimento")

    DadosProntuario.findOrCreate({
        where: {
            Nome: req.body.nome,
            CPF: req.body.CPF,
        }
    }).then(function (DadosProntuario) {
        if(DadosProntuario){
           
            res.render('IndexAtendimento',{ DadosProntuario: DadosProntuario })
        }else{
            res.send("Erro")
        }
        
      

    }).catch(function (err) {
        console.log("Não Encontrei o " + DadosProntuario + "tive um erro: " + err)    
    })


})





app.listen(8081);
