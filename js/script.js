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

    for ( i = 1; i <= 100; i++ ) {
        const gridSquare = getNewGridSquare();

        gridSquare.innerHTML = `<span class="fs-4 m-auto"> ${i} </span>`;

        grid.appendChild(gridSquare);
    }
})