<template>
    <div class="flex absolute inset-0 justify-center place-items-center bg-gray-400 bg-opacity-75 transition-opacity"
         role="dialog" aria-modal="true">
        <!-- Deploy confirmation Card -->
        <div class="flex w-[50vw] h-auto bg-secondary dark:bg-dark_secondary rounded-lg space-y-2 drop-shadow-xl z-50">
            <!-- Left upload confirmation popup tabs -->
            <div class="flex w-2/6 w-full bg-gray-50 rounded-l-lg px-3 py-4">
                <ul class="flex flex-col w-full h-full space-y-2">
                    <li>
                        <button @click="this.page = 0"
                                class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                :class="this.page === 0 ? 'bg-gray-100' : null"
                        >
                            <SvgIcon :path="system_req_icon" type="mdi"/>
                            <span class="ml-3"> System Requirements </span>
                        </button>
                    </li>
                    <li>
                        <button @click="this.page = 1"
                                class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                :class="this.page === 1 ? 'bg-gray-100' : null"
                        >
                            <SvgIcon :path="app_req_icon" type="mdi"/>
                            <span class="ml-3"> App Requirements </span>
                        </button>
                    </li>
                    <li>
                        <button @click="this.page = 2"
                                class="flex w-full items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                :class="this.page === 2 ? 'bg-gray-100' : null"
                        >
                            <SvgIcon :path="upload_icon" type="mdi"/>
                            <span class="ml-3"> Upload </span>
                        </button>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col w-full h-full p-5">
                <!-- Uploaded file section -->
                <div class="flex flex-row rounded-lg px-5 py-4 border border-black">
                    <SvgIcon type="mdi" :path="app_icon"/>
                    <span class="ml-5"> {{ app_name }} </span>
                </div>
                <!-- App specification -->
                <SysSpecificationForm v-if="this.page === 0"/>
                <!-- Upload Confirmation PopUp -->
                <UploadConfirmation v-else-if="this.page === 2"/>
                <!-- Next / Prev buttons-->
                <div v-if="this.page !== 2" class="flex w-full h-auto justify-center">
                    <IconButton text="Previous" :status="this.page > 0" @click="this.page--"/>
                    <IconButton text="Next" :status="true" @click="this.page++"/>
                </div>
            </div>
        </div>
        <!-- Background blur -->
        <div class="absolute w-full h-full filter backdrop-blur-sm z-10"></div>
    </div>
</template>

<script>
import UploadConfirmation from "@/components/Deploy/UploadConfirmation";
import SysSpecificationForm from "@/components/Deploy/SysSpecificationForm";
import SvgIcon from "@jamescoyle/vue-icon";
import {mdiCogOutline, mdiMatrix, mdiMemory, mdiUpload} from "@mdi/js";
import IconButton from "@/components/UI/IconButton";
export default {
    name: "DeployConfirmation",
    components: {
        SysSpecificationForm,
        UploadConfirmation,
        SvgIcon,
        IconButton
    },
    computed: {
        app_name: function () {
            return this.$store.getters['deploy/getDeployAppName'];
        }
    },
    data() {
        return {
            app_icon: mdiCogOutline,
            page: 0,
            system_req_icon: mdiMemory,
            app_req_icon: mdiMatrix,
            upload_icon: mdiUpload
        }
    }
}
</script>

<style scoped>

</style>