function randomizeClassement() {
    const blasons = [
        document.querySelector('img[alt="blason 1"]'),
        document.querySelector('img[alt="blason 2"]'),
        document.querySelector('img[alt="blason 3"]'),
        document.querySelector('img[alt="blason 4"]')
    ];
    const resultatsContainer = document.querySelector('.resultats');

    // Shuffle the blasons
    const shuffledBlasons = blasons.sort(() => Math.random() - 0.5);

    // Clear previous results
    resultatsContainer.innerHTML = '';

    // Append each blason to the results container
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

le clear vide le container pour être sûr que le prochain tour soit propre

la function .cloneNode c'est pour que chaque mélange-blasons, après j'avoue que chat gpt m'a 
aider pour le const clone,  c'est pour ne pas toucher aux blasons d'origine du DOM

la function .appendChild ajoute le clone du blason au container des résultats 

en gros et si j'ai bien compris, c'est une méthode qui ajoute la copie de chaque blason mélangé à l'intérieur du container
*/ 

