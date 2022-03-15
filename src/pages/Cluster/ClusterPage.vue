<template>
    <section id="cluster" class="flex relative w-full h-full bg-[#090a0a]">
        <div id="cluster_chart" class="flex absolute w-full h-full">
        </div>
    </section>
</template>

<script>
import {Canvas} from "butterfly-dag";
import 'butterfly-dag/dist/index.css';

export default {
    name: "ClusterPage",
    mounted() {
        let canvas = new Canvas({
            root: document.getElementById('cluster_chart'),
            disLinkable: false,
            linkable: true,
            draggable: true,
            zoomable: true,
            moveable: true,
        });

        // Add a minimap
        canvas.setMinimap(true);

        canvas.draw({
            nodes: [
            ]
        });
    }
}
</script>

<style>
/* Butterfly lib bug - Force absolute position */
.butterfly-svg {
    position: absolute !important;
}
</style>