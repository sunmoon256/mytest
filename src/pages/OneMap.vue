<template>
    <div class="onemap-page">
        <MaPview />
    </div>
</template>

<script>
import MaPview from '../components/common/MaPview';

export default {
    name: 'OneMap',
    components: { MaPview },
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
