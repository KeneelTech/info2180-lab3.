"use strict";

document.addEventListener("DOMContentLoaded", function(){
    let player = 'X';
    let gameState = [];
    console.log(gameState);

    const squares = document.querySelectorAll("#board > div");
    console.log(squares);

    squares.forEach(function(elem){
        elem.classList.add("square");
        elem.addEventListener('click', function() {
            if(!elem.textContent){
                elem.textContent = player;
                elem.classList.add(player);

                player = player === "X" ? "O" : "X";  
                console.log(player);
            }
        });
    });
});

