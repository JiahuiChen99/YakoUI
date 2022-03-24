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
        // Get cluster information from store
        let schema = this.$store.getters['cluster/getClusterSchema'];
        Object.keys(schema).forEach( (nodeID, index) => {
            this.nodes.push({
                id: nodeID,
                top: 200 +  (index * 150),
                left: 500,
                data: schema[nodeID],
                Class: YakoNode,
            })
        })

        this.canvas = new Canvas({
            root: document.getElementById('cluster_chart'),
            disLinkable: false,
            linkable: true,
            draggable: true,
            zoomable: true,
            moveable: true,
            theme: {
                edge: {
                    shapeType: 'AdvancedBezier'
                }
            }
        });

        // Enable zoom & inverse scroll zooming
        this.canvas.setZoomable(true, true);

        // Add a minimap
        this.canvas.setMinimap(true, {
            nodeColor: 'rgb(189,45,45)',
            zoom: 1,
            containerStyle: {
                bottom: '10px',
                left: '10px',
            }
        });

        // Render canvas
        this.canvas.draw({
            nodes: this.nodes,
        },
            () => {
                this.canvas.setGridMode(true, {
                    isAdsorb: false,
                    theme: {
                        shapeType: 'circle',
                        gap: 50,
                        background: 'rgba(0, 0, 0, 0.65)',
                        circleRadiu: 1.5,
                        circleColor: 'rgba(255, 255, 255, 0.8)'
                    }
                });
            }
        );

    },
    data() {
        return {
            canvas: null,
            nodes: []
        }
    }
}
</script>

<style>
/* Butterfly lib bug - Force absolute position */
.butterfly-svg {
    position: absolute !important;
}

.butterflies-link{
    stroke: #4b4f6b;
    stroke-width: 3px;
}

/* Butterfly lib - Endpoint styles */
.butterflie-circle-endpoint {
    position: absolute !important;
    z-index: 100;
    width: 15px;
    height: 15px;
    border: 1px solid #3c3a3a;
    border-radius: 50%;
    background: #fff;
}

</style>