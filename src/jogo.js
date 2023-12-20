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

//sorteia e joga o num sorteado na tela

btnRolarDado.addEventListener('click', sorteiaDado);
function sorteiaDado() {
    let celula = document.getElementById ('Jog1');
    numAleatorio = Math.floor(Math.random() * 6) + 1;
    celula.innerHTML = numAleatorio;
}
// coloca esse mesmo numero dentro das celulas de cada coluna escolhida

btnCol1.addEventListener('click', escolheColuna1);
function escolheColuna1() {
    if(i<=3){
        let cel = document.getElementById("celula"+ i);
        cel.innerHTML = numAleatorio;
        i++;
    }
    jogadaoponente();
}

btnCol2.addEventListener('click', escolheColuna2);
function escolheColuna2() {
    if(j<=6){
        let cel = document.getElementById("celula"+ j);
        cel.innerHTML = numAleatorio;
        j++;
    }
    jogadaoponente();
}
btnCol3.addEventListener('click', escolheColuna3);
function escolheColuna3(){
    if(k<=9){
        let cel = document.getElementById("celula"+ k); 
        cel.innerHTML = numAleatorio;
        k++;
    }
    jogadaoponente();
}

//jogadas do oponente
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
        celula.innerHTML = '&nbsp';

        for (let i = 1; i <= 9; i++) {
          let celula = document.getElementById("celula" + i);
          celula.innerHTML = '&nbsp';
        }
        for (let i = 1; i <= 9; i++) {
            let celula = document.getElementById("celula1." + i);
            celula.innerHTML = '&nbsp';
        }
        // Reiniciar variáveis
        i = 1;
        j = 4;
        k = 7;
        cont = 0;
}

