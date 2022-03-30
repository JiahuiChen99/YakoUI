<template>
    <div class="flex w-full h-full">
        <div class="flex flex-col w-full h-full bg-white rounded-lg">
            <h1 class="font-bold text-xl my-2"> App Requirements </h1>
            <!-- CPU configuration field -->
            <div class="flex flex-col space-y-2">
                <span class="font-bold"> CPU Cores </span>
                <div class="flex w-full space-x-5">
                    <div class="flex flex-col w-full">
                        <input
                            type="range"
                            id="cpu_cores_range"
                            :max="this.max_cpu_cores"
                            min="1"
                            step="1"
                            value="1"
                            class="form-range appearance-none w-full p-0 h-2.5 rounded-xl bg-gray-200 focus:outline-none
                            focus:ring-0 focus:shadow-none"
                        />
                        <div class="flex relative">
                            <div class="absolute text-sm bottom-0 left-0 -mb-6">1</div>
                            <div class="absolute text-sm bottom-0 right-0 -mb-6">{{ this.max_cpu_cores }}</div>
                        </div>
                    </div>
                    <input
                        type="number"
                        id="cpu_cores"
                        :max="this.max_cpu_cores"
                        min="1"
                        value="1"
                        class="w-24 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        required
                    >
                </div>
            </div>
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