<template>
    <div class="flex flex-col w-1/2 h-full rounded-xl p-5 space-y-2">
        <h2 class="font-bold text-xl"> Top Nodes </h2>
        <div class="grid grid-cols-3 w-full gap-x-3">
            <TopYakoAgent v-for="(agent, index) in top_agents" :key="index" :agent="agent"/>
        </div>
    </div>
</template>

<script>
import TopYakoAgent from "@/components/Dashboard/TopYakoAgent";
export default {
    name: "TopAgentsSection",
    components: {
        TopYakoAgent
    },
    computed: {
        top_agents: function () {
            return this.$store.getters['deploy/getBestNodes'];
        }
    }
}
</script>

<style scoped>

</style>