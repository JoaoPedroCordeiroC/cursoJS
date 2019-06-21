var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionaista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoValido = true;
    var alturaValido = true;
    
    if(peso <= 0 || peso >= 1000) {
        console.log('Peso inválido!');
        pesoValido =  false;
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-invalido');
    }
    
    if(altura <= 0 || altura >= 3.00) {
        console.log('Altura inválido!');
        pesoValido =  false;
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add('paciente-invalido');    //Chama stilo do CSS
    }
    
    if (alturaValido && pesoValido) {
        var imc = peso / (altura * altura);

        //Setando valor calculado em JS para campo imc do cliente no HTML
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){   //Função anonima
    event.preventDefault();                                // Previne o evento padrão do botão   
    
    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');  //Cria linha de tabela

    var nomeTd = document.createElement('td');      //Cria as colunas da linha
    var pesoTd = document.createElement('td');      
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);     //Colocando as colunas dentro da linha 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');

    //Colocando a liinha dentro da tabela
    tabela.appendChild(pacienteTr);
})
