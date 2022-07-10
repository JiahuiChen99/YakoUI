import axios from "axios";

class yakoAPI {
    constructor() {
        // Create base axios instance
        this.api = axios.create({
            // TODO: Change the API address
            baseURL: 'http://localhost:8001',
            timeout: 5000,
        })
    }

    /**
     * Deploys the app - Sends the selected application
     * to be deployed to YakoMaster
     * @param endpoint route relative path
     * @param app application to be deployed
     * @param params axios http params
     * @return {Promise<AxiosResponse<any>>}
     */
     deploy_app(endpoint, app, params) {
        return this.api.post(endpoint, app, params)
    }

    /**
     * Pings YakoMaster for an availability check
     * @param endpoint route '/alive'
     * @return {Promise<AxiosResponse<any>>}
     */
    health_check(endpoint) {
        return this.api.get(endpoint);
    }

    /**
     * Gets the cluster graph schema
     * @return {Promise<AxiosResponse<any>>}
     */
    get_cluster() {
        return this.api.get('cluster')
    }

    /**
     * Gets the apps that have been uploaded to the system
     * @return {Promise<AxiosResponse<any>>}
     */
    get_apps_list() {
        return this.api.get('cluster/apps');
    }
}

// New instance of the API service
const yakoapi = new yakoAPI();

export default yakoapi;