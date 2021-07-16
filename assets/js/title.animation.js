let title = document.querySelector('.title');
let i = 0;
let j = 15;
let k = 90;
window.setInterval(function() {
    i++;
    j++;
    k++;
    title.style.color = `rgb(${j}, ${k}, ${i})`;
    if (i === 255) {
        i = 0;
    }
    if (j === 255) {
        j = 15;
    }
    if (k === 255) {
        k = 90;
    }
}, 10);