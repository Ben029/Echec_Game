function checkEchec(element) {
    //i et j servent a stocker la positon de l' element clické
    let i = parseInt(element.id.split('-')[1]);
    let j = parseInt(element.id.split('-')[2]);
    //namePion sert a stocker le nom du pion pour pouvoir manipuler l' element clické
    let namePion = element.className.split(" ")[2];

    switch (namePion) {
        case 'pion-Black':
            {
                //On teste si le pion du joueur 1 fait un echec au roi blanc
                if (damier[i + 1][j - 1].classList.contains('king-White') || damier[i + 1][j + 1].classList.contains('king-White')) {
                    return true;
                } else {
                    return false;
                }
            }
        case 'tour-Black':
            {
                if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-2')) || ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-2')) || ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2')) || ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2'))) {
                    u = i;
                    v = j;
                    while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                        j++;
                    }
                    //On teste si le pion du joueur 1 fait un echec au roi blanc
                    if ((j + 1) < 8 && damier[i][j + 1].classList.contains('king-White')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                        i++;
                    }
                    if ((i + 1) < 8 && damier[i + 1][j].classList.contains('king-White')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                        i--;
                    }
                    if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('king-White')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                        j--;
                    }
                    if ((j - 1) >= 0 && damier[i][j + 1].classList.contains('king-White')) {
                        return true;
                    }
                    i = u;
                    j = v;
                } else {
                    return false;
                }
            }
        case 'chevalier-Black':
            {
                if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('king-White') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('king-White') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('king-White') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('king-White') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('king-White') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('king-White') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('king-White') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('king-White')) {
                    return true;
                } else {
                    return false;
                }
            }
        case 'fou-Black':
            {
                if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-White') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-White') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-White') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-White')) {
                    u = i;
                    v = j;
                    while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                        i--;
                        j--;
                    }
                    if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                        i--;
                        j++;
                    }
                    if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                        i++;
                        j--;
                    }
                    if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                        i++;
                        j++;
                    }
                    if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
                        return true;
                    }
                    i = u;
                    j = v;

                    return false;
                }
            }
        case 'queen-Black':
            {
                if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-White') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('king-White') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-White') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('king-White') || (j + 1) < 8 && damier[i][j + 1].classList.contains('king-White') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-White') || (i + 1) < 8 && damier[i + 1][j].classList.contains('king-White') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-White')) {
                    u = i;
                    v = j;
                    while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                        i--;
                        j--;
                    }
                    if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                        i--;
                    }
                    if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                        i--;
                        j++;
                    }
                    if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                        j--;
                    }
                    if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                        j++;
                    }
                    if ((j + 1) < 8 && damier[i][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                        i++;
                        j--;
                    }
                    if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                        i++;
                    }
                    if ((i + 1) < 8 && damier[i + 1][j].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                        i++;
                        j++;
                    }
                    if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    return false;
                }
            }
            //Pour les pions blancs
        case 'pion-White':
            {
                //On teste si le pion du joueur 1 fait un echec au roi blanc
                if (damier[i + 1][j - 1].classList.contains('king-Black') || damier[i + 1][j + 1].classList.contains('king-Black')) {
                    return true;
                } else {
                    return false;
                }
            }
        case 'tour-White':
            {
                if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || ((j + 1) < 8 && damier[i][j + 1].classList.contains('king-Black')) || ((i + 1) < 8 && damier[i + 1][j].classList.contains('king-Black')) || ((i - 1) >= 0 && damier[i - 1][j].classList.contains('king-Black')) || ((j - 1) >= 0 && damier[i][j - 1].classList.contains('king-Black'))) {
                    u = i;
                    v = j;
                    while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                        j++;
                    }
                    //On teste si le pion du joueur 1 fait un echec au roi Black
                    if ((j + 1) < 8 && damier[i][j + 1].classList.contains('king-Black')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                        i++;
                    }
                    if ((i + 1) < 8 && damier[i + 1][j].classList.contains('king-Black')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                        i--;
                    }
                    if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('king-Black')) {
                        return true;
                    }
                    i = u;
                    j = v;
                    while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                        j--;
                    }
                    if ((j - 1) >= 0 && damier[i][j + 1].classList.contains('king-Black')) {
                        return true;
                    }
                    i = u;
                    j = v;
                } else {
                    return false;
                }
            }
        case 'chevalier-White':
            {
                if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('king-Black') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('king-Black') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('king-Black') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('king-Black') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('king-Black') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('king-Black') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('king-Black') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('king-Black')) {
                    return true;
                } else {
                    return false;
                }
            }
        case 'fou-White':
            {
                if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') && (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-Black') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-Black') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-Black') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-Black')) {
                    u = i;
                    v = j;
                    while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                        i--;
                        j--;
                    }
                    if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-Black')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                        i--;
                        j++;
                    }
                    if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-Black')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                        i++;
                        j--;
                    }
                    if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-Black')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                        i++;
                        j++;
                    }
                    if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-Black')) {
                        return true;
                    }
                    i = u;
                    j = v;

                    return false;
                }
            }
        case 'queen-White':
            {
                if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') && (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-Black') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('king-Black') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-Black') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('king-Black') || (j + 1) < 8 && damier[i][j + 1].classList.contains('king-Black') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-Black') || (i + 1) < 8 && damier[i + 1][j].classList.contains('king-Black') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-Black')) {
                    u = i;
                    v = j;
                    while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                        i--;
                        j--;
                    }
                    if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                        i--;
                    }
                    if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                        i--;
                        j++;
                    }
                    if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                        j--;
                    }
                    if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                        j++;
                    }
                    if ((j + 1) < 8 && damier[i][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                        i++;
                        j--;
                    }
                    if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                        i++;
                    }
                    if ((i + 1) < 8 && damier[i + 1][j].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                        i++;
                        j++;
                    }
                    if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('king-White')) {
                        return true;
                    }

                    i = u;
                    j = v;
                    return false;
                }
            }
    }
}