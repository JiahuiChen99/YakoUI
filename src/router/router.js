import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import DeployPage from "@/pages/Deploy/DeployPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import ClusterPage from "@/pages/Cluster/ClusterPage";

const routes = [
    {
        path: '/',
        component: DeployPage,
    },
    {
        path: '/deploy',
        name: "deploy",
        component: DeployPage,
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: DashboardPage,
    },
    {
        path: '/cluster',
        name: "cluster",
        component: ClusterPage,
    }
];

const router = createRouter({
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes,
});

export default router;