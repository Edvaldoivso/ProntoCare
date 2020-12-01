//
//var CPF = localStorage.getItem('CPF');

/*
setTimeout(function(CPF){
    var CPF = document.getElementById("CPF").value
    console.log("Vai ir agora")
    var Teste =   window.location.href = "http://localhost:8081/Consultas/"+CPF;
    alert(Teste)
},2000)






setTimeout(function(){
       var Teste =   window.location.href = "http://localhost:8081/Home";
    alert(Teste)
},2000)

*/



function Limpar(){
    localStorage.clear();
    //console.log("Limpo")
    window.location.href = "http://localhost:8081/Index";

}


function LimparDesc(){
    localStorage.clear();
    //console.log("Limpo")
    window.location.href = "http://localhost:8081/PrincipalConsulta";

}

function SetCpf(){

    var CPF = $("#numeroCPF").val()
    console.log(CPF +"Vai o CPF já")
    localStorage.setItem('CPF',CPF);

}

function Consultas(){
     var CPF = localStorage.getItem('CPF');
     window.location.href = "http://localhost:8081/Consultas/"+CPF;
}

function Prontuario(){
    var CPF = localStorage.getItem('CPF');
   window.location.href = "http://localhost:8081/Prontuario/"+CPF;
}

function Alertas(){
    var CPF = localStorage.getItem('CPF');
    window.location.href = "http://localhost:8081/Alertas/"+CPF;

} 

function Alergias(){
    var CPF = localStorage.getItem('CPF');
    window.location.href = "http://localhost:8081/Alergias/"+CPF;

}

function Vacinas(){
    var CPF = localStorage.getItem('CPF');
    window.location.href = "http://localhost:8081/Vacinas/"+CPF;

}

function Voltar(){
    window.location.href = "http://localhost:8081/Home";

}




function Elemento(id){
    var Obj = "Linha"+id
    console.log(Obj + " Obj")
    var Item =  $("#"+Obj).text()
    console.log(Item + " O item")
    var URL = window.location.href =  "http://localhost:8081/DadosAtendimento/"+Item
    console.log(URL)
}

