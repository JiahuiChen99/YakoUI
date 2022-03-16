const cluster = {
    namespaced: true,
    state: () => ({
        cluster_schema: {},
    }),
    mutations: {
        // stores the name of the app to be deployed in the cluster
        setClusterSchema(state, cluster_schema) {
            state.cluster_schema = cluster_schema;
        },
    },
    getters: {
        // gets the name of the app to be deployed in the cluster
        getClusterSchema(state) {
            return state.cluster_schema;
        }
    }
}

export default cluster;