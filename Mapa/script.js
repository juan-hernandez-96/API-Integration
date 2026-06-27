// Crear mapa

const mapa = new ol.Map({
    target: 'map',

    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],

    view: new ol.View({
        center: ol.proj.fromLonLat([-104.9, 21.8]),
        zoom: 7
    })
});

mapa.on('click', function(evento){

    const coordenadas = ol.proj.toLonLat(
        evento.coordinate
    );

    const longitud = coordenadas[0];
    const latitud = coordenadas[1];

    fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitud}&lon=${longitud}`
    )
    .then(response => response.json())
    .then(data => {

        document.getElementById("info").innerHTML =
        `
        <b>Latitud:</b> ${latitud.toFixed(6)}
        <br>
        <b>Longitud:</b> ${longitud.toFixed(6)}
        <br><br>
        <b>Ubicación:</b>
        ${data.display_name}
        `;

    })
    .catch(error => {
        console.error(error);
    });

});