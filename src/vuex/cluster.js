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
        }
    }
}

export default cluster;