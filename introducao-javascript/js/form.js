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