<template>
    <div class="flex bg-primary_variant rounded-lg p-3 justify-between group">
        <!-- App name -->
        <span> {{ app }} </span>
        <div class="flex space-x-2 invisible group-hover:visible">
            <!-- Deploy app -->
            <IButton class="hover:bg-secondary" :icon="deploy_icon"/>
            <!-- Remove app -->
            <IButton class="hover:bg-secondary" :icon="remove_icon"/>
            <!-- Dots -->
            <IButton class="hover:bg-secondary" :icon="dots_icon"/>
        </div>
    </div>
</template>

<script>
import {mdiDelete, mdiDotsVertical, mdiPlay} from "@mdi/js";
import IButton from "@/components/UI/IButton";

export default {
    name: "DeployApps",
    props: ['app'],
    components: {
        IButton,
    },
    data() {
        return {
            deploy_icon: mdiPlay,
            remove_icon: mdiDelete,
            dots_icon: mdiDotsVertical,
        }
    }
}
</script>

<style scoped>

</style>