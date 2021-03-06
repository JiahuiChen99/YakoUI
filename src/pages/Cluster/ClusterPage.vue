<template>
    <section id="cluster" class="flex relative w-full h-full bg-[#090a0a]">
        <div id="cluster_chart" class="flex absolute w-full h-full">
        </div>
        <YakoNodeInfo v-if="node_selected"/>
    </section>
</template>

<script>
import {Canvas} from "butterfly-dag";
import 'butterfly-dag/dist/index.css';
import YakoNodeInfo from "@/components/Cluster/YakoNodeInfo";
import YakoNode from "@/components/Cluster/YakoNode";
import YakoNodeEndpoint from "@/components/Cluster/YakoNodeEndpoint";
import YakoNodeEdge from "@/components/Cluster/YakoNodeEdge";
import yakoAPI from "@/services/API/yakoAPI";

export default {
    name: "ClusterPage",
    components: {
        YakoNodeInfo
    },
    computed: {
        node_selected: function () {
            return this.$store.getters['cluster/getNodeSelectedStatus'];
        }
    },
    methods: {
        /**
         * Determine the column position depending on the node type
         * 1: YakoMasters
         * 2: YakoAgent (IoT)
         * 3: YakoAgent
         * @param agentID
         */
        determineColumn: function (agentID) {
            switch (agentID[0]) {
                case 'm': return 0;
                case 'n': return 500;
                default: return 1000;
            }
        }
    },
    mounted() {
        // Fetch cluster information
        yakoAPI.get_cluster().then( res => {
            this.$store.commit('cluster/setClusterSchema', JSON.parse(res.data))
        });

        // Get cluster information from store
        let schema = this.$store.getters['cluster/getClusterSchema'];
        // Generate YakoMaster nodes
        Object.keys(schema.yako_masters).forEach( (nodeID, index) => {
            this.nodes.push({
                id: nodeID,
                top: 250 +  (index * 150),
                left: 50,
                data: schema.yako_masters[nodeID],
                Class: YakoNode,
                // YakoAgents left endpoint
                endpoints: [{
                    id: 'right' + index,
                    orientation: [1, 0],
                    pos: [0, 0.5],
                    Class: YakoNodeEndpoint
                }]
            })
        });

        // Generate YakoAgent nodes
        Object.keys(schema.yako_agents).forEach( (agentID, agentIndex) => {
            this.nodes.push({
                id: agentID,
                top: 200 +  (agentIndex * 150),
                left: 500 + this.determineColumn(agentID),
                data: schema.yako_agents[agentID].info,
                Class: YakoNode,
                // YakoAgents left endpoint
                endpoints: [{
                    id: 'left' + agentIndex,
                    orientation: [-1, 0],
                    pos: [0, 0.5],
                    Class: YakoNodeEndpoint
                }]
            })

            // For each yakomaster create an endpoint with the yakoagent
            Object.keys(schema.yako_masters).forEach( (masterID, masterIndex) => {
                this.edges.push({
                    source: 'right' + masterIndex,
                    target: 'left' + agentIndex,
                    sourceNode: masterID,
                    targetNode: agentID,
                    type: 'endpoint',
                    Class: YakoNodeEdge
                })
            });
        });

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
            edges: this.edges
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

        // YakoNode on click event toggles panel view & sets the selected yakonode ID
        this.canvas.on('system.node.click', (node_data) => {
            this.$store.commit('cluster/setNodeSelected', {status: true, id: node_data.node.id});
        });

    },
    data() {
        return {
            canvas: null,
            nodes: [],
            edges: [],
        }
    }
}
</script>

<style>
/* Butterfly lib bug - Force absolute position */
.butterfly-svg {
    position: absolute !important;
}

.node {
    position: absolute;
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