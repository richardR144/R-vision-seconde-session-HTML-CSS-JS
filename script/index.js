/* Fonction pour enregistrer les inputs dans le local-storage

je sélectionne tous les éléments de la page qui ont la class "input",
je les stocke dans une variable inputs.querySelectorAll, après je fais un foreach
sur input et index, j'utilise la méthode "localStorage.setItem" qui permet 
de stocker mes données dans le local-storage, 'input${index + 1} clé uniq rajoute +1 à 
l'élément (input1,input2, etc),l'input.value c'est sa valeur

//Idem pour loadnputs(), sauf que "localStorage.getItem" est une méthode pour récupérer les données stockées dans mon local-storage
  "||"(OU) c'est si la valeur récupérée est NULL (cad si clé n'éxiste pas), du coup la valeur par défaut est vide "''"
*/
function saveInputs() {
    const inputs = document.querySelectorAll('.input');
    const inputs = document.querySelectorAll('.scores');
    inputs.forEach((input, index) => {
       localStorage.setItem('input${index + 1}', input.value);
    });
    //pense aux MAJ les scores cumulés + chargement page
    updateTotalScores();
}

// Fonction pour charger les inputs depuis le local storage
function loadInputs() {
    const inputs = document.querySelectorAll('.input');
    const inputs = document.querySelectorAll('.score');
    inputs.forEach((input, index) => {
        input.value = localStorage.getItem(`input${index + 1}`) || '';
    });
    //MAJ les scores au chargement de la page
    updateTotalScores();
}
// je déclare mes scores initiaux pour chaque maison à 0
function updateTotalScores() {
    let gryffondorScore = 0;
    let poufsouffleScore = 0;
    let serpentardScore = 0;
    let serdaigleScore = 0;
//je fais une boucle pour chacun des class .score et les places dans une sorte de collection scores

    const scores = document.querySelectorAll('.score');
    /*cette boucle foreach parcourt tous les éléments et pour chacun des éléments 
    elle convertie en entier avec "parseInt(score.value)", else if, sinon si, ça affiche 0 grâce à (OU) ||, ensuite elle 
    vérifie avec if si l'index est à 0, la valeur est ajoutée au score de Griffondord, si 
    c'est 1 c'est Poufsouffle, 2 c'est Serpentard et 3 pour Serdaigle 
    */
        scores.forEach((score, index) => {
        const scoreValue = parseInt(score.value) || 0;
            if (index === 0) {
                gryffondorScore += scoreValue;
            } else if (index === 1) {
                poufsouffleScore += scoreValue;
            } else if (index === 2) {
                serpentardScore += scoreValue;
            } else if (index === 3) {
                serdaigleScore += scoreValue;
            }
        });

// on récupère le get élément par son Id et on les maj
    document.getElementById('gryffondor-score').textContent = gryffondorScore;
    document.getElementById('poufsouffle-score').textContent = poufsouffleScore;
    document.getElementById('serpentard-score').textContent = serpentardScore;
    document.getElementById('serdaigle-score').textContent = serdaigleScore;
}

// Fonction pour mélanger les blasons aléatoirement
function randomizeClassement() {
    const blasons = [
        document.querySelector('img[alt="blason 1"]'),
        document.querySelector('img[alt="blason 2"]'),
        document.querySelector('img[alt="blason 3"]'),
        document.querySelector('img[alt="blason 4"]')
    ];
    const resultatsContainer = document.querySelector('.resultats');

    // Mélanger les blasons
    const shuffledBlasons = blasons.sort(() => Math.random() - 0.5);

    // Vider les résultats précédents
    resultatsContainer.innerHTML = '';

    // Ajouter chaque blason mélangé au conteneur de résultats une seule fois
    shuffledBlasons.forEach(blason => {
        const clone = blason.cloneNode(true);
        resultatsContainer.appendChild(clone);
    });
}

/*j'ai créé une function pour la liste des blasons sous forme de tableau blasons
avec les attributs "alt" spécifié dans mon html, ensuite, j'ai sélectionné l'élément 
html avec la class resultats où les blasons mélangés seront affiché (const resultatContainer)

shuffle: ça mélange les blasons aléatoirement. (function .sort et math.random) et réorganise 
le hasard, ché pas comment dire!!), 

le clear: vide le container pour être sûr que le prochain tour soit propre

la function .cloneNode (après j'avoue que chat-gpt m'a 
aider pour le const clone, j'en avait parler avec David),  c'est pour ne pas toucher aux blasons d'origine du DOM

la function .appendChild ajoute le clone du blason au container des résultats 

en gros, c'est une méthode qui ajoute la copie de chaque blason mélangé à l'intérieur du container
*/



// Fonction pour remettre les blasons dans l'ordre initial "j'ai clairement fait un copié-coller de mon randomize jsqu'au ('.resultats')""
function resetClassement() {
    const blasons = [
        document.querySelector('img[alt="blason 1"]'),
        document.querySelector('img[alt="blason 2"]'),
        document.querySelector('img[alt="blason 3"]'),
        document.querySelector('img[alt="blason 4"]')
    ];
    const resultatsContainer = document.querySelector('.resultats');

    // Vider les résultats précédents d'où les guillemets sans rien dedans
    resultatsContainer.innerHTML = '';

    // Ajouter chaque blason dans l'ordre initial au conteneur de résultats 
    blasons.forEach(blason => {
        const clone = blason.cloneNode(true);
        resultatsContainer.appendChild(clone);
    });
}


window.addEventListener("load", loadInputs);

/*On appelle "loadInputs" lors du chargement de la page pour 
s'assurer que les valeurs des inputs sont restaurées lorsqu'on ré-ouvre la page 
*/
