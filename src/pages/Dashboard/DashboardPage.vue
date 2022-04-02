<template>
    <section id="dashboard" class="flex flex-col w-full h-full p-5">
        <h1 class="font-bold text-2xl"> Dashboard </h1>
        <div class="flex w-full h-full py-5">
            <div class="flex w-1/2 h-full">
                <!-- YakoMasters list -->
                <div class="flex flex-col w-full h-1/2 bg-white rounded-xl p-5 space-y-2">
                    <h2 class="font-bold text-xl"> Masters </h2>
                    <div class="flex flex-col space-y-3 overflow-y-scroll">
                        <YakoMasterCard v-for="(master, index) in yakomasters" :key="index" :master="master"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import YakoMasterCard from "@/components/Dashboard/YakoMasterCard";
export default {
    name: "DashboardPage",
    components: {
        YakoMasterCard
    },
    computed: {
        yakomasters: function () {
            let schema = this.$store.getters['cluster/getClusterSchema'];
            let masters_list = [];
            // Generate YakoMaster nodes
            Object.keys(schema.yako_masters).forEach( (nodeID) => {
                masters_list.push({
                    id: nodeID,
                    data: schema.yako_masters[nodeID]
                })
            });
            return masters_list;
        }
    }
}
</script>

<style scoped>

</style>