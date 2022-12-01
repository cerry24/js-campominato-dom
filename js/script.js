function getNewGridSquare() {
    const newSquare = document.createElement('div');

    newSquare.classList.add('ms_square', 'd-flex');

    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('clicked');
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







const bombsPositions = [];
const btnPlay = document.getElementById('ms_btn-play');

btnPlay.addEventListener('click', function() {
    const main = document.querySelector('main');
    const grid = document.querySelector('div.ms_grid');

    main.classList.add('bg-aquamarine');

    grid.innerHTML = "";

    bombsPositions.length = 0;

    for ( i = 1; i <= 100; i++ ) {
        const gridSquare = getNewGridSquare();

        gridSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

        grid.appendChild(gridSquare);
    }

    while ( bombsPositions.length < 16 ) {
        getRandomUniqueNumber(bombsPositions, 1, 100)
    }
    
    console.log(bombsPositions);
})

