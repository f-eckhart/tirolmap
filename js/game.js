let municipalities = null;
initGame();

function initGame() {
    fetch(dataSource, {mode:'no-cors'})
        .then(response => response.json())
        .then(data => {
            municipalities = data['features'];
            toggleLabels();
            play();
        });
}

function play() {
    let index = getRandomIndex(0, municipalities.length);
    let municipality = municipalities[index].properties;

    let gameBox = document.getElementById('game-box');
    let label = document.getElementById('municipality-name');
    gameBox.classList.remove('no-display');
    label.innerText = municipality.name;
}

function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}