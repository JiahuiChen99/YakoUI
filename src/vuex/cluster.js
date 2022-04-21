const cluster = {
    namespaced: true,
    state: () => ({
        cluster_schema: {},
        node_selected: false,
        selected_node_id: '',
        apps_list: null,
    }),
    mutations: {
        // Stores the name of the app to be deployed in the cluster
        setClusterSchema(state, cluster_schema) {
            state.cluster_schema = cluster_schema;
        },
        // Toggles node selection, hide/show yakonode information right panel
        setNodeSelected(state, { status, id}) {
            state.node_selected = status;
            state.selected_node_id = id;
        },
        // Stores the uploaded apps list
        setAppsList(state, apps_list) {
            state.apps_list = apps_list;
        }
    },
    getters: {
        // gets the name of the app to be deployed in the cluster
        getClusterSchema(state) {
            return state.cluster_schema;
        },
        // Gets node_selected status to hide/show yakonode information right panel
        getNodeSelectedStatus(state) {
            return state.node_selected;
        },
        getSelectedNodeID(state) {
            return state.selected_node_id;
        },
        getAppsList(state) {
            return state.apps_list;
        }
    }
}

export default cluster;