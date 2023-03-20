const calculator = document.querySelector('.calculatrice');

// l'ecran de la calculatrice
const screen = document.createElement('div');
screen.classList.add('ecran');
calculator.appendChild(screen)

// les touches de la calculatrice
const touchee = document.createElement('div');
touchee.classList.add('touches');
calculator.appendChild(touchee)

// ALL TOUCHES
const clear = document.createElement('button');
clear.classList.add('bouton')
clear.innerText = 'C';
touchee.appendChild(clear);
clear.setAttribute("data-key", "8");

const parin = document.createElement('button');
parin.classList.add('bouton')
parin.innerText = '(';
touchee.appendChild(parin);
parin.setAttribute("data-key", "53");

const parout = document.createElement('button');
parout.classList.add('bouton')
parout.innerText = ')';
touchee.appendChild(parout);
parout.setAttribute("data-key", "219");

const diviser = document.createElement('button');
diviser.classList.add('bouton')
diviser.innerText = '/';
touchee.appendChild(diviser);
diviser.setAttribute("data-key", "111");

const sept = document.createElement('button');
sept.classList.add('bouton')
sept.innerText = '7';
touchee.appendChild(sept);
sept.setAttribute("data-key", "103");

const huit = document.createElement('button');
huit.classList.add('bouton')
huit.innerText = '8';
touchee.appendChild(huit);
huit.setAttribute("data-key", "104");

const neuf = document.createElement('button');
neuf.classList.add('bouton')
neuf.innerText = '9';
touchee.appendChild(neuf);
neuf.setAttribute("data-key", "105");

const fois = document.createElement('button');
fois.classList.add('bouton')
fois.innerText = '*';
touchee.appendChild(fois);
fois.setAttribute("data-key", "106");

const quatre = document.createElement('button');
quatre.classList.add('bouton')
quatre.innerText = '4';
touchee.appendChild(quatre);
quatre.setAttribute("data-key", "100");

const cinq = document.createElement('button');
cinq.classList.add('bouton')
cinq.innerText = '5';
touchee.appendChild(cinq);
cinq.setAttribute("data-key", "101");

const six = document.createElement('button');
six.classList.add('bouton')
six.innerText = '6';
touchee.appendChild(six);
six.setAttribute("data-key", "102");

const moins = document.createElement('button');
moins.classList.add('bouton')
moins.innerText = '-';
touchee.appendChild(moins);
moins.setAttribute("data-key", "109");

const un = document.createElement('button');
un.classList.add('bouton')
un.innerText = '1';
touchee.appendChild(un);
un.setAttribute("data-key", "97");

const deux = document.createElement('button');
deux.classList.add('bouton')
deux.innerText = '2';
touchee.appendChild(deux);
deux.setAttribute("data-key", "98");

const trois = document.createElement('button');
trois.classList.add('bouton')
trois.innerText = '3';
touchee.appendChild(trois);
trois.setAttribute("data-key", "99");

const plus = document.createElement('button');
plus.classList.add('bouton')
plus.innerText = '+';
touchee.appendChild(plus);
plus.setAttribute("data-key", "107");

const zero = document.createElement('button');
zero.classList.add('bouton')
zero.innerText = '0';
touchee.appendChild(zero);
zero.setAttribute("data-key", "96");

const point = document.createElement('button');
point.classList.add('bouton')
point.innerText = '.';
touchee.appendChild(point);
point.setAttribute("data-key", "110");

const history = document.createElement('button');
history.classList.add('bouton')
history.innerText = "H";
touchee.appendChild(history);
history.dataset.key;
history.setAttribute("data-key", "72");

const egal = document.createElement('button');
egal.classList.add('bouton')
egal.innerText = "=";
touchee.appendChild(egal);
egal.setAttribute("data-key", "13");

// DOM
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
// const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

let tab = []

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                tab.push(screen.textContent + ' = ' + calcul)
                screen.textContent = calcul;
                break;
            case '72':
                console.log(tab);
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})