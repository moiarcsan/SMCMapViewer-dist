function initMap() {
	SMC.BASE_URL = "../"
	L.Icon.Default.imagePath = "../images";
	var map = SMC.map('map');
    map.setView([37.383333, -4.983333], 8);
    // Add base layer from OSM
    var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);
	// Add layers to control group
    var baseLayer = {
        "OpenStreetMap": OpenStreetMap_Mapnik
    };
	var leyenda = SMC.layerTreeControl(baseLayer, {
        collapsed: false
    }).addTo(map);

    var wfsMarkerLayer = SMC.wfstMarkerLayer({
        serverURL: "http://sir-libertador-apps:8080/geoserver/SmartCity/wfs",
        typeName: "SmartCity:aeropuertos",
        label: "Aeropuertos",
        outputFormat: "json"
    }).addTo(map);
}
window.onload = initMap;