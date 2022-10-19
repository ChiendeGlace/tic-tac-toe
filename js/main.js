const playGame = (() => {
    const player = (name, symbol) => {
        return {name, symbol};
    }
    const startBtn = document.querySelector('#start-btn');
    const playerBtn = document.querySelector('#player-btn');
    const restartBtn = document.querySelector('#restart');
    const playerTurn = document.querySelector('#player-turn');
    const goBackBtn = document.querySelector('#go-back');
    const gameBoard = [];
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    const playerSelection = document.querySelector('.player-selection');
    const playerForm = document.querySelector('.player-form');
    const formPlayer1 = document.querySelector('#player1');
    const formPlayer2 = document.querySelector('#player2');

    const toPlayerSelect = (e) => {
        const appHeader = document.querySelector('header');
        main.classList.remove('start-state');
        main.classList.add('board-state');
        appHeader.classList.remove('header-off');
        appHeader.classList.add('header-on');
        startBtn.classList.add('hidden');
        playerSelection.classList.remove('hidden');

    };
    const addPlayers = (e) => {
        playerForm.classList.remove('hidden');
    };
    const displayBoard = (e) => {
        e.preventDefault();
        const player1 = player(formPlayer1.value, 'X');
        const player2 = player(formPlayer2.value, 'O');
        if (player1.name == player2.name) {
            return;
        }
        else {
            playerForm.classList.add('hidden');
            playerSelection.classList.add('hidden');
            container.classList.remove('hidden');
            const player1 = player(formPlayer1.value, 'X');
            const player2 = player(formPlayer2.value, 'O');
            const player1Text = document.querySelector('#player1-text');
            const player2Text = document.querySelector('#player2-text');
            player1Text.textContent = `Player 1: ${player1.name} Symbol: ${player1.symbol}`;
            player2Text.textContent = `Player 2: ${player2.name} Symbol: ${player2.symbol}`;
            if ((Math.random())*100 > 50) {
                playerTurn.textContent = `${player2.name}'s turn`;
            } else {
                playerTurn.textContent = `${player1.name}'s turn`;
            }
            const boardSquares = document.querySelectorAll('.board-square');
            boardSquares.forEach(boardSquare => gameBoard.push(boardSquare));
            const displaySymbol = (e) => {
                const square = e.target;
                if (!square.textContent == '') {
                    return
                } else if (playerTurn.textContent == `${player2.name}'s turn`) {
                    square.textContent = player2.symbol;
                    playerTurn.textContent = `${player1.name}'s turn`;
                } else {
                    square.textContent = player1.symbol;
                    playerTurn.textContent = `${player2.name}'s turn`
                }
            
                if (!gameBoard[0].textContent == '' && gameBoard[0].textContent == gameBoard[1].textContent && gameBoard[0].textContent == gameBoard[2].textContent) {
                    if (gameBoard[0].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[3].textContent == '' && gameBoard[3].textContent == gameBoard[4].textContent && gameBoard[3].textContent == gameBoard[5].textContent) {
                    if (gameBoard[3].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[6].textContent == '' && gameBoard[6].textContent == gameBoard[7].textContent && gameBoard[6].textContent == gameBoard[8].textContent) {
                    if (gameBoard[6].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[0].textContent == '' && gameBoard[0].textContent == gameBoard[3].textContent && gameBoard[0].textContent == gameBoard[6].textContent) {
                    if (gameBoard[0].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[1].textContent == '' && gameBoard[1].textContent == gameBoard[4].textContent && gameBoard[1].textContent == gameBoard[7].textContent) {
                    if (gameBoard[1].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[3].textContent == '' && gameBoard[3].textContent == gameBoard[5].textContent && gameBoard[3].textContent == gameBoard[8].textContent) {
                    if (gameBoard[3].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[0].textContent == '' && gameBoard[0].textContent == gameBoard[4].textContent && gameBoard[0].textContent == gameBoard[8].textContent) {
                    if (gameBoard[0].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else if (!gameBoard[2].textContent == '' && gameBoard[2].textContent == gameBoard[4].textContent && gameBoard[2].textContent == gameBoard[6].textContent) {
                    if (gameBoard[2].textContent == player2.symbol) {
                        playerTurn.textContent = `${player2.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    } else {
                        playerTurn.textContent = `${player1.name} won!`;
                        playerTurn.classList.add('text-big');
                        boardSquares.forEach(boardSquare => boardSquare.removeEventListener('click', displaySymbol));
                    }
                } else {
                    if (gameBoard.every(square => square.textContent == 'X' || square.textContent == 'O')) {
                        playerTurn.textContent = `Draw`;
                        playerTurn.classList.add('text-big');
                    }
                }
            };
            const restart = (e) => {
                for (let i = 0; i < gameBoard.length; i++) {
                    gameBoard[i].textContent = '';
                }
                boardSquares.forEach(boardSquare => boardSquare.addEventListener('click', displaySymbol));
                if ((Math.random())*100 > 50) {
                    playerTurn.textContent = `${player2.name}'s turn`;
                } else {
                    playerTurn.textContent = `${player1.name}'s turn`;
                }
                playerTurn.classList.remove('text-big');
            };
            boardSquares.forEach(boardSquare => boardSquare.addEventListener('click', displaySymbol));
            restartBtn.addEventListener('click', restart);
            
        }
    }
    const goBack = (e) => {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].textContent = '';
        }
        container.classList.add('hidden');
        playerSelection.classList.remove('hidden');
        playerTurn.classList.remove('text-big');
    }
    
    startBtn.addEventListener('click', toPlayerSelect);
    playerBtn.addEventListener('click', addPlayers);
    window.addEventListener('submit', displayBoard);
    goBackBtn.addEventListener('click', goBack);

    return {
        toPlayerSelect,
        addPlayers,
        displayBoard,
        goBack
    };
})();

