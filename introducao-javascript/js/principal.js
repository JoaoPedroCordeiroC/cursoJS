var titulo = document.querySelector('.titulo');
titulo.textContent = 'Café';

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

//Setando valor para campo HTML
tdImc.textContent = imc;

console.log(imc);  