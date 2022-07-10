import { createStore } from 'vuex';
import deploy from "@/vuex/deploy";
import cluster from "@/vuex/cluster";

const store = createStore( {
    state() {
        return {
        }
    },
    modules: {
        deploy,
        cluster
    }
});

export default store;