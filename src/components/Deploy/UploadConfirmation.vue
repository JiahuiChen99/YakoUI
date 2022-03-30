<template>
    <div class="flex flex-col w-full h-full">
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
    data() {
        return {
            cancel_icon: mdiClose,
            upload_icon: mdiUpload,
            test_conn_icon: mdiSignalCellularOutline,
            conn_alive_icon: mdiSignalCellular3,
            alive: false,
            data_structures: ['Graph', 'Tree']
        }
    }
}
</script>

<style scoped>

</style>