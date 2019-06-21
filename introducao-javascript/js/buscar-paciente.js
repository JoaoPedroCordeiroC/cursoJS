var butaoAdicionar = document.querySelector('#buscar-pacientes');

butaoAdicionar.addEventListener('click', function() {
    console.log('Buscando pacientes...');

    var xhr = new XMLHttpRequest();     //Responsável por fazer requisição http

    //Configurando o endereço a ser feita a requisição
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes'); 

    //Carrega a requisição e mostra a resposta
    xhr.addEventListener('load', function() {
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);
        var pacientes = JSON.parse(resposta);
       
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });

    })

    //Envia a requisição
    xhr.send();
});