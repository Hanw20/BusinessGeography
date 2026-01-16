var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Hasil_AHP_Permukiman_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hasil_AHP_Permukiman<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_1_0.png" /> 1.6333<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_1_1.png" /> 2.4750<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_1_2.png" /> 3.3167<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_1_3.png" /> 4.1583<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_1_4.png" /> 5.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hasil_AHP_Permukiman_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12272795.792555, -809309.137385, 12300927.501823, -753078.723220]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Hasil_AHP_Permukiman_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Hasil_AHP_Permukiman_1];
