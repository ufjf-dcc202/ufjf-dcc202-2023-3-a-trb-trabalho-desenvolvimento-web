//jogo.js
    
let currentPlayer = 1;
let player1Board = Array(9).fill(0);
let player2Board = Array(9).fill(0);

// Função para rolar o dado
    function rollDice(player) {
        const diceValue = Math.floor(Math.random() * 6) + 1;

        let currentPlayerBoard;
        let opponentBoard;
            
        if (player===1){
            currentPlayerBoard = player1Board;
        }
        else{
            currentPlayerBoard = player2Board;
        }
            
        if (player===1){
            opponentBoard = player2Board;
        }
        else{
            opponentBoard = player1Board;
        }
            
        // Atualiza o tabuleiro com o valor do dado
        const emptyCellIndex = currentPlayerBoard.indexOf(0); //Retorna o índice do primeiro valor na array (se não houver, retorna -1)
        if (emptyCellIndex !== -1) {
            currentPlayerBoard[emptyCellIndex] = diceValue;

            // descarta o dado do oponente com o mesmo valor
            const opponentEmptyCellIndexes = [];
            opponentBoard.forEach((value, index) => {
                if (value === diceValue) {
                    opponentBoard[index] = 0;
                    opponentEmptyCellIndexes.push(index);
                    }
                });
                    
            updateBoard(player);
            updateBoard(3 - player);  // Atualiza o tabuleiro do oponente

            // Checa se o jogo acabou
            if (currentPlayerBoard.every(value => value !== 0)) {
                alert(`Player ${player} wins!`);
                resetGame();
                }

            // Troca players
            currentPlayer = 3 - player;  // alternar entre jogador 1 e 2

            // Se for a vez do oponente, simula uma jogada
            if (currentPlayer === 2) {
                setTimeout(() => rollDice(2), 1000);
            }
        }
    }

// função para atualizar o tabuleiro
function updateBoard(player) {
    const boardElement = document.getElementById(`player${player}-board`);
    boardElement.innerHTML = '';

    const currentPlayerBoard = player === 1 ? player1Board : player2Board;

    for (let i = 0; i < currentPlayerBoard.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = currentPlayerBoard[i] !== 0 ? currentPlayerBoard[i] : '';
        boardElement.appendChild(cell);
    }
}

// função para resetar o jogo
function resetGame() {
    currentPlayer = 1;
    player1Board = Array(9).fill(0);
    player2Board = Array(9).fill(0);
    updateBoard(1);
    updateBoard(2);
}

window.onload = function () {
    updateBoard(1);
    updateBoard(2);
}