let municipalities = null;
let currentMunicipality = null;

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
    currentMunicipality = municipalities[index].properties;

    let gameBox = document.getElementById('game-box');
    let label = document.getElementById('municipality-name');
    gameBox.classList.remove('no-display');
    label.innerText = currentMunicipality.name;
}

function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function municipalityClicked(municipality) {
    let clickedLabel = document.getElementById('clicked-municipality');
    clickedLabel.innerText = municipality.name;
    let divClickedLabel = document.getElementById('game-clicked');
    divClickedLabel.classList.remove('no-display');
    divClickedLabel.classList.add('display-inline-flex');

    if ((currentMunicipality != null) && (municipality.name == currentMunicipality.name)) {
        play();
    }
}

function toggleMenu() {
    let menu = document.getElementById('menu-content');
    menu.classList.toggle('no-display');
}