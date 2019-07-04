var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){
    paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var pesoevalido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var tdImc = paciente.querySelector(".info-imc");
    
    if(!pesoevalido){
        tdImc.textContent = "Peso Inválido!";
        pesoevalido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        tdImc.textContent = "Altura Inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoevalido){
    
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  

    }}


    function validaPeso(peso) {
           if(peso >= 0 && peso <1000) {
               return true;
           }else {
               return false;
           }


    }

    function validaAltura(altura){
        if(altura >=0 && altura <3.0){
            return true;
        }else{
            return false;
        }
    }


    function calculaImc(peso, altura){
        var imc = 0;
        imc = peso/(altura*altura);

        return imc.toFixed(2);
    }
    
  







console.log(peso, altura, imc);

