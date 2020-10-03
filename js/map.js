initializeMap();

function initializeMap() {
    let map = L.map('map').setView([47.2692124, 11.4041024], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    drawStates(map);
}

function drawStates(map) {
    fetch('data/bezirke_999_geo.json', {mode:'no-cors'})
        .then(response => response.json())
        .then(data =>
            L.geoJSON(data, {
                style: {
                    "color": "#ff0000",
                    "opacity": 0.5
                },
                onEachFeature: function (feature, layer) {
                    // https://stackoverflow.com/questions/42907877/leaflet-js-geojson-labels/42916690
                    layer.on({
                        mouseover: function () {
                            this.setStyle({
                                'fillColor': '#00ff00',
                            });
                        },
                        mouseout: function () {
                            this.setStyle({
                                'fillColor': '#ff0000',
                            });
                        },
                        click: function () {
                            alert('Clicked on ' + feature.properties.name)
                        }
                    });
                    layer.bindTooltip(feature.properties.name, {permanent: true, direction: 'center', className: 'label'}); 
                }
            }).addTo(map)
        );
}