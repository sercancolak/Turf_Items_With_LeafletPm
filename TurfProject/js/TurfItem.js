var polygonColor = {
    color: '#3CBF57'
};
var lineColor = {
    color: '#3CBF57'
};
var TurfItems = (function (a) {
    a.Measurement = {
        along: function (coor) {
            var line = turf.lineString(coor);
            var options = { units: 'miles' };
            var along = turf.along(line, 200, options);
            L.polyline(line.geometry.coordinates).addTo(map);
            L.marker(along.geometry.coordinates).addTo(map);
        },
        area: function (coor) {
            var polygon = turf.polygon([coor]);
            var area = turf.area(polygon);
            L.polygon(polygon.geometry.coordinates, polygonColor).addTo(map);
            swal("Area: " + area);
        },
        center: function () {
            var features = turf.featureCollection([
                turf.point([39.710462, 30.505693]),
                turf.point([39.920233, 32.788832]),
                turf.point([38.718745, 30.484188])
            ]);
            var center = turf.center(features);
            for (var i = 0; i < features.features.length; i++) {
                L.marker(features.features[i].geometry.coordinates).addTo(map);
            }
            L.marker(center.geometry.coordinates).addTo(map);
        },
        centerPolygon: function (coor) {
            var polygon = turf.polygon([coor]);
            var center = turf.centerOfMass(polygon);
            L.polygon(polygon.geometry.coordinates, polygonColor).addTo(map);
            L.marker(center.geometry.coordinates).addTo(map);
        },
        distance: function () {
            var from = turf.point([39.773766, 30.511510]);
            var to = turf.point([39.950683, 32.847900]);
            var options = { units: 'kilometers' };
            var distance = turf.distance(from, to, options);
            L.marker(from.geometry.coordinates).addTo(map);
            L.marker(to.geometry.coordinates).addTo(map);
            swal("Distance: " + Math.round(distance) + " Km");
        },
        length: function (coor) {
            var line = turf.lineString(coor);
            var length = turf.length(line, { units: 'kilometers' });
            L.polyline(line.geometry.coordinates).addTo(map);
            swal("Length: " + length + " Km")
        },
    }
    a.Transformation = {
        bezierSpline: function (coor) {
            var line = turf.lineString(coor);
            var curved = turf.bezierSpline(line);
            L.polyline(line.geometry.coordinates).addTo(map);
            L.polyline(curved.geometry.coordinates, lineColor).addTo(map);
        },
        buffer: function (coor) {
            var point = turf.point(coor);
            var buffered = turf.buffer(point, 50, { units: 'miles' });
            L.polygon(buffered.geometry.coordinates).addTo(map);
        },
        circle: function (coor) {
            var center = coor;
            var radius = 50;
            var options = { steps: 10, units: 'kilometers', properties: { foo: 'bar' } };
            var circle = turf.circle(center, radius, options);
            L.polygon(circle.geometry.coordinates).addTo(map);
        },
        difference: function () {
            var polygon1 = turf.polygon([[
                [38.89949062163047,29.781740829348568],
                [40.20361892041049,29.781740829348568],
                [40.20361892041049,33.18750254809857],
                [38.89949062163047,33.18750254809857],
                [38.89949062163047, 29.781740829348568]
            ]], {
                    "fill": "#F00",
                    "fill-opacity": 0.1
                });
            var polygon2 = turf.polygon([[
                [38.89949062163047, 31.51758067309857],
                [40.20361892041049, 31.51758067309857],
                [40.20361892041049, 35.05517832934857],
                [38.89949062163047, 35.05517832934857],
                [38.89949062163047, 31.51758067309857]
            ]], {
                    "fill": "#00F",
                    "fill-opacity": 0.1
                });

            var difference = turf.difference(polygon1, polygon2);
            var difference2= turf.difference(polygon2, polygon1);
            L.polygon(polygon1.geometry.coordinates).addTo(map);
            L.polygon(polygon2.geometry.coordinates).addTo(map);
            L.polygon(difference.geometry.coordinates, polygonColor).addTo(map);
            L.polygon(difference2.geometry.coordinates, polygonColor).addTo(map);
        },
        intersect: function () {
                       var polygon1 = turf.polygon([[
                [38.89949062163047,29.781740829348568],
                [40.20361892041049,29.781740829348568],
                [40.20361892041049,33.18750254809857],
                [38.89949062163047,33.18750254809857],
                [38.89949062163047, 29.781740829348568]
            ]], {
                    "fill": "#F00",
                    "fill-opacity": 0.1
                });
            var polygon2 = turf.polygon([[
                [38.89949062163047, 31.51758067309857],
                [40.20361892041049, 31.51758067309857],
                [40.20361892041049, 35.05517832934857],
                [38.89949062163047, 35.05517832934857],
                [38.89949062163047, 31.51758067309857]
            ]], {
                    "fill": "#00F",
                    "fill-opacity": 0.1
                });
            var intersect = turf.intersect(polygon2, polygon1);
            L.polygon(polygon1.geometry.coordinates).addTo(map);
            L.polygon(polygon2.geometry.coordinates).addTo(map);
            L.polygon(intersect.geometry.coordinates, polygonColor).addTo(map);
        },
        simplify: function (coor) {
            var geojson = turf.polygon([coor]);
            var options = { tolerance: 0.01, highQuality: false };
            var simplified = turf.simplify(geojson, options);
            L.polygon(simplified.geometry.coordinates[0], polygonColor).addTo(map);
        },
        union: function () {
            var polygon1 = turf.polygon([[
                [38.89949062163047, 29.781740829348568],
                [40.20361892041049, 29.781740829348568],
                [40.20361892041049, 33.18750254809857],
                [38.89949062163047, 33.18750254809857],
                [38.89949062163047, 29.781740829348568]
            ]], {
                    "fill": "#F00",
                    "fill-opacity": 0.1
                });
            var polygon2 = turf.polygon([[
                [38.89949062163047, 31.51758067309857],
                [40.20361892041049, 31.51758067309857],
                [40.20361892041049, 35.05517832934857],
                [38.89949062163047, 35.05517832934857],
                [38.89949062163047, 31.51758067309857]
            ]], {
                    "fill": "#00F",
                    "fill-opacity": 0.1
                });
            var union = turf.union(polygon1, polygon2);
            L.polygon(union.geometry.coordinates, polygonColor).addTo(map);
        },
    }
    a.FeatureConversion = {
        explode: function (coor) {
            var polygon = turf.polygon([coor]);
            var explode = turf.explode(polygon);
            L.polygon(polygon.geometry.coordinates, polygonColor).addTo(map);
            for (var i = 0; i < explode.features.length; i++) {
                L.marker(explode.features[i].geometry.coordinates).addTo(map);
            }
        },
        lineToPolygon: function (coor) {
            var line = turf.lineString(coor);

            var polygon = turf.lineToPolygon(line);
            L.polygon(polygon.geometry.coordinates, polygonColor).addTo(map);

        },
    }
    a.Misc = {
        lineIntersect: function () {
            var line1 = turf.lineString([[39, 32], [41, 32]]);
            var line2 = turf.lineString([[40, 30], [40, 34]]);
            var intersects = turf.lineIntersect(line1, line2);
            L.polyline(line1.geometry.coordinates).addTo(map);
            L.polyline(line2.geometry.coordinates).addTo(map);
            L.marker(intersects.features[0].geometry.coordinates).addTo(map);
        },
        nearestPointOnLine: function (coor) {
            var line = turf.lineString(coor);
            var pt = turf.point([39, 32]);
            L.marker(pt.geometry.coordinates).addTo(map);
            var snapped = turf.nearestPointOnLine(line, pt, { units: 'kilometers' });
            L.marker(snapped.geometry.coordinates).addTo(map);
        },
    }
    a.UnitConversion = {
        toMercator: function (coor) {
            var pt = turf.point(coor);
            var converted = turf.toMercator(pt);
            swal("Mercator: " + "x: " + converted.geometry.coordinates[0] + " y: " + converted.geometry.coordinates[1]  );
        },
        toWgs84: function (coor) {
            var pt = turf.point(coor);
            var converted = turf.toWgs84(pt);
            swal("Wgs84: " + "x: " + converted.geometry.coordinates[0] + "   y: " + converted.geometry.coordinates[1]);
        },
    }
    return a;
}(TurfItems || {}));