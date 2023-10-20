"use strict";

document.addEventListener("DOMContentLoaded", function(){

    const squares = document.querySelectorAll("#board > div");
    console.log(squares);

    squares.forEach(function(elem){
        elem.classList.add("square")
    });
});