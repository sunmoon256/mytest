<template>
    <div class="maptools-pannel">
        <span class="maptools-item">行政区导航</span>
        <span class="maptools-item">距离测量</span>
        <span class="maptools-item">面积测量</span>
        <span class="maptools-item">清屏</span>
    </div>
</template>

<script>
export default {
    name: 'MapToools',
    components: {},
    methods: {},
};
</script>

<style>
.maptools-pannel {
    position: absolute;
    padding: 0 10px;
    height: 30px;
    top: 20px;
    right: 15px;
    background-color: #fff;
}
.maptools-item {
    position: relative;
    line-height: 30px;
    margin-left: 8px;
    margin-right: 8px;
    color: #000;
    cursor: pointer;
}
</style>
