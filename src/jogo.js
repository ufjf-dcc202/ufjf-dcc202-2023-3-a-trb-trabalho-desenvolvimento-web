const btnRolarDado = document.getElementById('RolarDados');

//Ao clicar no botão a tabela é preenchida.

btnRolarDado.addEventListener('click', preencheTabela);
var i = 1;

function randomizarNumeros() {
    //Randomiza números de 1 a 6.
    return Math.floor(Math.random() * 6) + 1;
}

function preencheCelula_Jog() { 
    //A primeira célula de índice 1 será preenchida com o número aleatório.
        var celula = document.getElementById("celula" + i);
        var numeroAleatorio = randomizarNumeros();
        celula.innerHTML = numeroAleatorio;
}
function preencheCelula_Opn() {
        var celula = document.getElementById("celula" + (i+1));
        var numeroAleatorio = randomizarNumeros();
        celula.innerHTML = numeroAleatorio;  
}

function preencheTabela(){
    //Atualiza o índice para a próxima célula ser preenchida.
    preencheCelula_Jog();
    preencheCelula_Opn();
    i+=2;
}