<template>
    <section id="deploy" class="flex relative w-full h-full">
        <!-- App to be deployed in the cluster selection -->
        <div class="flex w-full h-full p-24">
            <DragDrop @uploadFile="toggle_popup"/>
        </div>
        <!-- Specification form & Upload confirmation -->
        <DeployConfirmation v-if="file_selected" @buttonClick="confirm_upload"/>
    </section>
</template>

<script>
import DragDrop from "@/components/Deploy/DragDrop";
import DeployConfirmation from "@/components/Deploy/DeployConfirmation";
import yakoapi from "@/services/API/yakoAPI";
import {provide, ref} from "vue";

export default {
    name: "DeployPage",
    components: {
        DeployConfirmation,
        DragDrop
    },
    setup() {
        // Sys requirements inputs
        let sys_cpu_cores_input = ref(1);
        let sys_gpu_cores_input = ref(1);
        let sys_ram_input = ref(1);
        provide('sys_cpu_cores_input', sys_cpu_cores_input);
        provide('sys_gpu_cores_input', sys_gpu_cores_input);
        provide('sys_ram_input', sys_ram_input);

        // App requirements inputs
        let app_cpu_cores_input = ref(1);
        let app_ram_input = ref(1);
        provide('app_cpu_cores_input', app_cpu_cores_input);
        provide('app_ram_input', app_ram_input);
    },
    methods: {
        /**
         * Toggles upload confirmation popup
         */
        toggle_popup: function (app) {
            // Store the selected app to be deployed
            if ( app !== null ) {
                this.app_file = app;
            }
            this.file_selected = !this.file_selected;
        },
        /**
         * Either cancels the upload or
         * uploads the file to YakoMaster
         * @param buttonID
         * false: Cancel
         * true: Upload
         */
        confirm_upload: function (buttonID) {
            if ( buttonID ) {
                // Upload application to YakoMaster
                const formData = new FormData();
                formData.append('app', this.app_file);
                yakoapi.deploy_app('deploy', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).catch( err => {
                    // TODO: Prompt error
                    console.log(err)
                })
            }

            // Hides the popup
            this.toggle_popup();
        }
    },
    data() {
        return {
            file_selected: false,
            app_file: null
        }
    }
}
</script>

<style scoped>

</style>