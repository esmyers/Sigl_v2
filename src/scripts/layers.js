/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var servicesURL = "http://sigl.wim.usgs.gov:6080/arcgis/rest/services/SIGL/SIGLMapper/MapServer";

require([
    "esri/geometry/Extent",
    "esri/layers/WMSLayerInfo",
    "esri/layers/FeatureLayer",
    'dojo/domReady!'
], function(
    Extent,
    WMSLayerInfo,
    FeatureLayer
) {

    allLayers = [
        
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "SiGL Sites" : {
                    "url": servicesURL,
                    "visibleLayers": [0],
                    "options": {
                        "id": "sitesLayer",
                        "opacity": 0.75,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "Great Lakes Basins" : {
                    "url": servicesURL,
                    "visibleLayers": [3],
                    "options": {
                        "id": "basinsLayer",
                        "opacity": 0.35,
                        "visible": true
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "EPA Areas of Concern" : {
                    "url": servicesURL,
                    "visibleLayers": [1],
                    "options": {
                        "id": "AOCLayer",
                        "opacity": 0.35,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "USGS GLRI Nutrient Monitoring Basins" : {
                    "url": servicesURL,
                    "visibleLayers": [2],
                    "options": {
                        "id": "GLRINetLayer",
                        "opacity": 0.40,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "Ceded Tribal Boundaries" : {
                    "url": servicesURL,
                    "visibleLayers": [5],
                    "options": {
                        "id": "cededTribalLayer",
                        "opacity": 0.40,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        },
        {
            "groupHeading": "ESRI dynamic map services",
            "showGroupHeading": false,
            "includeInLayerList": true,
            "layers": {
                "Tribal Reservation Boundaries" : {
                    "url": "http://commons.wim.usgs.gov/arcgis/rest/services/AIR_NDGA/AIR_NDGA/MapServer/",
                    "visibleLayers": [0],
                    "options": {
                        "id": "tribalResLayer",
                        "opacity": 0.60,
                        "visible": false
                    },
                    "wimOptions": {
                        "type": "layer",
                        "layerType": "agisDynamic",
                        "includeInLayerList": true,
                        "zoomScale": 144448,
                        "hasOpacitySlider": true,
                        "includeLegend" : true
                    }
                }
            }
        }
    ]

});





