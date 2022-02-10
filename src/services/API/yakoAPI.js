import axios from "axios";

class yakoAPI {
    constructor() {
        // Create base axios instance
        this.api = axios.create({
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
         console.log(this.api)
        return this.api.post(endpoint, app, params)
    }
}

// New instance of the API service
const yakoapi = new yakoAPI();

export default yakoapi;