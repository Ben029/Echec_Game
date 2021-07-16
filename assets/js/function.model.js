function canMove(element) {
    let i = parseInt(element.id.split('-')[1]);
    let j = parseInt(element.id.split('-')[2]);
    let u = i;
    let v = j;

    if (element.classList.contains('pion-Black')) {
        if (damier[i + 1][j].classList.contains('none') || damier[i + 1][j - 1].classList.contains('j-2') || damier[i + 1][j + 1].classList.contains('j-2')) {
            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
            }
            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2')) {
                damier[i + 1][j - 1].classList.add('attack');
            }
            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
                damier[i + 1][j + 1].classList.add('attack');
            }
            if (i == 1 && damier[i + 2][j].classList.contains('none')) {
                damier[i + 2][j].classList.add('path');
            }

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('tour-Black')) {
        if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-2')) || ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-2')) || ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2')) || ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2'))) {
            u = i;
            v = j;
            while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
                j++;
            }
            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-2')) {
                damier[i][j + 1].classList.add('attack')
            }
            i = u;
            j = v;
            while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
                i++;
            }
            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-2')) {
                damier[i + 1][j].classList.add('attack')
            }
            i = u;
            j = v;
            while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
                i--;
            }
            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2')) {
                damier[i - 1][j].classList.add('attack')
            }
            i = u;
            j = v;
            while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
                j--;
            }
            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2')) {
                damier[i][j - 1].classList.add('attack')
            }
            i = u;
            j = v;
            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('chevalier-Black')) {
        if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('none') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('none') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('none') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('none') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('none') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('none') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('none') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('none') || ((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('j-2') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('j-2') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('j-2') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('j-2') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('j-2') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('j-2') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('j-2') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('j-2')) {

            if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('none')) {
                damier[i - 2][j - 1].classList.add('path');
            } else if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('j-2')) {
                damier[i - 2][j - 1].classList.add('attack');
            }

            if (((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('none')) {
                damier[i - 2][j + 1].classList.add('path');
            } else if (((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('j-2')) {
                damier[i - 2][j + 1].classList.add('attack');
            }

            if (((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('none')) {
                damier[i - 1][j - 2].classList.add('path');
            } else if (((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('j-2')) {
                damier[i - 1][j - 2].classList.add('attack');
            }

            if (((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('none')) {
                damier[i - 1][j + 2].classList.add('path');
            } else if (((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('j-2')) {
                damier[i - 1][j + 2].classList.add('attack');
            }

            if (((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('none')) {
                damier[i + 1][j - 2].classList.add('path');
            } else if (((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('j-2')) {
                damier[i + 1][j - 2].classList.add('attack');
            }

            if (((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('none')) {
                damier[i + 2][j - 1].classList.add('path');
            } else if (((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('j-2')) {
                damier[i + 2][j - 1].classList.add('attack');
            }

            if (((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('none')) {
                damier[i + 1][j + 2].classList.add('path');
            } else if (((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('j-2')) {
                damier[i + 1][j + 2].classList.add('attack');
            }

            if (((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('none')) {
                damier[i + 2][j + 1].classList.add('path');
            } else if (((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('j-2')) {
                damier[i + 2][j + 1].classList.add('attack');
            }

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('fou-Black')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
            u = i;
            v = j;
            while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
                i--;
                j--;
            }
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
                i--;
                j++;
            }
            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
                i++;
                j--;
            }
            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
                i++;
                j++;
            }
            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
                damier[i + 1][j + 1].classList.add('attack');
            }
            i = u;
            j = v;

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('king-Black')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2') || (j + 1) < 8 && damier[i][j + 1].classList.contains('j-2') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2') || (i + 1) < 8 && damier[i + 1][j].classList.contains('j-2') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
            } else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
            } else if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2')) {
                damier[i - 1][j].classList.add('attack');
            }

            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
            } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
            } else if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2')) {
                damier[i][j - 1].classList.add('attack');
            }

            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
            } else if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-2')) {
                damier[i][j + 1].classList.add('attack');
            }

            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
            } else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
            } else if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-2')) {
                damier[i + 1][j].classList.add('attack');
            }

            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
            } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
                damier[i + 1][j + 1].classList.add('attack');
            }

            //Pour le rock 
            if (t === 0 && (i == 0 && j == 3) && ((damier[i][j - 1].classList.contains('none') && damier[i][j - 2].classList.contains('none') && damier[i][j - 3].classList.contains('tour-Black')) || (damier[i][j + 1].classList.contains('none') && damier[i][j + 2].classList.contains('none') && damier[i][j + 3].classList.contains('none') && damier[i][j + 4].classList.contains('tour-Black')))) {
                if ((i == 0 && j == 3) && damier[i][j - 1].classList.contains('none') && damier[i][j - 2].classList.contains('none') && damier[i][j - 3].classList.contains('tour-Black')) {
                    damier[i][j - 2].classList.add('path');
                }
                if (damier[i][j + 1].classList.contains('none') && damier[i][j + 2].classList.contains('none') && damier[i][j + 3].classList.contains('none') && damier[i][j + 4].classList.contains('tour-Black')) {
                    damier[i][j + 2].classList.add('path');
                }
            }

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('queen-Black')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2') || (j + 1) < 8 && damier[i][j + 1].classList.contains('j-2') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2') || (i + 1) < 8 && damier[i + 1][j].classList.contains('j-2') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
            u = i;
            v = j;
            while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
                i--;
                j--;
            }
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-2')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
                i--;
            }
            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-2')) {
                damier[i - 1][j].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
                i--;
                j++;
            }
            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-2')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
                j--;
            }
            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-2')) {
                damier[i][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
                j++;
            }
            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-2')) {
                damier[i][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
                i++;
                j--;
            }
            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-2')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
                i++;
            }
            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-2')) {
                damier[i + 1][j].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
                i++;
                j++;
            }
            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-2')) {
                damier[i + 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            return true;
        } else {
            return false;
        }

        //  Pour les pions blancs

    } else if (element.classList.contains('pion-White')) {
        if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1')) || ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1'))) {
            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
            }
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1')) {
                damier[i - 1][j - 1].classList.add('attack');
            }
            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1')) {
                damier[i - 1][j + 1].classList.add('attack');
            }
            if (i == 6 && damier[i - 2][j].classList.contains('none')) {
                console.log('caca beeeeeee')
                damier[i - 2][j].classList.add('path');
            }
            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('tour-White')) {
        if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('j-1') || (i + 1) < 8 && damier[i + 1][j].classList.contains('j-1') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1')) {
            u = i;
            v = j;
            while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
                j++;
            }
            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-1')) {
                damier[i][j + 1].classList.add('attack')
            }
            i = u;
            j = v;
            while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
                console.log('caca bonne')
                i++;
            }
            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-1')) {
                damier[i + 1][j].classList.add('attack')
            }
            i = u;
            j = v;
            while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
                i--;
            }
            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1')) {
                damier[i - 1][j].classList.add('attack')
            }
            i = u;
            j = v;
            while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
                j--;
            }
            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1')) {
                damier[i][j - 1].classList.add('attack')
            }
            i = u;
            j = v;
            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('chevalier-White')) {
        if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('none') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('none') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('none') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('none') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('none') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('none') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('none') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('none') || ((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('j-1') || ((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('j-1') || ((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('j-1') || ((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('j-1') || ((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('j-1') || ((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('j-1') || ((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('j-1') || ((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('j-1')) {

            if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('none')) {
                damier[i - 2][j - 1].classList.add('path');
            } else if (((i - 2) >= 0 && (j - 1) >= 0) && damier[i - 2][j - 1].classList.contains('j-1')) {
                damier[i - 2][j - 1].classList.add('attack');
            }

            if (((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('none')) {
                damier[i - 2][j + 1].classList.add('path');
            } else if (((i - 2) >= 0 && (j + 1) < 8) && damier[i - 2][j + 1].classList.contains('j-1')) {
                damier[i - 2][j + 1].classList.add('attack');
            }

            if (((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('none')) {
                damier[i - 1][j - 2].classList.add('path');
            } else if (((i - 1) >= 0 && (j - 2) >= 0) && damier[i - 1][j - 2].classList.contains('j-1')) {
                damier[i - 1][j - 2].classList.add('attack');
            }

            if (((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('none')) {
                damier[i - 1][j + 2].classList.add('path');
            } else if (((i - 1) >= 0 && (j + 2) < 8) && damier[i - 1][j + 2].classList.contains('j-1')) {
                damier[i - 1][j + 2].classList.add('attack');
            }

            if (((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('none')) {
                damier[i + 1][j - 2].classList.add('path');
            } else if (((i + 1) < 8 && (j - 2) >= 0) && damier[i + 1][j - 2].classList.contains('j-1')) {
                damier[i + 1][j - 2].classList.add('attack');
            }

            if (((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('none')) {
                damier[i + 2][j - 1].classList.add('path');
            } else if (((i + 2) < 8 && (j - 1) >= 0) && damier[i + 2][j - 1].classList.contains('j-1')) {
                damier[i + 2][j - 1].classList.add('attack');
            }

            if (((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('none')) {
                damier[i + 1][j + 2].classList.add('path');
            } else if (((i + 1) < 8 && (j + 2) < 8) && damier[i + 1][j + 2].classList.contains('j-1')) {
                damier[i + 1][j + 2].classList.add('attack');
            }

            if (((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('none')) {
                damier[i + 2][j + 1].classList.add('path');
            } else if (((i + 2) < 8 && (j + 1) < 8) && damier[i + 2][j + 1].classList.contains('j-1')) {
                damier[i + 2][j + 1].classList.add('attack');
            }

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('fou-White')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
            u = i;
            v = j;
            while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
                i--;
                j--;
            }
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
                i--;
                j++;
            }
            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
                i++;
                j--;
            }
            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
                i++;
                j++;
            }
            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
                damier[i + 1][j + 1].classList.add('attack');
            }
            i = u;
            j = v;

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('king-White')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1') || (j + 1) < 8 && damier[i][j + 1].classList.contains('j-1') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1') || (i + 1) < 8 && damier[i + 1][j].classList.contains('j-1') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
            } else if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
            } else if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1')) {
                damier[i - 1][j].classList.add('attack');
            }

            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
            } else if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
            } else if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1')) {
                damier[i][j - 1].classList.add('attack');
            }

            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
            } else if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-1')) {
                damier[i][j + 1].classList.add('attack');
            }

            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
            } else if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
            } else if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-1')) {
                damier[i + 1][j].classList.add('attack');
            }

            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
            } else if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
                damier[i + 1][j + 1].classList.add('attack');
            }

            //Pour le rock 
            if (t === 0 && (i == 7 && j == 3) && ((damier[i][j - 1].classList.contains('none') && damier[i][j - 2].classList.contains('none') && damier[i][j - 3].classList.contains('tour-White')) || (damier[i][j + 1].classList.contains('none') && damier[i][j + 2].classList.contains('none') && damier[i][j + 3].classList.contains('none') && damier[i][j + 4].classList.contains('tour-White')))) {
                if ((i == 7 && j == 3) && damier[i][j - 1].classList.contains('none') && damier[i][j - 2].classList.contains('none') && damier[i][j - 3].classList.contains('tour-White')) {
                    damier[i][j - 2].classList.add('path');
                }
                if (damier[i][j + 1].classList.contains('none') && damier[i][j + 2].classList.contains('none') && damier[i][j + 3].classList.contains('none') && damier[i][j + 4].classList.contains('tour-White')) {
                    damier[i][j + 2].classList.add('path');
                }
            }

            return true;
        } else {
            return false;
        }
    } else if (element.classList.contains('queen-White')) {
        if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('none') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('none') || (j + 1) < 8 && damier[i][j + 1].classList.contains('none') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none') || (i + 1) < 8 && damier[i + 1][j].classList.contains('none') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none') || (i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1') || (i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1') || (i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1') || (j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1') || (j + 1) < 8 && damier[i][j + 1].classList.contains('j-1') || (i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1') || (i + 1) < 8 && damier[i + 1][j].classList.contains('j-1') || (i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
            u = i;
            v = j;
            while ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('none')) {
                damier[i - 1][j - 1].classList.add('path');
                i--;
                j--;
            }
            if ((i - 1) >= 0 && (j - 1) >= 0 && damier[i - 1][j - 1].classList.contains('j-1')) {
                damier[i - 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && damier[i - 1][j].classList.contains('none')) {
                damier[i - 1][j].classList.add('path');
                i--;
            }
            if ((i - 1) >= 0 && damier[i - 1][j].classList.contains('j-1')) {
                damier[i - 1][j].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('none')) {
                damier[i - 1][j + 1].classList.add('path');
                i--;
                j++;
            }
            if ((i - 1) >= 0 && (j + 1) < 8 && damier[i - 1][j + 1].classList.contains('j-1')) {
                damier[i - 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((j - 1) >= 0 && damier[i][j - 1].classList.contains('none')) {
                damier[i][j - 1].classList.add('path');
                j--;
            }
            if ((j - 1) >= 0 && damier[i][j - 1].classList.contains('j-1')) {
                damier[i][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((j + 1) < 8 && damier[i][j + 1].classList.contains('none')) {
                damier[i][j + 1].classList.add('path');
                j++;
            }
            if ((j + 1) < 8 && damier[i][j + 1].classList.contains('j-1')) {
                damier[i][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('none')) {
                damier[i + 1][j - 1].classList.add('path');
                i++;
                j--;
            }
            if ((i + 1) < 8 && (j - 1) >= 0 && damier[i + 1][j - 1].classList.contains('j-1')) {
                damier[i + 1][j - 1].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && damier[i + 1][j].classList.contains('none')) {
                damier[i + 1][j].classList.add('path');
                i++;
            }
            if ((i + 1) < 8 && damier[i + 1][j].classList.contains('j-1')) {
                damier[i + 1][j].classList.add('attack');
            }

            i = u;
            j = v;
            while ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('none')) {
                damier[i + 1][j + 1].classList.add('path');
                i++;
                j++;
            }
            if ((i + 1) < 8 && (j + 1) < 8 && damier[i + 1][j + 1].classList.contains('j-1')) {
                damier[i + 1][j + 1].classList.add('attack');
            }

            i = u;
            j = v;
            return true;
        } else {
            return false;
        }
    }
}