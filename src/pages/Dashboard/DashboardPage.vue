<template>
    <section id="dashboard" class="flex flex-col w-full h-full p-5">
        <h1 class="font-bold text-2xl"> Dashboard </h1>
        <div class="flex w-full h-full py-5 overflow-hidden space-x-5">
            <div class="flex flex-col w-1/2 h-full space-y-5">
                <!-- YakoMasters list -->
                <div class="flex flex-col w-full h-1/2 bg-white rounded-xl p-5 space-y-2">
                    <div class="flex w-full justify-between">
                        <h2 class="font-bold text-xl"> Masters </h2>
                        <div class="flex space-x-2">
                            <IButton
                                :icon="list_icon"
                                @click="this.masters_list_mode = true"
                                :disable="this.masters_list_mode"
                                class="bg-primary hover:bg-primary_variant rounded-md"
                                :class="this.masters_list_mode ? 'disabled:opacity-30 disabled:hover:bg-primary' : null"
                            />
                            <IButton
                                :icon="grid_icon"
                                @click="this.masters_list_mode = false"
                                :disable="!this.masters_list_mode"
                                class="bg-primary hover:bg-primary_variant rounded-md"
                                :class="!this.masters_list_mode ? 'disabled:opacity-30 disabled:hover:bg-primary' : null"
                            />
                        </div>
                    </div>
                    <div class="w-full h-full overflow-y-auto"
                         :class="this.masters_list_mode ? 'flex flex-col space-y-3' : 'grid grid-cols-2 grid-rows-auto gap-3'"
                    >
                        <YakoMasterCard v-for="(master, index) in yakomasters" :key="index" :master="master" :list="this.masters_list_mode"/>
                    </div>
                </div>
                <!-- YakoAgents list -->
                <div class="flex flex-col w-full h-1/2 bg-white rounded-xl p-5 space-y-2">
                    <div class="flex w-full justify-between">
                        <h2 class="font-bold text-xl"> Agents </h2>
                        <div class="flex space-x-2">
                            <IButton
                                :icon="list_icon"
                                @click="this.agents_list_mode = true"
                                :disable="this.agents_list_mode"
                                class="bg-primary hover:bg-primary_variant rounded-md"
                                :class="this.agents_list_mode ? 'disabled:opacity-30 disabled:hover:bg-primary' : null"
                            />
                            <IButton
                                :icon="grid_icon"
                                @click="this.agents_list_mode = false"
                                :disable="!this.agents_list_mode"
                                class="bg-primary hover:bg-primary_variant rounded-md"
                                :class="!this.agents_list_mode ? 'disabled:opacity-30 disabled:hover:bg-primary' : null"
                            />
                        </div>
                    </div>
                    <div class="w-full h-full overflow-y-auto"
                         :class="this.agents_list_mode ? 'flex flex-col space-y-3' : 'grid grid-cols-2 grid-rows-auto gap-3'"
                    >
                        <YakoMasterCard v-for="(agent, index) in yakoagents" :key="index" :master="agent" :list="this.agents_list_mode"/>
                    </div>
                </div>
            </div>
            <NodesApps/>
        </div>
    </section>
</template>

<script>
import YakoMasterCard from "@/components/Dashboard/YakoMasterCard";
import IButton from "@/components/UI/IButton";
import {mdiViewGrid, mdiViewSequential} from "@mdi/js";
import NodesApps from "@/components/Dashboard/NodesApps";
import yakoAPI from "@/services/API/yakoAPI";
export default {
    name: "DashboardPage",
    components: {
        NodesApps,
        IButton,
        YakoMasterCard
    },
    mounted() {
        // Get uploaded apps list and store it to vuex
        yakoAPI.get_apps_list().then( (res) => {
            this.$store.commit('cluster/setAppsList', res.data);
        })
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
        },
        yakoagents: function () {
            let schema = this.$store.getters['cluster/getClusterSchema'];
            let agents_list = [];
            // Generate YakoMaster nodes
            Object.keys(schema.yako_agents).forEach( (nodeID) => {
                agents_list.push({
                    id: nodeID,
                    data: schema.yako_agents[nodeID].info
                })
            });
            return agents_list;
        }
    },
    data() {
        return {
            masters_list_mode: true,
            agents_list_mode: true,
            list_icon: mdiViewSequential,
            grid_icon: mdiViewGrid,
        }
    }
}
</script>

<style scoped>

</style>