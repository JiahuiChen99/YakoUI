const deploy = {
    namespaced: true,
    state: () => ({
        deploy_app_name: '',
        best_nodes: [],
    }),
    mutations: {
        // stores the name of the app to be deployed in the cluster
        setName(state, name) {
            state.deploy_app_name = name;
        },
        setBestNodes(state, nodes_list) {
            state.best_nodes = nodes_list;
        }
    },
    getters: {
        // gets the name of the app to be deployed in the cluster
        getDeployAppName(state) {
            return state.deploy_app_name;
        },
        getBestNodes(state) {
            return state.best_nodes;
        }
    }
}

export default deploy;