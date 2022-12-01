function getNewGridSquare(blackList, index) {
    const newSquare = document.createElement('div');

    newSquare.classList.add('ms_square', 'd-flex');

    newSquare.addEventListener('click', function(){
        if ( blackList.includes(index) ) {
            alert('BOOM! Hai perso dopo aver accettato qusto messaggio schiaccia play per iniziare una nuova partita');
        } else {
            newSquare.classList.add('clicked');
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