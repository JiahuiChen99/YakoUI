const deploy = {
    namespaced: true,
    state: () => ({
       deploy_app_name: '',
    }),
    mutations: {
        // stores the name of the app to be deployed in the cluster
        setName(state, name) {
            state.deploy_app_name = name;
        },
    },
    getters: {
        // gets the name of the app to be deployed in the cluster
        getDeployAppName(state) {
            return state.deploy_app_name;
        }
    }
}

export default deploy;