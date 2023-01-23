let tela;

tela = 0;
document.getElementById("display").innerHTML = tela;

function botao(botao) {

    let display, numero, sinal, numeroSinal, letra;

    display = document.getElementById("display").innerHTML;
    numero = document.getElementById("numero").innerHTML;
    sinal = document.getElementById("sinal").innerHTML;
    numeroSinal = document.getElementById("numeroSinal").innerHTML;
    letra = document.getElementById("display").style;

    if (isNaN(botao) === false) {
        if (display == 0) {
        tela = botao; 
        numeroSinal = "n";
            } else if(numeroSinal == "s") {
                letra.opacity = 0;
                setTimeout(() => {letra.opacity = 1}, 50);
                tela = botao;
                numeroSinal = "n";
            } else {tela = display + botao; numeroSinal = "n";}       
        } else if (botao == ".") {
            if (display.indexOf('.') != -1) {
                tela = display;
        }  else {tela = display + botao}
        } else if (botao == "ac") {
            tela = 0;
            numeroSinal = "s";
            numero = 0;
        } else if (botao == "=" && numeroSinal == "n") {
            letra.opacity = 0;
            setTimeout(() => {letra.opacity = 1}, 50);
            tela = math();
            numeroSinal = "s";
            numero = 0;
        } else if (botao == "%") {
            tela = display / 100;
        } else {letra.opacity = 0;
            setTimeout(() => {letra.opacity = 1}, 50);
            if (sinal == "") {   
                tela = display;
                sinal = botao;
                numeroSinal = "s";
                numero = display;
        } else if(numeroSinal == "s") {
            
        } else {tela = math();
                sinal = botao;
                numeroSinal = "s";
                numero = display;
            }
        };
            
    function math() {
    let resultado, numeroNum, displayNum;
    numeroNum = parseFloat(numero);
    displayNum = parseFloat(display);
    
           if (sinal == "+") {
        resultado = numeroNum + displayNum;
    } else if (sinal == "-") {
        resultado = numeroNum - displayNum;
    } else if (sinal == "*") {
        resultado = numeroNum * displayNum;
    } else if (sinal == "/") {
        resultado = numeroNum / displayNum;
    } else if( sinal == "%") {
        resultado = display / 100;
    }
    return resultado
};

    document.getElementById("numero").innerHTML = numero;
    document.getElementById("sinal").innerHTML = sinal;
    document.getElementById("display").innerHTML = tela;
    document.getElementById("numeroSinal").innerHTML = numeroSinal;
     
 };