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

