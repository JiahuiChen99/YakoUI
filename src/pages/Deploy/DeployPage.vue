<template>
    <section id="deploy"
             class="flex relative w-full h-full p-24"
    >
        <!-- App to be deployed in the cluster selection -->
        <DragDrop @uploadFile="toggle_popup"/>
        <!-- Upload Confirmation PopUp -->
        <UploadConfirmation v-if="file_selected" @buttonClick="confirm_upload"/>
    </section>
</template>

<script>
import DragDrop from "@/components/Deploy/DragDrop";
import UploadConfirmation from "@/components/Deploy/UploadConfirmation";

export default {
    name: "DeployPage",
    components: {
        UploadConfirmation,
        DragDrop
    },
    methods: {
        /**
         * Toggles upload confirmation popup
         */
        toggle_popup: function () {
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
                // TODO: Upload file to YakoMaster
            }

            // Hides the popup
            this.toggle_popup();
        }
    },
    data() {
        return {
            file_selected: false,
        }
    }
}
</script>

<style scoped>

</style>