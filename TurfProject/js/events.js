var TurfItems = (function (a) {
    $('#along').click(function () {
        swal("Bir LineString üzerinde belirli mesafede bir nokta döndürür. !!Denemek İçin LineString Çiziniz!!");
        secilen = "along";
       // TurfItems.Measurement.along();
    });
    $('#area').click(function () {
        swal("Çizilen Polygonun Alanını MetreKare Olarak Göstermektedi. !!Denemek İçin Polygon Çiziniz!!");
        secilen = "area";
    });
    $('#center').click(function () {
        swal("Feature Grup Ögelerinin Merkezine Marker Ekler.");
        TurfItems.Measurement.center();
    });
    $('#centerPolygon').click(function () {
        swal("Çizilen Polygonun Merkezine Marker Ekler. !!Denemek İçin Polygon Çiziniz!!");
        secilen = "centerPolygon";
    });
    $('#distance').click(function () {
        TurfItems.Measurement.distance();
    });
    $('#length').click(function () {
        secilen = "length";
    });
    $('#bezierSpline').click(function () {
        swal("Bir çizgiye Bezier spline algoritması uygulayarak kavisli bir versiyonunu döndürür. !!Denemek için line çiziniz!!");
        secilen = "bezierSpline";
    });
    $('#buffer').click(function () {
        swal("Seçilen noktadan belirtilen aralıkta eliptik bir şekil oluşturur. !!Denemek için marker ekleyiniz!!");
        secilen = "buffer";
    });
    $('#circle').click(function () {
        swal("Seçilen noktadan belirtilen aralıkta bir çokgen oluşturur. !!Denemek için marker ekleyiniz!!");
        secilen = "circle";
    });
    $('#difference').click(function () {
        swal("Birden fazla poligonun farklı bölgelerini gösterir.");
        TurfItems.Transformation.difference();
    });
    $('#intersect').click(function () {
        swal("Birden fazla polygonun ortak bölgesini gösterir.");
        TurfItems.Transformation.intersect();
    });
    $('#simplify').click(function () {
        swal("GeoJSON nesnesini alır ve basitleştirilmiş bir sürümünü döndürür. Dahili olarak Ramer-Douglas-Peucker algoritmasını kullanarak sadeleştirmeyi gerçekleştirmek için basit-js kullanır.");
        secilen = "simplify";
    });
    $('#union').click(function () {
        swal("Birden Fazla Polygonun Tek bir Polygon olmasını sağlar.");
        TurfItems.Transformation.union();
        secilen = "union";
    });
    $('#explode').click(function () {
        swal("Çizilen polygonun köşe noktalarına marker ekler. !!Denemek için Polygon çiziniz.!!");
        secilen = "explode";
    });
    $('#lineToPolygon').click(function () {
        swal("LineStringleri polygona dönüştürür.!!Denemek için line çiziniz.");
        secilen = "lineToPolygon";
    });
    $('#lineIntersect').click(function () {
        swal("İki çizginin kesişim noktasını gösterir.");
        TurfItems.Misc.lineIntersect();
        secilen = "lineIntersect";
    });
    $('#nearestPointOnLine').click(function () {
        swal("Belirtilen noktanın çizgiye en yakın noktanın kordinatlarını döndürür. !!Bir line çiziniz!!");
        secilen = "nearestPointOnLine";
    });
    $('#toMercator').click(function () {
        swal("Seçilen Noktanın kordinatlarını Mercator cinsine çevirir. !!Denemek için marker ekleyiniz!!");
        secilen = "toMercator";
    });
    $('#toWgs84').click(function () {
        swal("Seçilen Noktanın kordinatlarını Wgs84 cinsine çevirir. !!Denemek için marker ekleyiniz!!");
        secilen = "toWgs84";
    });
    return a;
}(TurfItems || {}));