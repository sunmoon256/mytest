<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemaptoggle"></div>
        <div id="scalebar"></div>
        <div id="zoom"></div>
    </div>
</template>

<script>
// 引入esri-loader插件
import { loadModules } from 'esri-loader';

// 定义一个包含JS API的js开发包和css样式文件的对象
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};

export default {
    name: 'MaPview',
    comments: {},
    mounted: function () {
        // 此生命周期函数是在编译好的HTML挂载到页面完成后执行的事件钩子
        // 在此生命周期函数中调用创建地图的函数
        // console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            // 将API中的模块解构为数组
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom',
                ],
                options,
            );

            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });
            const map = new Map({
                basemap,
            });

            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 14,
                center: [113.828185, 34.824426],
                // center:[113.688266,34.77982],//郑州市中心12级
            });

            const basemapToggle = new BasemapToggle({
                view: view,
                nextBasemap: 'hybrid',
                container: 'basemaptoggle',
            });
            view.ui.add(basemapToggle);

            const scaleBar = new ScaleBar({
                view: view,
                unit: 'metric',
                container: 'scalebar',
            });
            view.ui.add(scaleBar);

            const zoom = new Zoom({
                view: view,
                container: 'zoom',
            });
            view.ui.add(zoom);

            view.ui.components = [];

            // console.log('test测试');
            this.$store.commit('_setDefauleView', view);
            // console.log(this.$store.state._defaultView);
        },
    },
};
</script>

<style>
.mapview-pannel,
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemaptoggle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}
#scalebar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}
#zoom {
    position: absolute;
    right: 15px;
    bottom: 110px;
}
</style>
