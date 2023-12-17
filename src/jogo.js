const btnRolarDado = document.getElementById('RolarDados')

const btnCol1 = document.getElementById('col1')
const btnCol2 = document.getElementById('col2')
const btnCol3 = document.getElementById('col3')

let i = 1
let j = 4
let k = 7
let cont = 0

// gerar número aleatório
function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}
btnRolarDado.addEventListener('click', mostraDado)

// mostrar dado
function mostraDado(){
    let celula = document.getElementById("Jog1")
    celula.innerHTML = randomNumber();
}

btnCol1.addEventListener('click', escolheColuna1)
btnCol2.addEventListener('click', escolheColuna2)
btnCol3.addEventListener('click', escolheColuna3)

function escolheColuna1() {

    if( i <= 3 ){
        let cel = document.getElementById("celula" + i)
        cel.innerHTML = randomNumber();
        i++
    }
}


function escolheColuna2() {
    if(j<=6){
        let cel = document.getElementById("celula"+ j);
        cel.innerHTML = randomNumber()
        j++;
    }
}


function escolheColuna3(){
    if(k<=9){
        let cel = document.getElementById("celula"+ k);
        cel.innerHTML = randomNumber()
        k++;
    }
}