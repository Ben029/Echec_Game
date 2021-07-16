let boxs = document.querySelectorAll('.box');
let damier = [];
// for (let i = 0; i < 8; i++) {
//     damier.push([0, 0, 0, 0, 0, 0, 0, 0]);
// }

for (let i = 0; i < 8; i++) {
    damier.push([]);
    for (let j = 0; j < 8; j++) {
        damier[i][j] = document.querySelector(`#box-${i}-${j}`);
    }
}

// les class j-1 et j-2 sont justes pour reconaitre les pions des deux joueurs globalement

damier[0][0].classList.add('tour-Black');
damier[0][0].classList.add('j-1');

damier[0][1].classList.add('chevalier-Black');
damier[0][1].classList.add('j-1');

damier[0][2].classList.add('fou-Black');
damier[0][2].classList.add('j-1');

damier[0][3].classList.add('king-Black');
damier[0][3].classList.add('j-1');

damier[0][4].classList.add('queen-Black');
damier[0][4].classList.add('j-1');

damier[0][5].classList.add('fou-Black');
damier[0][5].classList.add('j-1');

damier[0][6].classList.add('chevalier-Black');
damier[0][6].classList.add('j-1');

damier[0][7].classList.add('tour-Black');
damier[0][7].classList.add('j-1');

for (let i = 0; i < 8; i++) {
    damier[1][i].classList.add('pion-Black');
    damier[1][i].classList.add('j-1');

}

damier[7][0].classList.add('tour-White');
damier[7][0].classList.add('j-2');

damier[7][1].classList.add('chevalier-White');
damier[7][1].classList.add('j-2');

damier[7][2].classList.add('fou-White');
damier[7][2].classList.add('j-2');

damier[7][3].classList.add('king-White');
damier[7][3].classList.add('j-2');

damier[7][4].classList.add('queen-White');
damier[7][4].classList.add('j-2');

damier[7][5].classList.add('fou-White');
damier[7][5].classList.add('j-2');

damier[7][6].classList.add('chevalier-White');
damier[7][6].classList.add('j-2');

damier[7][7].classList.add('tour-White');
damier[7][7].classList.add('j-2');

for (let i = 0; i < 8; i++) {
    damier[6][i].classList.add('pion-White');
    damier[6][i].classList.add('j-2');
}

// pour les cases vides
for (let i = 2; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
        damier[i][j].classList.add('none');
    }
}