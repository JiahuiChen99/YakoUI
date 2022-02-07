<template>
    <section id="deploy"
             class="flex w-full h-full p-24"
    >
        <!-- App to be deployed in the cluster selection -->
        <DragDrop/>
    </section>
</template>

<script>
import DragDrop from "@/components/Deploy/DragDrop";

export default {
    name: "DeployPage",
    components: {
        DragDrop
    }
}
</script>

<style scoped>

</style>