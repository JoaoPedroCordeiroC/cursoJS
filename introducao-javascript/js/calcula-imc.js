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
        var imc = calculaImc(peso,altura);

        //Setando valor calculado em JS para campo imc do cliente no HTML
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso  / (altura * altura);

    return imc.toFixed(2);
}
