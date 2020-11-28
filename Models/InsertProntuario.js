const Sequelize = require("sequelize")
const { DATE } = require("sequelize");
const db = require("./db");
const IndexDB = require("./Index");
var DadosProntuario = db.sequelize.define('Prontuario', {


    id: {
        type: db.Sequelize.INTEGER,
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },

    senha: {
        type: db.Sequelize.STRING,
        field: 'senha'
    },


    Nome: {
        type: db.Sequelize.STRING,
        field: 'nome'
    },
    CPF: {
        type: db.Sequelize.STRING,
        field: 'cpf'
    },
    RG: {
        type: db.Sequelize.STRING,
        field: 'RG'
    },
    Idade: {
        type: db.Sequelize.FLOAT,
        field: 'idade'
    },
    Fenotipo: {
        type: db.Sequelize.FLOAT,
        field: 'fenotipo'
    },
    Peso: {
        type: db.Sequelize.FLOAT,
        field: 'Peso'
    },
    Altura: {
        type: db.Sequelize.FLOAT,
        field: 'Altura'
    },
    SexoBiologico: {
        type: db.Sequelize.FLOAT,
        field: 'SexoBiologico'
    },
    Genero: {
        type: db.Sequelize.FLOAT,
        field: 'Genero'
    },
    GrupoRisco: {
        type: db.Sequelize.FLOAT,
        field: 'GrupoRisco'
    },
    DisturbioPsquicos: {
        type: db.Sequelize.FLOAT,
        field: 'DisturbioPsquicos'
    },
    PCD: {
        type: db.Sequelize.FLOAT,
        field: 'PCD'
    },
    GrSanguineo: {
        type: db.Sequelize.STRING,
        field: 'Gr Sanguineo'
    },
    Pressao: {
        type: db.Sequelize.FLOAT,
        field: 'Pressao'
    },
    Doador: {
        type: db.Sequelize.FLOAT,
        field: 'Doador'
    }, Rua: {
        type: db.Sequelize.STRING,
        field: 'Rua'
    },
    Bairro: {
        type: db.Sequelize.STRING,
        field: 'Bairro'
    },
    Cidade: {
        type: db.Sequelize.STRING,
        field: 'Cidade'
    },
    Cep: {
        type: db.Sequelize.STRING,
        field: 'Cep'
    },
    Complemento: {
        type: db.Sequelize.STRING,
        field: 'Complemento'
    },
    Numero: {
        type: db.Sequelize.STRING,
        field: 'Numero'
    },
    TelefoneEmergencia: {
        type: db.Sequelize.STRING,
        field: 'TelefoneEmergencia'
    },
    email: {
        type: db.Sequelize.STRING,
        field: 'email'
    },
    TelefoneRecado: {
        type: db.Sequelize.STRING,
        field: 'TelefoneRecado'
    },
    emailOpcional: {
        type: db.Sequelize.STRING,
        field: 'emailOpcional'
    },
    TelefoneCuidador: {
        type: db.Sequelize.STRING,
        field: 'TelefoneCuidador'
    },
    NomeResponsavel: {
        type: db.Sequelize.STRING,
        field: 'NomeResponsavel'
    },
    NomeCuidador: {
        type: db.Sequelize.STRING,
        field: 'NomeCuidador'
    },

    NomeAlergia: {
        type: db.Sequelize.STRING,
        field: 'NomeAlergia'
    },

    Descricao: {
        type: db.Sequelize.STRING,
        field: 'Descricao'
    },
    Homologador: {
        type: db.Sequelize.STRING,
        field: 'Homologador'
    },
    DataInclusao: {
        type: db.Sequelize.DATEONLY,
        field: 'DataInclusao'
    },
    Consulta: {
        type: db.Sequelize.STRING,
        field: 'Consultas'
    },
    Data: {
        type: db.Sequelize.DATEONLY,
        field: 'Data'
    },
    Especialidade: {
        type: db.Sequelize.STRING,
        field: 'Especialidade'

    },
    Medico: {
        type: db.Sequelize.STRING,
        field: 'Medico'
    },
    NomeHospital: {
        type: db.Sequelize.STRING,
        field: 'NomeHospital'
    },

    RuaHospital: {
        type: db.Sequelize.STRING,
        field: 'RuaHospital'
    },

    NumeroHospital: {
        type: db.Sequelize.STRING,
        field: 'NumeroHospital'
    },

    BairroHospital: {
        type: db.Sequelize.STRING,
        field: 'BairroHospital'
    },

    CepHospital: {
        type: db.Sequelize.STRING,
        field: 'CepHospital'
    },

    TelefoneHospital: {
        type: db.Sequelize.STRING,
        field: 'TelefoneHospital'
    },
    Rua: {
        type: db.Sequelize.STRING,
        field: 'Rua'
    },
    Bairro: {
        type: db.Sequelize.STRING,
        field: 'Bairro'
    },
    Cidade: {
        type: db.Sequelize.STRING,
        field: 'Cidade'
    },
    Cep: {
        type: db.Sequelize.STRING,
        field: 'Cep'
    },
    Complemento: {
        type: db.Sequelize.STRING,
        field: 'Complemento'
    },
    Numero: {
        type: db.Sequelize.STRING,
        field: 'Numero'
    },

    Vacina: {
        type: db.Sequelize.STRING,
        field: 'vacina'
    },
    Validade: {
        type: db.Sequelize.DATE,
        field: 'Date'
    }




})


DadosProntuario.belongsTo(IndexDB, {
    as: 'Index',
    foreingKey: 'id',
    onUpdate: 'CASCADE'
})

//DadosProntuario.sync({force:true});//Esta linha serve para criar a tabela




/*
DadosProntuario.create({
    
    Nome:"SEGUNDO PAC",
    senha:"TESTE",
    CPF:"205.898.000-00",
    RG:"246.000.456.x",
    Idade:22,
    Fenotipo:"2",
    Peso:"60",
    Altura:"1.50",
    SexoBiologico:"FEMININO",
    Genero:"MASCULINO",
    GrupoRisco:"NAO",
    DisturbioPsquicos:"1",
    PCD:"2",
    GrSanguineo:"O+",
    Pressao:"1.80",
    Doador:"2",
    Rua :"CAMARGO ARAUJO",
    Bairro:"Parque Itaim",
    Cidade:"Carapicuiba",
    Cep:"02988-152",
    Complemento:"Casa 5",
    Numero:"28",
    TelefoneEmergencia:11963584456,
    email:"edvaldo@edvaldo.com",
    TelefoneRecado:1195882510,
    emailOpcional:"edvaldoivo@ivo.com.br",
    TelefoneCuidador:1158442544,
    NomeResponsavel:"Carlota Joaquina",
    NomeCuidador:"Ozorio",
    Vacina:"BCG",
    Validade:55152588

    
    })
    
    */





module.exports = DadosProntuario;


