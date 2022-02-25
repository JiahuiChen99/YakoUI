<template>
    <section id="cluster" class="flex w-full h-full">
    </section>
</template>

<script>
import Drawflow from 'drawflow';
import YakoNode from "@/components/Cluster/YakoNode";
import { h, getCurrentInstance, render } from 'vue';
const Vue = { version: 3, h, render };

export default {
    name: "ClusterPage",
    mounted() {
        // Drawflow chart configuration
        let df_id = document.getElementById('cluster');
        const cluster_chart = new Drawflow(df_id, Vue, getCurrentInstance().appContext.app._context);
        cluster_chart.start();
        cluster_chart.cluster_chart_mode = 'edit';
        cluster_chart.reroute = true;

        // Only one module of Drawflow
        cluster_chart.addModule('cluster');

        cluster_chart.registerNode('yakonode', YakoNode, null, null);
        // module, inputs, outputs, pos_x, pos_y, classes, data, node_type, 'vue'
        cluster_chart.addNode('cluster', 0, 1, 0, 0, '', {}, 'yakonode', 'vue');

    }
}
</script>

<style>
.drawflow, .drawflow .parent-node {
    position: relative;
}

.parent-drawflow {
    display: flex;
    overflow: hidden;
    touch-action: none;
    outline: 0;
}

.drawflow {
    width: 100%;
    height: 100%;
    user-select: none;
    perspective: 0;
}

/* Node styles */
.drawflow .drawflow-node {
    display: flex;
    align-items: center;
    position: absolute;
    background: #FFFFFFFF;
    color: #000000;
    border: 1px  solid #C6C6C6FF;
    border-radius: 10px;
    min-height: fit-content;
    width: auto;
    min-width: fit-content;
    -webkit-box-shadow: 0 0 20px 5px #EDEDEDFF;
    box-shadow: 0 0 20px 5px #EDEDEDFF;
}

/* Node Selected Styles */
.drawflow .drawflow-node.selected {
    border: 1px solid #4ea9ff;
    -webkit-box-shadow: 0 2px 20px 2px #4ea9ff;
    box-shadow: 0 2px 20px 2px #4ea9ff;
}

.drawflow .drawflow-node .inputs, .drawflow .drawflow-node .outputs {
    width: 0;
}

.drawflow .drawflow-node .drawflow_content_node {
    width: 100%;
    display: block;
}

/* Input & Output Styles */
.drawflow .drawflow-node .input, .drawflow .drawflow-node .output {
    position: relative;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    border: 2px solid #c6c6c6;
    cursor: crosshair;
    z-index: 1;
    margin-bottom: 5px;
}

.drawflow .drawflow-node .input {
    top: 2px;
    right: 10px;
    background: #ffffff;
}
.drawflow .drawflow-node .output {
    top: 2px;
    left: -10px;
}

/* Line Styles */
.drawflow svg {
    z-index: 0;
    /*position: absolute;*/
    overflow: visible!important;
}

.drawflow .connection {
    position: absolute;
    pointer-events: none;
}
.drawflow .connection .main-path {
    fill: none;
    stroke-width: 5px;
    stroke: #4ea9ff;
    pointer-events: all;
}
.drawflow .connection .main-path:hover {
    stroke: #006bd0;
    cursor: pointer;
}
.drawflow .connection .main-path.selected {
    stroke: #43b993;
}

.drawflow .connection .point {
    cursor: move;
    stroke: #000;
    stroke-width: 2;
    fill: #fff;
    pointer-events: all;
}

/* Re-route on hover styles */
.drawflow .connection .point.selected, .drawflow .connection .point:hover {
    fill: #ffffff;
}

.drawflow .main-path {
    fill: none;
    stroke-width: 1px;
    stroke: #0ed329;
}

/* Delete button Styles */
.drawflow-delete {
    position: absolute;
    width: 30px;
    height: 30px;
    background: #ffffff;
    color: #4ea9ff;
    z-index: 4;
    border: 2px solid #4ea9ff;
    font-weight: 700;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    -webkit-box-shadow: 0 2px 20px 2px #4ea9ff;
    box-shadow: 0 2px 20px 2px #4ea9ff;
}

.drawflow>.drawflow-delete {
    border: 2px solid #43b993;
    background: white;
    color: #43b993;
    -webkit-box-shadow: 0 2px 20px 2px #43b993;
    box-shadow: 0 2px 20px 2px #43b993;
}

.parent-node .drawflow-delete {
    right: -15px;
    top: -15px;
}

</style>