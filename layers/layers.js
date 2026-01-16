var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AR_AdministrasiDesa_1 = new ol.format.GeoJSON();
var features_AR_AdministrasiDesa_1 = format_AR_AdministrasiDesa_1.readFeatures(json_AR_AdministrasiDesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_AdministrasiDesa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_AdministrasiDesa_1.addFeatures(features_AR_AdministrasiDesa_1);
var lyr_AR_AdministrasiDesa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_AdministrasiDesa_1, 
                style: style_AR_AdministrasiDesa_1,
                popuplayertitle: 'AR_AdministrasiDesa',
                interactive: true,
                title: '<img src="styles/legend/AR_AdministrasiDesa_1.png" /> AR_AdministrasiDesa'
            });
var lyr_Hasil_AHP_Permukiman_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hasil_AHP_Permukiman<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_2_0.png" /> 1.6333<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_2_1.png" /> 2.4750<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_2_2.png" /> 3.3167<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_2_3.png" /> 4.1583<br />\
    <img src="styles/legend/Hasil_AHP_Permukiman_2_4.png" /> 5.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hasil_AHP_Permukiman_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12272795.792555, -809309.137385, 12300927.501823, -753078.723220]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_AR_AdministrasiDesa_1.setVisible(true);lyr_Hasil_AHP_Permukiman_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AR_AdministrasiDesa_1,lyr_Hasil_AHP_Permukiman_2];
lyr_AR_AdministrasiDesa_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AR_AdministrasiDesa_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AR_AdministrasiDesa_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'inline label - visible with data', 'WIADKC': 'no label', 'WADMKK': 'inline label - visible with data', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AR_AdministrasiDesa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});