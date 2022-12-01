function getNewGridSquare(blackList, index) {
    const newSquare = document.createElement('div');
    score = 0;
    const scoreOutput = document.getElementById('score-board');

    scoreOutput.innerHTML = 'Il tuo punteggio &egrave;';

    newSquare.classList.add('ms_square', 'd-flex');

    newSquare.addEventListener('click', function(){
        score++;

        if ( blackList.includes(index) ) {
            alert(`BOOM!!! Hai perso!. Dopo aver accettato qusto messaggio schiaccia play per iniziare una nuova partita`);
        } else {
            newSquare.classList.add('clicked');
            scoreOutput.innerHTML = `Il tuo punteggio &egrave; ${score}`
        }

        if ( score === 84 ) {
            alert('Complimenti hai vinto!!! Dopo aver accettato qusto messaggio schiaccia play per iniziare una nuova partita')
        }
    })

    return newSquare;

}

function getRandomUniqueNumber(blackList, numMin, numMax) {
    let verify = false;
    let randomNum;

    while ( verify === false ) {
        randomNum = Math.floor( Math.random() * (numMax - numMin + 1) + numMin );
        
        if ( !blackList.includes(randomNum) ) {
            verify = true;
            
            blackList.push(randomNum);
        }

        return randomNum;
    }
}







const btnPlay = document.getElementById('ms_btn-play');

btnPlay.addEventListener('click', function() {
    const main = document.querySelector('main');
    const grid = document.querySelector('div.ms_grid');
    
    main.classList.add('bg-aquamarine');
    
    grid.innerHTML = "";
    
    const bombsPositions = [];
    let score;

    while ( bombsPositions.length < 16 ) {
        getRandomUniqueNumber(bombsPositions, 1, 100)
    }

    console.log(bombsPositions);

    for ( i = 1; i <= 100; i++ ) {
        const gridSquare = getNewGridSquare(bombsPositions, i);

        gridSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

        grid.appendChild(gridSquare);
    }

})