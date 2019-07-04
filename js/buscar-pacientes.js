var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientesss");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
        document.querySelector("#erro-ajax").classList.add("invisivel");  
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            
        });
    }else {
        console.log(xhr.status);
        console.log(xhr.responseText);
        document.querySelector("#erro-ajax").classList.remove("invisivel");
    }

    })
    xhr.send();
})