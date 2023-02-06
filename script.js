/* 
< 18.5 magreza
=> 18.5 && < 25.0 normal
=> 25.0 && < 30 sobrepeso
=> 30 && < 40 obesidade
=> 40 obesidade grave
*/

// Imc = peso / (altura * altura)

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('alt').value;

    imc = peso / (altura * altura);
    

    resultado = document.getElementById('resultado');
    if(imc < 18.5){ 
        resultado.innerHTML = '</br> Seu Resultado Foi: ' + imc.toFixed(2) + '</br> Magreza';
    }else if(imc >= 18.5 && imc < 25.0){
        resultado.innerHTML = '</br> Seu Resultado Foi: ' + imc.toFixed(2) + '</br> Normal';
    }else if(imc >= 25 && imc < 30){
        resultado.innerHTML = '</br> Seu Resultado Foi: ' + imc.toFixed(2) + '</br> Sobrepeso';
    }else if(imc >= 30 && imc < 40){
        resultado.innerHTML = '</br> Seu Resultado Foi: ' + imc.toFixed(2) + '</br> Obesidade';
    }else if (imc >= 40){
        resultado.innerHTML = '</br> Seu Resultado Foi: ' + imc.toFixed(2) + '</br> Obesidade Grave';
    }

    document.getElementById('peso').value = " ";
    document.getElementById('alt').value = " ";
};