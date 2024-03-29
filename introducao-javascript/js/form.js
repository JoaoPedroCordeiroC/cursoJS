var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {   //Função anonima
    event.preventDefault();                                // Previne o evento padrão do botão   

    var form = document.querySelector('#form-adiciona');

    // Extraindo informaçoes do pacinete do fomr
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);



    var erros = validaPaciente(paciente);

    console.log(erros);
    if (erros.length > 0) {
        exibeMensagnsDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //Limpa os campos
    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';

})

function adicionaPacienteNaTabela(paciente) {
    //Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    //Colocando a linha dentro da tabela
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

}

function exibeMensagnsDeErro(erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}

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
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    //Retorna a TR
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('O nome não pode ser em branco!')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido!');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!');
    }

    if (paciente.gordura.length == 0) {
        erros.push('A gordura não pode ser em branco!')
    }

    if (paciente.peso.length == 0) {
        erros.push('O peso não pode ser em branco!');
    }

    if (paciente.altura.length == 0) {
        erros.push('A altura não pode ser em branco!');
    }

    return erros;
}

