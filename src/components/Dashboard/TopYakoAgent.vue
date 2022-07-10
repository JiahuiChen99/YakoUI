<template>
    <div class="flex flex-col h-auto w-full aspect-square bg-white rounded-lg place-items-center place-content-center hover:cursor-pointer">
        <div class="font-bold">
            {{ agent.id }}
        </div>
    </div>
</template>

<script>
export default {
    name: "TopYakoAgent",
    props: ['agent'],
    mounted() {
        // Get yakoagent information from vuex store
    },
    data() {
        return {
            info: null,
        }
    }
}
</script>

<style scoped>

</style>