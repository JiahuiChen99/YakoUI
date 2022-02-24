<template>
    <div class="flex absolute inset-0 justify-center place-items-center bg-gray-400 bg-opacity-75 transition-opacity"
        role="dialog" aria-modal="true">
        <div class="flex flex-col w-2/6 h-auto bg-secondary dark:bg-dark_secondary rounded-lg space-y-2 pb-3 drop-shadow-xl z-50">
            <!-- Uploaded file section -->
            <div class="flex flex-row rounded-lg m-5 px-5 py-4 border border-black">
                <svg-icon type="mdi" :path="app_icon"/>
                <span class="ml-5"> {{ app_name }} </span>
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
        <div class="absolute w-full h-full filter backdrop-blur-sm z-10"></div>
    </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiClose, mdiCogOutline , mdiUpload} from "@mdi/js";
import IconButton from "@/components/UI/IconButton";

export default {
    name: "UploadConfirmation",
    components: {
        IconButton,
        SvgIcon
    },
    emits: ['buttonClick'],
    computed: {
        app_name: function () {
            return this.$store.getters['deploy/getDeployAppName'];
        }
    },
    methods: {
    },
    data() {
        return {
            app_icon: mdiCogOutline,
            cancel_icon: mdiClose,
            upload_icon: mdiUpload,
            alive: false,
            data_structures: ['Graph', 'Tree']
        }
    }
}
</script>

<style scoped>

</style>