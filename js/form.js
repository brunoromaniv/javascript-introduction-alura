var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        var form = document.querySelector("#form-adiciona");
        //extraindo informações do paciente do form

        var paciente = obtemPacienteDoFormulario(form);
        var erros = validaPaciente(paciente);

        if(erros.length > 0){
            exibeMensagensDeErro(erros);
            
            return;
        }
        //Cria Tr e TD do paciente
        
        adicionaPacienteNaTabela(paciente);
        var mensagensErro = document.querySelector("#mensagem-erro");
        mensagensErro.innerHTML = "";


        form.reset();

      
        
    });


    function obtemPacienteDoFormulario(form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value),

        }
        return paciente;

    }


    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }


    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;
    }

  function validaPaciente(paciente){
      var erros = [];
      if(!validaPeso(paciente.peso) || paciente.peso.length ==0){
     
         erros.push("Peso é inválido");
      }

      if(!validaAltura(paciente.altura)|| paciente.altura.length ==0){

          erros.push("Altura é inválida");
      }

      if(paciente.nome.length ==0){
          erros.push("O nome não pode ser em branco");
      }
      if(paciente.gordura.length ==0){
        erros.push("A Gordura não pode ser nula");
    }
      return erros;

  }

  function exibeMensagensDeErro(erros){
   
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    })


  }

  function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
        
    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    
    tabela.appendChild(pacienteTr);
  }