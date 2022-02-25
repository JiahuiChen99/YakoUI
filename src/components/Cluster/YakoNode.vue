<template>
    <div class="flex flex-col w-fit h-fit hover:cursor-all-scroll p-5 gap-y-3">
        <!-- YakoNode ID -->
        <div class="flex w-full h-full rounded-lg bg-slate-200 font-bold p-2">
            <SvgIcon class="flex w-fit h-fit" type="mdi" :path="server_icon"/>
            <span class="flex">
                {{ yakonode_name }}
            </span>
        </div>

        <!-- YakoNode information -->
        <div class="flex w-full h-full">
            <ul>
                <li class="flex">
                    <SvgIcon type="mdi" :path="cpu_icon"/>
                    CPU: {{ yakonode_info }}
                </li>
                <li class="flex">
                    <SvgIcon type="mdi" :path="gpu_icon"/>
                    GPU: {{ yakonode_info }}
                </li>
                <li class="flex">
                    <SvgIcon type="mdi" :path="memory_icon"/>
                    Mem: {{ yakonode_info }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiContentSave, mdiCpu64Bit, mdiExpansionCard, mdiMemory} from "@mdi/js";

export default {
    name: "YakoNode",
    components: {
        SvgIcon
    },
    mounted() {
        // Get node ID
        this.node_id = this.$el.parentElement.parentElement.id
        // TODO: Retrieve data of the node from Vuex
    },
    data() {
        return {
            server_icon: mdiMemory,
            cpu_icon: mdiCpu64Bit,
            gpu_icon: mdiExpansionCard,
            memory_icon: mdiContentSave,
            node_id: '', // Used for Dataflow reference
            yakonode_name: '',
            yakonode_info: {},
        }
    }
}
</script>

<style scoped>

</style>