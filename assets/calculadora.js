const estado = {
    fase: null,
    valor1: null,
    valor2: null,
    operacao: null,
    resultado: null,
    historico: [],

    iniciar: function() {
        this.fase = 1;
        this.valor1 = '0';
        this.valor2 = '';
        this.operacao = '';
        this.resultado = '0';
    },

    salvarHistorico: function(algo) {
       this.historico.unshift(algo);
       console.log(algo)
    },
    
    somar: function() {
        const valor = parseInt(this.valor1, 10) + parseInt(this.valor2, 10);
        this.resultado = valor.toString(); 
    },

    subtrair: function() {
        const valor = parseInt(this.valor1, 10) - parseInt(this.valor2, 10);
        this.resultado = valor.toString();
    },

    multiplicar: function() {
        const valor = parseInt(this.valor1, 10) * parseInt(this.valor2, 10);
        this.resultado = valor.toString();
    },

    dividir: function() {
        if(parseInt(this.valor2, 10) === 0){
            console.log('Não é possível dividir por 0, tente novamente');
            this.operacao = '';
            this.valor2 = '';
        } else{
            const valor = parseInt(this.valor1, 10) / parseInt(this.valor2, 10);
            this.resultado = valor.toString();
        }
    },

    igualdade: function() {
        this.fase = 3;   
        this.operacao = '';
        this.valor2 = '';
        this.valor1 = estado.resultado.toString();        
    },

    limpar: function() {
        this.operacao = '';
        this.valor2 = '';
        this.valor1 = 0;
    },

    selecionaOperador: function(operador) {
        this.operacao = operador;
        this.fase = 2;
    },

    selecionarNumeros: function(numero){
        if (this.fase === 1) {
            this.valor1 = parseInt(this.valor1 + numero, 10).toString();
        } else if (this.fase === 2) {
            this.valor2 = this.valor2 + numero;
        } else if (this.fase === 3) {
            this.valor1 = numero.toString();
            this.fase = 1;
        }
    },

    calcular: function() {
        if (this.valor1 !== '' && this.valor2 !== '' && this.operacao !== '') {
            if(this.operacao === '+'){
                this.somar();
            } else if(estado.operacao === '-'){
                this.subtrair();
            } else if(estado.operacao === '*'){
                this.multiplicar();
            } else if(estado.operacao === '/'){
               this.dividir();
            }
            this.salvarHistorico((this.valor1).toString()+this.operacao+(this.valor2).toString()+"="+this.resultado)
            this.igualdade();
        }        
    },
        
    limparHistorico: function (){
        this.historico = [];
    }
};