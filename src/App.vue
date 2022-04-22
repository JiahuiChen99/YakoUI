<template>
    <div id="app" class="flex h-screen w-screen select-none bg-primary">
        <!-- Left navigation bar -->
        <NavigationBar/>
        <!-- Page rendered by router -->
        <router-view/>
    </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import yakoAPI from "@/services/API/yakoAPI";
export default {
    name: 'App',
    components: {
        NavigationBar
    },
    mounted() {
        // TODO: Make the following call when connected to a YakoMaster
        // Get the cluster schema from YakoMaster
        this.get_cluster_info();
        // Set interval for API calls to update UI cluster information
        window.setInterval(this.get_cluster_info, 5000);
    },
    methods: {
        /**
         * Makes an API get cluster schema call and stores to vuex
         */
        get_cluster_info: function () {
            yakoAPI.get_cluster().then( res => {
                this.$store.commit('cluster/setClusterSchema', JSON.parse(res.data))
            });
        }
    }
}
</script>

<style>

</style>
