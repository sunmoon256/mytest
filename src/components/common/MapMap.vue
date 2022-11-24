<template>
    <div id="mapview"></div>
</template>

<script>
import { loadModules } from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};

export default {
    name: 'MapMap',
    comments: {},
    mounted: function () {
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            // 将API中的模块解构为数组
            const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView'], options);

            //实例化一个底图数据
            const map = new Map({
                basemap: 'osm',
            });

            //实例化一个视图，挂载到dom节点上
            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 14,
                center: [113.828185, 34.824426],
                // center:[113.688266,34.77982],//郑州市中心12级
            });

            view.ui.components = [];

            console.log('test测试');
        },
    },
};
</script>

<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
