const btnRolarDado = document.getElementById('RolarDados');
const btnCol1 = document.getElementById('col1');
const btnCol2 = document.getElementById('col2');
const btnCol3 = document.getElementById('col3');

let i = 1;
let j = 4;
let k = 7;
let cont = 0;


btnRolarDado.addEventListener('click', mostraDado);

function mostraDado() {
    let celula = document.getElementById("Jog1");
    let numAleatorio = Math.floor(Math.random() * 6) + 1;
    celula.innerHTML = numAleatorio;
    return 
    numAleatorio;
}

btnCol1.addEventListener('click', escolheColuna1);

function escolheColuna1() {
    if(i<=3){
        let cel = document.getElementById("celula"+ i);
        let num = mostraDado();
        cel.innerHTML = num;
        i++;
    }
}

btnCol2.addEventListener('click', escolheColuna2);

function escolheColuna2() {
    if(j<=6){
        let cel = document.getElementById("celula"+ j);
        let num = mostraDado();
        cel.innerHTML = num;
        j++;
    }
}

btnCol3.addEventListener('click', escolheColuna3);

function escolheColuna3(){
    if(k<=9){
        let cel = document.getElementById("celula"+ k);
        let num = mostraDado();
        cel.innerHTML = num;
        k++;
    }
}