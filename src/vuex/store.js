import { createStore } from 'vuex';
import deploy from "@/vuex/deploy";

const store = createStore( {
    state() {
        return {
        }
    },
    modules: {
        deploy
    }
});

export default store;