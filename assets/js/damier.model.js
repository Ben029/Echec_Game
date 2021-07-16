let board = document.querySelector('#board');
let boardDead = document.querySelector('#dead-board');

let boardDeadHtml = '';
let boardHtml = "";

for (let i = 0; i < 8; i++) {
    boardHtml += `<div class="line">`;
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0)
            boardHtml += `<div class="box white" id="box-${i}-${j}"></div>`;
        else
            boardHtml += `<div class="box black" id="box-${i}-${j}"></div>`;
    }
    boardHtml += `</div>`;
}
board.innerHTML = boardHtml;


/********************************************************/

boardDeadHtml = '<div class="container-dead>';
for (let i = 0; i < 6; i++) {
    boardDeadHtml += `<div class="content content-${i}"></div>`;
}
boardDeadHtml = '</div>';
boardDead.innerHTML = boardDeadHtml;