<template>
    <div class="flex w-full h-full">
        <div class="flex flex-col w-full h-full bg-white rounded-lg">
            <h1 class="font-bold text-xl my-2"> App Requirements </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpecificationForm",
    data() {
        const max_ram = 512;
        const max_cpu_cores = 64;
        const max_gpu_cores = 1000;
        return {
            max_ram,
            max_cpu_cores,
            max_gpu_cores
        }
    }
}
</script>

<style scoped>

</style>