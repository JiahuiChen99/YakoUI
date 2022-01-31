<template>
    <div class="flex flex-col h-full p-5 gap-y-5 bg-secondary transition-all" :class="nav_state ? 'w-80': 'w-20'">
        <div class="flex content-center" :class="nav_state ? 'justify-between' : 'justify-center'">
            <!-- App logo -->
            <!-- App name -->
            <h1 v-if="nav_state" class="font-bold text-2xl"> YakoUI </h1>
            <SvgIcon class="flex content-center justify-center hover:cursor-pointer"
                :path="nav_state ? shrink_icon : expand_icon"
                type="mdi"
                size="28"
                @click="nav_state = !nav_state"
            />
        </div>

        <!-- Navigation buttons -->
        <div class="flex flex-col gap-y-5">
            <div v-for="(page, index) in pages" :key="index" class="flex justify-between">
                <router-link :active-class="nav_state ? 'text-primary_variant dark:bg-dark_primary_variant' : 'bg-primary'"
                             :class="nav_state ? null : 'justify-center'"
                             class="flex w-full py-2 dark:bg-dark_primary hover:text-primary_variant
                             dark:hover:bg-dark_primary_variant rounded-lg"
                             :to="page.page_link" @click="selected = index">
                        <SvgIcon type="mdi" :path="page.button_icon"/>
                        <span class="ml-3 font-bold" v-if="nav_state">{{ page.button_name }}</span>
                </router-link>
                <!-- Active Page dot -->
                <div v-if="nav_state" class="flex w-2 h-2 rounded-full self-center" :class="index === selected ? 'bg-primary_variant' : null"/>
            </div>
        </div>
    </div>
</template>div

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
    mdiChevronDoubleLeft,
    mdiChevronDoubleRight,
    mdiServer,
    mdiServerPlus,
    mdiViewDashboardOutline
} from "@mdi/js";

export default {
    name: "NavigationBar",
    components: {
        SvgIcon
    },
    data() {
        return {
            nav_state: true,
            selected: 0,
            expand_icon: mdiChevronDoubleRight,
            shrink_icon: mdiChevronDoubleLeft,
            pages: [
                {
                    button_name: 'Deploy',
                    button_icon: mdiServerPlus,
                    page_link: '/deploy'
                },
                {
                    button_name: 'Dashboard',
                    button_icon: mdiViewDashboardOutline,
                    page_link: '/dashboard'
                },
                {
                    button_name: 'Cluster',
                    button_icon: mdiServer,
                    page_link: '/cluster'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>