const startBtn = document.querySelector('#start-btn');
const main = document.querySelector('.main');
const playerBtn = document.querySelector('#player-btn');
const computerBtn = document.querySelector('#ai-btn');
const playerSelectionBtns = document.querySelector('.player-selection-btns');
const playerForm = document.querySelector('.player-form');
const board = document.querySelector('.board');
const restartBtn = document.querySelector('#restart');

const playGame = (() => {
    const toPlayerSelect = (e) => {
        const appHeader = document.querySelector('header');

        main.classList.remove('start-state');
        main.classList.add('player-select-state');
        appHeader.classList.remove('header-off');
        appHeader.classList.add('header-on');
        startBtn.classList.add('hidden');
        playerSelectionBtns.classList.remove('hidden');

    };
    const addPlayers = (e) => {
        playerForm.classList.remove('hidden');
    };
    const displayBoard = (e) => {
        e.preventDefault();
        main.classList.remove('player-select-state');
        main.classList.add('board-state');
        playerForm.classList.add('hidden');
        playerBtn.classList.add('hidden');
        computerBtn.classList.add('hidden');
        board.classList.remove('hidden');
        restartBtn.classList.remove('hidden');
    }

    return {
        toPlayerSelect,
        addPlayers,
        displayBoard
    };
})();

startBtn.addEventListener('click', playGame.toPlayerSelect);
playerBtn.addEventListener('click', playGame.addPlayers);
window.addEventListener('submit', playGame.displayBoard);