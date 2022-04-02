<template>
    <div class="flex flex-col w-full h-full">
        <!-- Requirements Summary -->
        <div class="flex flex-col w-full h-fit">
            <h1 class="font-bold text-xl"> Requirements Summary </h1>
            <div class="flex flex-col w-full h-full divide-y space-y-2">
                <!-- System requirements -->
                <div class="flex flex-col space-y-1">
                    <h2 class="font-bold"> System Requirements </h2>
                    <ul>
                        <li> System CPU: {{ sys_cpu_cores_input }} cores</li>
                    </ul>
                    <ul>
                        <li> System GPU: {{ sys_gpu_cores_input }} cores</li>
                    </ul>
                    <ul>
                        <li> System Memory: {{ sys_ram_input }} GB</li>
                    </ul>
                </div>
                <!-- App requirements -->
                <div class="flex flex-col space-y-1">
                    <h2 class="font-bold"> App Requirements </h2>
                    <ul>
                        <li> System CPU: {{ app_cpu_cores_input }} cores</li>
                    </ul>
                    <ul>
                        <li> System Memory: {{ app_ram_input }} GB</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- YakoMaster health check -->
        <div class="flex h-auto justify-center">
            <div class="flex w-auto h-auto relative">
                <div v-if="!alive" class="flex right-0 w-3 h-3 absolute rounded-xl bg-primary_variant"></div>
                <div v-if="!alive" class="flex animate-ping right-0 w-3 h-3 absolute rounded-xl bg-primary_variant"></div>
                <IconButton :class="alive ? 'bg-green-200' : 'bg-red-200'"
                            :icon="alive ? conn_alive_icon : test_conn_icon"
                            :status="true" text="Test Connection" @click="health_check"
                />
            </div>
        </div>

        <!-- Upload Confirmation Buttons -->
        <div class="flex flex-row justify-center">
            <IconButton :icon="cancel_icon" status="true" text="Cancel" @click="$emit('buttonClick', false)"/>
            <IconButton :icon="upload_icon" :status="alive" text="Upload" @click="$emit('buttonClick', true)"/>
        </div>
    </div>
</template>

<script>
import {mdiClose, mdiSignalCellular3, mdiSignalCellularOutline, mdiUpload} from "@mdi/js";
import IconButton from "@/components/UI/IconButton";
import yakoAPI from "@/services/API/yakoAPI";
import {inject} from "vue";

export default {
    name: "UploadConfirmation",
    components: {
        IconButton
    },
    emits: ['buttonClick'],
    methods: {
        health_check: function () {
            yakoAPI.health_check('alive').then( () => {
                this.alive = true;
            }).catch( err => {
                console.log(err)
                this.alive = false;
            });
        }
    },
    setup() {
        return {
            sys_cpu_cores_input: inject('sys_cpu_cores_input'),
            sys_gpu_cores_input: inject('sys_gpu_cores_input'),
            sys_ram_input: inject('sys_ram_input'),
            app_cpu_cores_input: inject('app_cpu_cores_input'),
            app_ram_input: inject('app_ram_input'),
        }
    },
    data() {
        return {
            cancel_icon: mdiClose,
            upload_icon: mdiUpload,
            test_conn_icon: mdiSignalCellularOutline,
            conn_alive_icon: mdiSignalCellular3,
            alive: false,
        }
    }
}
</script>

<style scoped>

</style>