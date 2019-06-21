var butaoAdicionar = document.querySelector('#buscar-pacientes');

butaoAdicionar.addEventListener('click', function() {
    console.log('Buscando pacientes...');
    
    //Responsável por fazer requisição http
    var xhr = new XMLHttpRequest();

    //Configurando o endereço a ser feita a requisição
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes'); 

    //Carrega a requisição e mostra a resposta
    xhr.addEventListener('load', function() {

        var erroAjax = document.querySelector('#erro-ajax');
        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
           
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log( xhr.status);
            console.log( xhr.responseText);
            
            erroAjax.classList.remove('invisivel');
        }
        

    })

    //Envia a requisição
    xhr.send();
});