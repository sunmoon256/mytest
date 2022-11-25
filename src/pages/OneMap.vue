<template>
    <div class="onemap-page">
        <MaPview />
        <MapTools />
    </div>
</template>

<script>
import MaPview from '../components/common/MaPview';
import MapTools from '@/components/MapTools';
export default {
    name: 'OneMap',
    components: { MaPview, MapTools },
    methods: {},
};
</script>

<style>
.onemap-page {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
