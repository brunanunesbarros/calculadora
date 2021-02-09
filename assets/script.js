estado.iniciar();

function capturarEntrada(entrada) {
    if(isNaN(entrada)) {
        tratarEntradaAcoes(entrada);
    } else{
        tratarEntradaDeNumeros(entrada);
    }  
    mostrarNoDisplay();
}
 
function mostrarNoDisplay() {
    document.getElementById('display').innerText = estado.valor1+estado.operacao+estado.valor2;
}

function tratarEntradaDeNumeros(numero) {
    if (numero >= 0 && numero <= 9) {
        estado.selecionarNumeros(numero);
    }
}

function tratarEntradaAcoes(acao){
    switch(acao){
        case '+':
        case '-':
        case '*':
        case '/':
            estado.selecionaOperador(acao);
            break;
        case 'limpar':
            estado.limpar();  
            break;
        case '=':

            estado.calcular();
            exibirHistorico();
            break;
    }
    
}

window.onkeypress = function(event) {
    if (event.key === 'Enter') {
        capturarEntrada('=');
    } else if (event.key === 'l') {
        capturarEntrada('limpar');
    } else {
        capturarEntrada(event.key);
    }
};

function exibirHistorico(){
    let linhaConstruida = '';
    for(let h of estado.historico){
        let novaLinha = `<li>${h}</li>`;
        linhaConstruida = linhaConstruida + novaLinha;
    } 
    document.getElementById('hist').innerHTML = linhaConstruida;
}

function limparHistorico(){
    estado.limparHistorico();
    exibirHistorico();
}
