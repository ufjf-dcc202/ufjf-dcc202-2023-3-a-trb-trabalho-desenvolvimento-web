let currentPlayer = 1;
        let player1Board = Array(9).fill(0);
        let player2Board = Array(9).fill(0);

        // função para rolar o dado
        function rollDice(player) {
            const diceValue = Math.floor(Math.random() * 6) + 1;
            const currentPlayerBoard = player === 1 ? player1Board : player2Board;
            const opponentBoard = player === 1 ? player2Board : player1Board;

            // atualiza o tabuleiro com o valor do dado
            const emptyCellIndex = currentPlayerBoard.indexOf(0);
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
            