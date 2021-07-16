function checkEchec(color, colorAdverse, player) {
    let u;
    let v;
    let i;
    let j;
    for (let tableau of damier) {
        for (let element of tableau) {
            if (element.classList && element.classList.contains(`king-${color}`)) {
                i = parseInt(element.id.split('-')[1]);
                j = parseInt(element.id.split('-')[2]);
            }
        }
    }
    console.log('i : ', i);
    console.log('j : ', j);


    // if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`j-${player}`) || (i - 1) >= 0 && damier[i - 1][j].classList.contains(`j-${player}`) || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`j-${player}`) || (j - 1) >= 0 && damier[i][j - 1].classList.contains(`j-${player}`) || (j + 1) < 8 && damier[i][j + 1].classList.contains(`j-${player}`) || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`j-${player}`) || (i + 1) < 8 && damier[i + 1][j].classList.contains(`j-${player}`) || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`j-${player}`)) {
    console.log('debut du recherche')
        //Pour le queen
    if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((i - 1) >= 0 && damier[i - 1][j].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((j - 1) >= 0 && damier[i][j - 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((j + 1) < 8 && damier[i][j + 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && damier[i + 1][j].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`queen-${colorAdverse}`)) {
        return true;
    }

    /************************************************************************************************************************************/
    //Pour le chevalier
    else if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    } else if (((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains(`chevalier-${colorAdverse}`)) {
        return true;
    }

    /****************************************************************************************************************************************/
    //Pour les pions
    else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`pion-${colorAdverse}`)) {
        if (colorAdverse === 'White') {
            return true;
        }
    } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`pion-${colorAdverse}`)) {
        if (colorAdverse === 'White') {
            return true;
        }
    } else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`pion-${colorAdverse}`)) {
        if (colorAdverse === 'Black') {
            return true;
        }
    } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`pion-${colorAdverse}`)) {
        if (color === 'Black') {
            return true;
        }
    }

    /***********************************************************************************************************************************/
    //Pour le tour
    else if ((j + 1) < 8 && damier[i][j + 1].classList.contains(`tour-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && damier[i + 1][j].classList.contains(`tour-${colorAdverse}`)) {
        return true;
    } else if ((i - 1) >= 0 && damier[i - 1][j].classList.contains(`tour-${colorAdverse}`)) {
        return true;
    } else if ((j - 1) >= 0 && damier[i][j - 1].classList.contains(`tour-${colorAdverse}`)) {
        return true;
    }


    /*************************************************************************************************************************************/
    //Pour le fou
    else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`fou-${colorAdverse}`)) {
        return true;
    } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`fou-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`fou-${colorAdverse}`)) {
        return true;
    } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`fou-${colorAdverse}`)) {
        return true;
    }

    /****************************************************************************************************************************************/
    //Pour les tours, fou et la reine
    else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
        u = i;
        v = j;
        while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
            i--;
            j--;
        }
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains(`fou-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
            i--;
        }
        if ((i - 1) >= 0 && damier[i - 1][j].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i - 1) >= 0 && damier[i - 1][j].classList.contains(`tour-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
            i--;
            j++;
        }
        if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains(`fou-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
            j--;
        }
        if ((j - 1) >= 0 && damier[i][j - 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((j - 1) >= 0 && damier[i][j - 1].classList.contains(`tour-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
            j++;
        }
        if ((j + 1) < 8 && damier[i][j + 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((j + 1) < 8 && damier[i][j + 1].classList.contains(`tour-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
            i++;
            j--;
        }
        if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains(`fou-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
            i++;
        }
        if ((i + 1) < 8 && damier[i + 1][j].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i + 1) < 8 && damier[i + 1][j].classList.contains(`tour-${colorAdverse}`)) {
            return true;
        }
        i = u;
        j = v;

        while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
            i++;
            j++;
        }
        if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`queen-${colorAdverse}`)) {
            return true;
        } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains(`fou-${colorAdverse}`)) {
            return true;
        }
    }
    return false;
}



function ZoneConfortKing(a, b, colorAdverse) {
    if (damier[a - 1][b - 1].classList.contains(`king-${colorAdverse}`) || damier[a - 1][b].classList.contains(`king-${colorAdverse}`) || damier[a - 1][b + 1].classList.contains(`king-${colorAdverse}`) || damier[a][b - 1].classList.contains(`king-${colorAdverse}`) || damier[a][b + 1].classList.contains(`king-${colorAdverse}`) || damier[a + 1][b - 1].classList.contains(`king-${colorAdverse}`) || damier[a + 1][b].classList.contains(`king-${colorAdverse}`) || damier[a + 1][b + 1].classList.contains(`king-${colorAdverse}`)) {
        return false;
    } else {
        return true;
    }
}