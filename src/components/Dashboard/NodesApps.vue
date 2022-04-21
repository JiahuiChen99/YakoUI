<template>
    <div class="flex flex-col w-1/2 h-full rounded-xl p-5 space-y-2">
        <h2 class="font-bold text-xl"> Top Nodes </h2>
        <div class="grid grid-cols-3 w-full gap-x-3">
            <TopYakoAgent v-for="(agent, index) in top_agents" :key="index" :agent="agent"/>
        </div>
        <!-- Cluster apps list -->
        <h2 class="font-bold text-xl"> Apps </h2>
        <div class="overflow-y-scroll space-y-3">
            <DeployApps v-for="(app, index) in apps_list" :key="index" :app="app"/>
        </div>
    </div>
</template>

<script>
import TopYakoAgent from "@/components/Dashboard/TopYakoAgent";
import DeployApps from "@/components/Dashboard/DeployApps";
export default {
    name: "NodesApps",
    components: {
        DeployApps,
        TopYakoAgent
    },
    computed: {
        top_agents: function () {
            return this.$store.getters['deploy/getBestNodes'];
        },
        apps_list: function () {
            return this.$store.getters['cluster/getAppsList'];
        }
    }
}
</script>

<style scoped>

</style>