var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){   //Função anonima
    event.preventDefault();                                // Previne o evento padrão do botão   
    
    var form = document.querySelector('#form-adiciona');

    // Extraindo informaçoes do pacinete do fomr
    var  paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);

    //Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)) {
        console.log('Paciente Inválido');
        return;
    }
    //Colocando a linha dentro da tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
    
    form.reset(); //Limpa os campos
})

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

   return paciente;
}

function montaTr(paciente) {

    //Cria TR
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild( montaTd(paciente.nome, 'info-nome')); 
    pacienteTr.appendChild( montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild( montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild( montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild( montaTd(paciente.imc, 'info-imc'));

    //Retorna a TR
    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    if(validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }

}