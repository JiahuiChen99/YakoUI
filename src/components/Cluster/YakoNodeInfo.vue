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
                <div class="flex flex-col w-full h-fit py-3 space-y-1">
                    <span class="font-bold"> General Information </span>
                    <div class="flex space-x-1">
                        <SvgIcon :path="cpu_icon" type="mdi"/>
                        <strong> CPU: </strong>
                        <span> {{ this.yakonode_info.CpuList[0].cpuName }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="gpu_icon" type="mdi"/>
                        <strong> GPU: </strong>
                        <span> {{ this.yakonode_info.GpuList[0].gpuName }} </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="memory_icon" type="mdi"/>
                        <strong> Memory: </strong>
                        <span> {{ `${this.yakonode_info.Memory.total} (${formatBytes(yakonode_info.Memory.total*1000, 2)})` }} </span>
                    </div>
                </div>

                <div class="flex flex-col w-full h-fit py-3 space-y-1">
                    <span class="font-bold"> Network Information </span>
                    <div class="flex space-x-1">
                        <SvgIcon :path="ip_icon" type="mdi"/>
                        <strong> IP: </strong>
                        <span> 127.0.0.1 </span>
                    </div>

                    <div class="flex space-x-1">
                        <SvgIcon :path="port_icon" type="mdi"/>
                        <strong> Port: </strong>
                        <span> 8000 </span>
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
import formatBytes from "@/services/utils/utils";
export default {
    name: "YakoNodeInfo",
    components: {
        IButton,
        SvgIcon
    },
    created() {
        // Get selected node information
        this.yakonode_id = this.$store.getters['cluster/getSelectedNodeID'];
        this.yakonode_info = this.$store.getters['cluster/getClusterSchema'][this.yakonode_id];

        // Subscribe to node selection change
        this.selection_unsubscribe = this.$store.subscribe((mutation) => {
            this.yakonode_id = mutation.payload.id;
            this.yakonode_info = this.$store.getters['cluster/getClusterSchema'][this.yakonode_id];
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