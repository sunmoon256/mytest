<template>
    <div id="app">
        <el-container class="app-out-pannel">
            <el-header class="sys-header">一张图webgis项目系统</el-header>
            <el-container class="sys-content">
                <el-aside width="200px" class="cont-menu">侧边菜单</el-aside>
                <el-main class="cont-map">
                    <!-- <MaPview /> -->
                    <!-- <MapViewer /> -->
                    <MapMap />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// import MaPview from './components/common/MaPview';
// import MapViewer from './components/common/MapViewer';
import MapMap from './components/common/MapMap.vue';

export default {
    name: 'App',
    components: {
        // MaPview,
        // MapViewer,
        MapMap,
    },
};
</script>

<style>
html,
body,
#app {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px;
}
.app-out-pannel,
.sys-content {
    height: 100%;
}
.sys-header {
    background-color: #32373e;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
}
.cont-menu {
    background-color: #545c64;
    /* width: 64px; */
    /* overflow: hidden !important; */
}
.cont-map {
    padding: 5px !important;
    /* background-color: aquamarine; */
}
</style>
