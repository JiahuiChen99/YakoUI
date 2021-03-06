<template>
    <section id="yakonode_info" class="flex absolute h-full z-50 right-0 p-5 z-50 transition-all duration-500 ease-in-out"
             :class="expanded ? 'w-[80vw]': 'w-[20vw]'"
    >
        <!-- Exand information-->
        <button class="flex w-4 h-14 rounded-l-md text-white bg-white place-self-center hover:cursor-pointer place-items-center"
                @click="this.expanded = !this.expanded"
        >
            <SvgIcon class="text-black" :path="expanded ? collapse_info_icon : expand_info_icon" type="mdi"/>
        </button>
        <div class="flex flex-col w-full h-full bg-white rounded-lg p-5 space-y-5">
            <div class="flex w-full justify-between">
                <h1 class="font-bold text-xl w-11/12"> Node #{{ this.yakonode_id }}</h1>
                <IButton class="text-slate-400 hover:text-black hover:bg-slate-200" :icon="close_icon" @click="close_panel"/>
            </div>
            <div class="flex flex-col divide-y">
                <!-- General information -->
                <div class="flex flex-col w-full h-fit py-3 space-y-1">
                    <span class="font-bold"> General Information </span>
                    <div class="flex space-x-1">
                        <SvgIcon :path="cpu_icon" type="mdi"/>
                        <strong> CPU: </strong>
                        <span> {{ this.yakonode_info.cpu_list[0].cpuName }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="gpu_icon" type="mdi"/>
                        <strong> GPU: </strong>
                        <span> {{ this.yakonode_info?.gpu_list?.[0].gpuName }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="memory_icon" type="mdi"/>
                        <strong> Memory: </strong>
                        <span> {{ `${this.yakonode_info.memory.total} (${formatBytes(yakonode_info.memory.total*1000, 2)})` }} </span>
                    </div>
                </div>

                <!-- System information -->
                <div class="flex flex-col w-full h-fit py-3 space-y-1">
                    <span class="font-bold"> System Information </span>
                    <div class="flex space-x-1">
                        <strong> Host name: </strong>
                        <span> {{ this.yakonode_info.sys_info.node_name }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <strong> OS: </strong>
                        <span> {{ this.yakonode_info.sys_info.sys_name }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <strong> Release: </strong>
                        <span> {{ this.yakonode_info.sys_info.release }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <strong> Architecture: </strong>
                        <span> {{ this.yakonode_info.sys_info.machine }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <strong> Version: </strong>
                        <span> {{ this.yakonode_info.sys_info.version }} </span>
                    </div>
                </div>

                <!-- Network information -->
                <div class="flex flex-col w-full h-fit py-3 space-y-1">
                    <span class="font-bold"> Network Information </span>
                    <div class="flex space-x-1">
                        <SvgIcon :path="ip_icon" type="mdi"/>
                        <strong> IP: </strong>
                        <span> {{ this.yakonode_info.socket.split(':')[0] }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="port_icon" type="mdi"/>
                        <strong> Port: </strong>
                        <span> {{ this.yakonode_info.socket.split(':')[1] }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="latency_icon" type="mdi"/>
                        <strong> Latency: </strong>
                        <span> 1ms </span>
                    </div>
                </div>

                <div class="flex flex-col w-full h-fit py-3">
                    <div class="flex justify-between">
                        <span class="font-bold"> Deployed Applications </span>
                        <!-- Number of deployed apps indicator -->
                        <span class="bg-blue-100 text-blue-800 text-sm font-bold px-2.5 py-0.5 rounded-lg">
                            10
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {
    mdiChevronLeft, mdiChevronRight,
    mdiClose,
    mdiContentSave,
    mdiExpansionCard,
    mdiIpOutline,
    mdiMemory,
    mdiSelectGroup,
    mdiWifiStrength4
} from "@mdi/js";
import IButton from "@/components/UI/IButton";
import SvgIcon from "@jamescoyle/vue-icon";
import {formatBytes} from "@/services/utils/utils";
export default {
    name: "YakoNodeInfo",
    components: {
        IButton,
        SvgIcon
    },
    created() {
        // TODO: Add node type detection
        // Get selected node information
        this.yakonode_id = this.$store.getters['cluster/getSelectedNodeID'];
        if (this.yakonode_id[0] === 'm') {
            this.yakonode_info = this.$store.getters['cluster/getClusterSchema'].yako_masters[this.yakonode_id];
        } else {
            this.yakonode_info = this.$store.getters['cluster/getClusterSchema'].yako_agents[this.yakonode_id].info;
        }

        // Subscribe to node selection & cluster change
        this.selection_unsubscribe = this.$store.subscribe((mutation) => {
            // Check for periodic cluster information changes
            if ( mutation.type === 'cluster/setClusterSchema' ) {
                // Update the selected yakoagent
                if ( this.yakonode_id[0] === 'm' ) {
                    // The selected node is a YakoMaster get its information
                    this.yakonode_info = mutation.payload.yako_masters[this.yakonode_id];
                } else {
                    this.yakonode_info = mutation.payload.yako_agents[this.yakonode_id].info;
                }
            // Node selection event
            } else if ( mutation.type === 'cluster/setNodeSelected' ) {
                this.yakonode_id = mutation.payload.id;
                if (this.yakonode_id[0] === 'm') {
                    this.yakonode_info = this.$store.getters['cluster/getClusterSchema'].yako_masters[this.yakonode_id];
                } else {
                    this.yakonode_info = this.$store.getters['cluster/getClusterSchema'].yako_agents[this.yakonode_id].info;
                }
            }
        })
    },
    beforeUnmount() {
        // Unsubscribe from vuex store mutations
        this.selection_unsubscribe();
    },
    methods: {
        /**
         * Closes the panel
         */
        close_panel: function () {
            this.$store.commit('cluster/setNodeSelected', {status: false, id: ''});
        },
        // Bytes formatter form utils
        formatBytes: formatBytes
    },
    data() {
        return {
            yakonode_id: '',
            yakonode_info: null,
            close_icon: mdiClose,
            cpu_icon: mdiMemory,
            gpu_icon: mdiExpansionCard,
            memory_icon: mdiContentSave,
            ip_icon: mdiIpOutline,
            port_icon: mdiSelectGroup,
            latency_icon: mdiWifiStrength4,
            expand_info_icon: mdiChevronLeft,
            collapse_info_icon: mdiChevronRight,
            expanded: false,
        }
    }
}
</script>

<style scoped>

</style>