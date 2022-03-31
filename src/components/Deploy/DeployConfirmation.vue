<template>
    <div class="flex absolute inset-0 justify-center place-items-center bg-gray-400 bg-opacity-75 transition-opacity"
         role="dialog" aria-modal="true">
        <!-- Deploy confirmation Card -->
        <div class="flex flex-col w-2/6 h-auto bg-secondary dark:bg-dark_secondary rounded-lg space-y-2 p-5 drop-shadow-xl z-50">
            <!-- Uploaded file section -->
            <div class="flex flex-row rounded-lg px-5 py-4 border border-black">
                <SvgIcon type="mdi" :path="app_icon"/>
                <span class="ml-5"> {{ app_name }} </span>
            </div>
            <!-- App specification -->
            <SpecificationForm/>
            <!-- Upload Confirmation PopUp -->
            <UploadConfirmation v-if="this.page === 1"/>
        </div>
        <!-- Background blur -->
        <div class="absolute w-full h-full filter backdrop-blur-sm z-10"></div>
    </div>
</template>

<script>
import UploadConfirmation from "@/components/Deploy/UploadConfirmation";
import SysSpecificationForm from "@/components/Deploy/SysSpecificationForm";
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiCogOutline} from "@mdi/js";
export default {
    name: "DeployConfirmation",
    components: {
        SysSpecificationForm,
        UploadConfirmation,
        SvgIcon
    },
    computed: {
        app_name: function () {
            return this.$store.getters['deploy/getDeployAppName'];
        }
    },
    data() {
        return {
            app_icon: mdiCogOutline,
            page: 0
        }
    }
}
</script>

<style scoped>

</style>