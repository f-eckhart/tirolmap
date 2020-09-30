initializeMap();

function initializeMap() {
    let map = L.map('map').setView([47.2692124, 11.4041024], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    drawStates(map);
}

function drawStates(map) {
    fetch('data/laender_999_geo.json', {mode:'no-cors'})
        .then(response => response.json())
        .then(data =>
            L.geoJSON(data, {
                style: {
                    "color": "#ff0000",
                    "opacity": 0.5
                }
            }).addTo(map)
        );
}