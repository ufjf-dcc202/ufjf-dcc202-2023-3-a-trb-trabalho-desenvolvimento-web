//jogo.js
const btnRolarDado = document.getElementById('RolarDados');
const btnCol1 = document.getElementById('col1');
const btnCol2 = document.getElementById('col2');
const btnCol3 = document.getElementById('col3');

const btnReinicia = document.getElementById ('Reiniciar')

let i = 1;
let j = 4;
let k = 7;
let cont = 1;

let numAleatorio=[];

//Sorteia e joga o num sorteado na tela

btnRolarDado.addEventListener('click', sorteiaDado);
function sorteiaDado() {
    let celula = document.getElementById ('Jog1');
    numAleatorio = Math.floor(Math.random() * 6) + 1;
    celula.innerHTML = numAleatorio;
}
// Coloca esse mesmo numero dentro das celulas de cada coluna escolhida

btnCol1.addEventListener('click', escolheColuna1);
function escolheColuna1() {
    if(i<=3){
        let cel = document.getElementById("celula"+ i);
        cel.innerHTML = numAleatorio;
        i++;
        jogadaoponente();
    }
    if(i===4){
    let cel2= document.getElementById ('soma1');
    cel2.innerHTML = percorrecoluna(1,3);
    }
}

btnCol2.addEventListener('click', escolheColuna2);
function escolheColuna2() {
    if(j<=6){
        let cel = document.getElementById("celula"+ j);
        cel.innerHTML = numAleatorio;
        j++;
        jogadaoponente();
    }
    if(j===7){
        soma = 0;
        let cel2= document.getElementById ('soma2');
        cel2.innerHTML = percorrecoluna(4,6);
    }
}

btnCol3.addEventListener('click', escolheColuna3);
function escolheColuna3(){
    if(k<=9){
        let cel = document.getElementById("celula"+ k); 
        cel.innerHTML = numAleatorio;
        k++;
        jogadaoponente();
    }
    if(k===10){
        let cel2= document.getElementById ('soma3');
        cel2.innerHTML = percorrecoluna(7,9);
    }
}

//Jogadas do oponente
function jogadaoponente (){
    if (cont<=9){
    let cel = document.getElementById("celula1."+ cont);
    cel.innerHTML = Math.floor(Math.random() * 6) + 1;
    cont++;
    }
}



btnReinicia.addEventListener('click', reiniciarJogo);
function reiniciarJogo() {
    // Limpar conteúdo das células
    let celula = document.getElementById ('Jog1');
    celula.innerHTML = '&nbsp'; //'&nbsp' é um espaço vazio

    for (let i = 1; i <= 9; i++) {
        let celula = document.getElementById("celula" + i);
        celula.innerHTML = '&nbsp';
    }
    for (let i = 1; i <= 9; i++) {
        let celula = document.getElementById("celula1." + i);
        celula.innerHTML = '&nbsp';
    }
    let cel= document.getElementById ('soma1');
    cel.innerHTML = '&nbsp';

    let cel2= document.getElementById ('soma2');
    cel2.innerHTML = '&nbsp';

    let cel3= document.getElementById ('soma3');
    cel3.innerHTML = '&nbsp';
    // Reiniciar variáveis
    i = 1;
    j = 4;
    k = 7;
    cont = 1;
    soma = 0;
}


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let soma = 0;

function percorrecoluna(x, y) {
    for (let i = x; i <= y; i++) {
        let cel = document.getElementById("celula" + i);
        let num = parseInt(cel.innerHTML);
        switch (num) {
            case 1:
                num1++;
                break;
            case 2:
                num2++;
                break;
            case 3:
                num3++;
                break;
            case 4:
                num4++;
                break;
            case 5:
                num5++;
                break;
            case 6:
                num6++;
                break;
        }
        soma =  1 * num1 + 2 * num2 + 3 * num3 + 4 * num4 + 5 * num5 + 6 * num6;
    }
    return soma;
}