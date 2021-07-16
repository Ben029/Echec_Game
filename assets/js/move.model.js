let actifJ1 = document.querySelector('.tour-j1');
let actifJ2 = document.querySelector('.tour-j2');
let back = document.querySelector('.back');
let active = false;
let player = 1; //sert a stocker le numero du joueur actuel
let t = 0; //sert de compteur pour le rock black
let p = 0; //sert de compteur pour le rock white
let a; // a et b servent a stocker la position de l' element cliqué actuel
let b;
let x; // x et y servent a stocker la position de l' element cliqué precedent
let y;
let namePion; //sert a stocker le nom du pion selectionné
let rockActive = false;
let tallRock = false;
let littleRock = false;

//activer le tour du joueur 1 au depart
actifJ1.classList.add('actif');

for (let i = 0; i < 8; i++) {
    damier.push([0, 0, 0, 0, 0, 0, 0, 0]);
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        damier[i][j] = document.querySelector(`#box-${i}-${j}`)
    }
}

for (let tableau of damier) {
    for (let element of tableau) {
        element.onclick = (event) => {
            console.log('Element :  ', element)
            a = parseInt(element.id.split('-')[1]);
            b = parseInt(element.id.split('-')[2]);
            if (player === 1) {
                if (!active) {
                    if (element.classList.contains('j-1')) {
                        if (!active && canMove(element)) {
                            active = true;
                            x = a; // x et y servent a stocker la position de l' element cliqué precedent
                            y = b;

                            namePion = damier[a][b].className.split(' ')[2];
                            console.log('Nom du pion', namePion);
                            console.log('element actuel : ', element);
                            console.log(active)

                            //Pour le rock
                            if (element.classList.contains('king-Black')) {
                                rockActive = true;
                                console.log('rock active')
                            }

                        } else {
                            alert("Ce n' est pas votre pion blabal 1");
                        }
                    }
                } else if (active) {
                    if (element.classList && element.classList.contains('path')) {

                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');

                        //On enleve le pion sur la case clickée precedent
                        damier[x][y].classList.remove(namePion);
                        //On ajoute le pion sur l' element clickée actuel
                        damier[a][b].classList.add(namePion);

                        //On enleve la class 'none' sur l' element clickée actuel et on ajoute l' ajoute à l' element clickée actuel
                        damier[x][y].classList.add('none');
                        damier[x][y].classList.remove('j-1');
                        damier[a][b].classList.remove('none');
                        damier[a][b].classList.add('j-1');


                        if (rockActive) {
                            if ((y - b) == 2 && t === 0) {
                                damier[0][2].classList.add('tour-Black');
                                damier[0][0].classList.remove('tour-Black');

                                damier[0][0].classList.add('none');
                                damier[0][0].classList.remove('j-1');
                                damier[0][2].classList.remove('none');
                                damier[0][2].classList.add('j-1');
                                rockActive = false;
                                littleRock = true;
                                t++;
                                console.log('rock done')
                            } else if (y - b == -2 && t === 0) {
                                damier[0][4].classList.add('tour-Black');
                                damier[0][7].classList.remove('tour-Black');

                                damier[0][7].classList.add('none');
                                damier[0][7].classList.remove('j-1');
                                damier[0][4].classList.remove('none');
                                damier[0][4].classList.add('j-1');
                                rockActive = false;
                                tallRock = true;
                                t++;
                                console.log('rock done')
                            }
                            t++;
                        }

                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                        if (checkEchec('Black', 'White', 2)) {
                            alert('Vous ne pouvez pas faire ce deplacement car vous avez un echec au Roi Black');
                            //On remet le pion où il etait
                            damier[x][y].classList.add(namePion);
                            damier[a][b].classList.remove(namePion);

                            damier[x][y].classList.remove('none');
                            damier[x][y].classList.add('j-1');
                            damier[a][b].classList.add('none');
                            damier[a][b].classList.remove('j-1');

                            active = false;
                            player = 1;
                            rockActive = false;
                        } else {
                            if (checkEchec('White', 'Black', 1)) {
                                alert('Echec au Roi White');
                            }
                            actifJ1.classList.remove('actif');
                            actifJ2.classList.add('actif');
                            back.onclick = (e) => {
                                damier[x][y].classList.add(namePion);
                                damier[a][b].classList.remove(namePion);

                                damier[x][y].classList.remove('none');
                                damier[x][y].classList.add('j-1');
                                damier[a][b].classList.add('none');
                                damier[a][b].classList.remove('j-1');

                                if (tallRock) {
                                    damier[0][4].classList.remove('tour-Black');
                                    damier[0][7].classList.add('tour-Black');

                                    damier[0][7].classList.remove('none');
                                    damier[0][7].classList.add('j-1');
                                    damier[0][4].classList.add('none');
                                    damier[0][4].classList.remove('j-1');
                                    t = 0;
                                    tallRock = false;
                                } else if (littleRock) {
                                    damier[0][2].classList.remove('tour-Black');
                                    damier[0][0].classList.add('tour-Black');

                                    damier[0][0].classList.remove('none');
                                    damier[0][0].classList.add('j-1');
                                    damier[0][2].classList.add('none');
                                    damier[0][2].classList.remove('j-1');
                                    t = 0;
                                    littleRock = false;
                                }

                                active = false;
                                player = 1;
                                rockActive = false;
                                actifJ1.classList.add('actif');
                                actifJ2.classList.remove('actif');
                            }
                            active = false;
                            player = 2;

                            rockActive = false;

                            if (element.classList.contains('king-Black')) {
                                rock = false;
                            }
                        }


                    } else if (element.classList.contains('attack')) {
                        let namePionAdverse = element.className.split(" ")[2];
                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');

                        // console.log(namePionAdverse)
                        damier[x][y].classList.remove(namePion);
                        damier[a][b].classList.remove(namePionAdverse);
                        damier[a][b].classList.add(namePion);

                        damier[x][y].classList.add('none');
                        damier[x][y].classList.remove('j-1');
                        // damier[a][b].classList.remove('none');
                        damier[a][b].classList.add('j-1');
                        damier[a][b].classList.remove('j-2');

                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                        if (checkEchec('Black', 'White', 2)) {
                            alert('Vous ne pouvez pas faire ce deplacement car vous avez un echec au Roi Black');

                            damier[x][y].classList.add(namePion);
                            damier[a][b].classList.add(namePionAdverse);
                            damier[a][b].classList.remove(namePion);

                            damier[x][y].classList.remove('none');
                            damier[x][y].classList.add('j-1');
                            damier[a][b].classList.remove('j-1');
                            damier[a][b].classList.add('j-2');

                            active = false;
                            player = 1;
                            rockActive = false;
                        } else {
                            if (checkEchec('White', 'Black', 1)) {
                                alert('Echec au Roi White');
                            }
                            actifJ1.classList.remove('actif');
                            actifJ2.classList.add('actif');
                            active = false;
                            player = 2;
                            rockActive = false;
                            back.onclick = (e) => {
                                damier[x][y].classList.add(namePion);
                                damier[a][b].classList.add(namePionAdverse);
                                damier[a][b].classList.remove(namePion);

                                damier[x][y].classList.remove('none');
                                damier[x][y].classList.add('j-1');
                                damier[a][b].classList.remove('j-1');
                                damier[a][b].classList.add('j-2');

                                active = false;
                                player = 1;
                                rockActive = false;
                                actifJ1.classList.add('actif');
                                actifJ2.classList.remove('actif');
                            }
                            if (element.classList.contains('king-Black')) {
                                rock = false;
                            }

                        }

                    }
                    //Si on change de pion à deplacer
                    else if (a == x && b == y) {
                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');
                        active = false;
                        rockActive = false;
                        rock = true;

                        //On remove juste les chemins que peuvent prendre notre pion
                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                    } else {
                        event.preventDefault();
                        alert('Erreur, vous pouvez pas vous deplacer là');
                    }
                }

            } else if (player === 2) {
                if (!active) {
                    if (element.classList.contains('j-2')) {
                        // console.log('Peut se deplacer', canMove(element));
                        if (!active && canMove(element)) {
                            active = true;
                            x = a; // x et y servent a stocker la position de l' element cliqué precedent
                            y = b;
                            console.log('Done')

                            namePion = damier[a][b].className.split(' ')[2];
                            // console.log(path);
                            console.log('Nom du pion', namePion);
                            console.log('element actuel : ', element)

                            if (element.classList.contains('king-White')) {
                                rockActive = true;
                            }
                        } else {
                            alert("Ce n'est pas votre pion blabla 2");
                        }
                    }
                } else if (active) {
                    if (element.classList.contains('path')) {
                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');

                        //On enleve le pion sur la case clickée precedent
                        damier[x][y].classList.remove(namePion);
                        //On ajoute le pion sur l' element clickée actuel
                        damier[a][b].classList.add(namePion);

                        //On enleve la class 'none' sur l' element clickée actuel et on ajoute l' ajoute à l' element clickée actuel
                        damier[x][y].classList.add('none');
                        damier[x][y].classList.remove('j-2');
                        damier[a][b].classList.remove('none');
                        damier[a][b].classList.add('j-2');

                        if (rockActive) {
                            if ((y - b) == 2 && p === 0) {
                                damier[7][2].classList.add('tour-White');
                                damier[7][0].classList.remove('tour-White');

                                damier[7][0].classList.add('none');
                                damier[7][0].classList.remove('j-2');
                                damier[7][2].classList.remove('none');
                                damier[7][2].classList.add('j-2');
                                rockActive = false;
                                littleRock = true;
                                p++;
                            } else if (y - b == -2 && p === 0) {
                                damier[7][4].classList.add('tour-White');
                                damier[7][7].classList.remove('tour-White');

                                damier[7][7].classList.add('none');
                                damier[7][7].classList.remove('j-2');
                                damier[7][4].classList.remove('none');
                                damier[7][4].classList.add('j-2');
                                rockActive = false;
                                tallRock = true;
                                p++;
                            }
                        }

                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                        if (checkEchec('White', 'Black', 2)) {
                            alert('Vous ne pouvez pas faire ce deplacement car vous avez un echec au Roi White');

                            damier[x][y].classList.add(namePion);
                            damier[a][b].classList.remove(namePion);

                            damier[x][y].classList.remove('none');
                            damier[x][y].classList.add('j-2');
                            damier[a][b].classList.add('none');
                            damier[a][b].classList.remove('j-2');

                            active = false;
                            player = 2;
                            rockActive = false;
                        } else {
                            if (checkEchec('Black', 'White', 2)) {
                                alert('Echec au Roi Black');
                            }
                            actifJ2.classList.remove('actif');
                            actifJ1.classList.add('actif');
                            active = false;
                            player = 1;

                            rockActive = false;
                            back.onclick = (e) => {
                                damier[x][y].classList.add(namePion);
                                damier[a][b].classList.remove(namePion);

                                damier[x][y].classList.remove('none');
                                damier[x][y].classList.add('j-2');
                                damier[a][b].classList.add('none');
                                damier[a][b].classList.remove('j-2');
                                actifJ2.classList.add('actif');
                                actifJ1.classList.remove('actif');

                                if (tallRock) {
                                    damier[7][4].classList.remove('tour-White');
                                    damier[7][7].classList.add('tour-White');

                                    damier[7][7].classList.remove('none');
                                    damier[7][7].classList.add('j-2');
                                    damier[7][4].classList.add('none');
                                    damier[7][4].classList.remove('j-2');
                                    p = 0;
                                } else if (littleRock) {
                                    damier[7][2].classList.remove('tour-White');
                                    damier[7][0].classList.add('tour-White');

                                    damier[7][0].classList.remove('none');
                                    damier[7][0].classList.add('j-2');
                                    damier[7][2].classList.add('none');
                                    damier[7][2].classList.remove('j-2');
                                    p = 0;
                                }

                                active = false;
                                player = 2;
                                rockActive = false;
                            }
                            if (element.classList.contains('king-Black')) {
                                rock = false;
                            }

                        }
                    } else if (element.classList.contains('attack')) {
                        let namePionAdverse = element.className.split(" ")[2];
                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');

                        damier[x][y].classList.remove(namePion);
                        damier[a][b].classList.remove(namePionAdverse);
                        damier[a][b].classList.add(namePion);

                        damier[x][y].classList.add('none');
                        damier[x][y].classList.remove('j-2');
                        damier[a][b].classList.add('j-2');
                        damier[a][b].classList.remove('j-1');

                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                        if (checkEchec('White', 'Black', 2)) {
                            alert('Vous ne pouvez pas faire ce deplacement car vous avez un echec au Roi White');

                            damier[x][y].classList.add(namePion);
                            damier[a][b].classList.add(namePionAdverse);
                            damier[a][b].classList.remove(namePion);

                            damier[x][y].classList.remove('none');
                            damier[x][y].classList.add('j-2');
                            damier[a][b].classList.remove('j-2');
                            damier[a][b].classList.add('j-1');

                            active = false;
                            player = 2;
                            rockActive = false;
                        } else {
                            if (checkEchec('Black', 'White', 2)) {
                                alert('Echec au Roi Black');
                            }
                            actifJ2.classList.remove('actif');
                            actifJ1.classList.add('actif');
                            //Quand le joueur annule son deplacement
                            back.onclick = (e) => {
                                damier[x][y].classList.add(namePion);
                                damier[a][b].classList.remove(namePion);
                                damier[a][b].classList.add(namePionAdverse);

                                damier[x][y].classList.remove('none');
                                damier[x][y].classList.add('j-2');
                                damier[a][b].classList.remove('j-2');
                                damier[a][b].classList.add('j-1');

                                actifJ2.classList.add('actif');
                                actifJ1.classList.remove('actif');

                                active = false;
                                player = 2;
                                rockActive = false;
                            }
                            if (element.classList.contains('king-Black')) {
                                rock = false;
                            }
                            active = false;
                            player = 1;

                            rockActive = false;
                        }

                    } else if (a == x && b == y) {
                        let clickedPath = document.querySelectorAll('.path');
                        let clickedAttack = document.querySelectorAll('.attack');
                        active = false;
                        rock = true;

                        //On remove juste les chemins que peuvent prendre notre pion
                        for (let element of clickedPath) {
                            element.classList.remove('path');
                        }

                        for (let element of clickedAttack) {
                            element.classList.remove('attack');
                        }

                    }
                }
            } else {
                alert("Ce n' est pas votre pion blabla 3");
            }
        }
    }
}