let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let crianca = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdcarne= carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianca); 
    let qtdcerveja= cervejaPP(duracao) * adultos;
    let qtdbebidas= bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * crianca); 


    resultado.innerHTML = `<p>${qtdcarne/100} Kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdcerveja}ml de cerveja</p>`
    resultado.innerHTML += `<p>${qtdbebidas}ml de bebida</p>`
    
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){        
        carne = 650;
    }
    return carne;
}

function cervejaPP(duracao){
    let cerveja = 1200;
    if(duracao >= 6){        
        cerveja = 2000;
    }
    return cerveja;
}
function bebidasPP(duracao){
    let bebidas = 1000;
    if(duracao >= 6){        
        bebidas = 1500;
    }
    return bebidas;
}