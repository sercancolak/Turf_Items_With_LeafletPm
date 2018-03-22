var map = L.map('map').setView([39.1049116, 35.7104097], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);
var options = {
    position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
    drawMarker: true, // adds button to draw markers
    drawPolyline: true, // adds button to draw a polyline
    drawRectangle: true, // adds button to draw a rectangle
    drawPolygon: true, // adds button to draw a polygon
    drawCircle: true, // adds button to draw a cricle
    cutPolygon: true, // adds button to cut a hole in a polygon
    editMode: true, // adds button to toggle edit mode for all layers
    removalMode: true, // adds a button to remove layers
};
map.pm.addControls(options);
var PmFeatureGroup = L.featureGroup().addTo(map);
var secilen;
map.on('pm:create', function (e) {
    var latlngs = e.layer._latlngs;
    var latlng = e.layer._latlng;
    var coor = [];
    if (e.shape == "Poly" || e.shape == "Rectangle") {
        var length = latlngs[0].length;
        for (var i = 0; i < length; i++) {
            coor[i] = [latlngs[0][i].lat, latlngs[0][i].lng];
        }
        coor[length] = coor[0];
    }
    else if (e.shape == "Marker") {
        coor = [latlng.lat, latlng.lng];
    }

    else {
        var length = latlngs.length;
        for (var i = 0; i < length; i++) {
            coor[i] = [latlngs[i].lat, latlngs[i].lng];
        }
    }
    switch (secilen) {
        case "along":
            TurfItems.Measurement.along(coor);
            break;
        case "area":
            TurfItems.Measurement.area(coor);
            break;
        case "centerPolygon":
            TurfItems.Measurement.centerPolygon(coor);
            break;
        case "length":
            TurfItems.Measurement.length(coor);
            break;
        case "bezierSpline":
            TurfItems.Transformation.bezierSpline(coor);
            break;
        case "buffer":
            TurfItems.Transformation.buffer(coor);
            break;
        case "circle":
            TurfItems.Transformation.circle(coor);
            break;
        case "simplify":
            TurfItems.Transformation.simplify(coor);
            break;
        case "explode":
            TurfItems.FeatureConversion.explode(coor);
            break;
        case "lineToPolygon":
            TurfItems.FeatureConversion.lineToPolygon(coor);
            break;
        case "nearestPointOnLine":
            TurfItems.Misc.nearestPointOnLine(coor);
            break;
        case "toMercator":
            TurfItems.UnitConversion.toMercator(coor);
            break;
        case "toWgs84":
            TurfItems.UnitConversion.toWgs84(coor);
            break;
    }
});
