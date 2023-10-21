"use strict";

document.addEventListener("DOMContentLoaded", function(){
    let player = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    const gameStatus = document.querySelector("#status")
    const newGame = document.querySelector(".btn")

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const squares = document.querySelectorAll("#board > div");
    console.log(squares);

    squares.forEach(function(elem, index){
        elem.classList.add("square");
        elem.addEventListener('click', function() {
            if(!elem.textContent){
                elem.textContent = player;
                elem.classList.add(player);

                gameState[index] = elem.textContent;
                console.log(gameState);

                const winner = checkWinner();
                if (winner) {
                    gameStatus.textContent = `Congratulations! ${player} is the Winner!`;
                    gameStatus.classList.add("you-won");
                } else {
                    player = player === "X" ? "O" : "X";
                    console.log(player);
                        if(gameState.every((element) => element !== null && element !== '')){
                            gameStatus.textContent = `The game is a Tie, Click new game to play again`;
                        }
                }
                
            }
        });

        elem.addEventListener('mouseover', function() {
            elem.classList.add("hover")
        });

        elem.addEventListener('mouseout', function() {
            elem.classList.remove("hover")
        });
 
        newGame.addEventListener('click', e => {
        e.preventDefault();
        player = 'X'
        gameState = ['', '', '', '', '', '', '', '', ''];
        elem.textContent = null;
        gameStatus.classList.remove("you-won");
        gameStatus.textContent = `Move your mouse over a square and click to play an X or an O.`;
        });
    });

    function checkWinner() {
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true;
            }
        }
        return false;
    }

    
});

