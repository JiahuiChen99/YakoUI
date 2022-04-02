<template>
    <div class="flex flex-col rounded-lg h-fit bg-primary p-5" :class="this.list ? 'w-full' : 'w-fit'">
        <h3 class="font-bold"> {{ master.id }} </h3>
        <div class="flex flex-col">
            <div class="flex space-x-2">
                <SvgIcon :path="cpu_icon" type="mdi"/>
                <span> {{master.data.cpu_list[0].cpuName }} </span>
            </div>
            <div class="flex space-x-2">
                <SvgIcon :path="gpu_icon" type="mdi"/>
                <span> {{master.data.gpu_list[0].gpuName }} </span>
            </div>
            <div class="flex space-x-2">
                <SvgIcon :path="memory_icon" type="mdi"/>
                <span> {{master.data.memory.total }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiContentSave, mdiExpansionCard, mdiMemory} from "@mdi/js";

export default {
    name: "YakoMasterCard",
    components: {
        SvgIcon
    },
    props: ['master', 'list'],
    data() {
        return {
            cpu_icon: mdiMemory,
            gpu_icon: mdiExpansionCard,
            memory_icon: mdiContentSave,
        }
    }
}
</script>

<style scoped>

</style>