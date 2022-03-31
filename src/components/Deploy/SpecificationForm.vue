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
                            v-model="this.cpu_cores_input"
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
                        v-model="this.cpu_cores_input"
                        class="w-24 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        required
                    >
                </div>
            </div>
            <!-- Memory configuration field -->
            <div class="flex flex-col space-y-2">
                <span class="font-bold"> Memory (GB) </span>
                <div class="flex w-full space-x-5">
                    <div class="flex flex-col w-full">
                        <input
                            type="range"
                            id="memory_range"
                            :max="this.max_ram"
                            min="1"
                            step="1"
                            v-model="this.ram_input"
                            class="form-range appearance-none w-full p-0 h-2.5 rounded-xl bg-gray-200 focus:outline-none
                            focus:ring-0 focus:shadow-none"
                        />
                        <div class="flex relative">
                            <div class="absolute text-sm bottom-0 left-0 -mb-6">1</div>
                            <div class="absolute text-sm bottom-0 right-0 -mb-6">{{ this.max_ram }}</div>
                        </div>
                    </div>
                    <input
                        type="number"
                        id="memory"
                        :max="this.max_ram"
                        min="1"
                        v-model="this.ram_input"
                        class="w-24 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                        required
                    >
                </div>
            </div>
            <!-- GPU configuration field -->
            <div class="flex flex-col space-y-2">
                <span class="font-bold"> GPU Cores </span>
                <div class="flex w-full space-x-5">
                    <div class="flex flex-col w-full">
                        <input
                            type="range"
                            id="gpu_cores_range"
                            :max="this.max_gpu_cores"
                            min="1"
                            step="1"
                            v-model="this.gpu_cores_input"
                            class="form-range appearance-none w-full p-0 h-2.5 rounded-xl bg-gray-200 focus:outline-none
                            focus:ring-0 focus:shadow-none"
                        />
                        <div class="flex relative">
                            <div class="absolute text-sm bottom-0 left-0 -mb-6">1</div>
                            <div class="absolute text-sm bottom-0 right-0 -mb-6">{{ this.max_gpu_cores }}</div>
                        </div>
                    </div>
                    <input
                        type="number"
                        id="gpu_cores"
                        :max="this.max_gpu_cores"
                        min="1"
                        v-model="this.gpu_cores_input"
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
    watch: {
        cpu_cores_input(newValue) {
            if ( newValue > this.max_cpu_cores ) {
                this.cpu_cores_input = this.max_cpu_cores;
            }
            if ( newValue <= 0 && newValue !== "") {
                this.cpu_cores_input = 1;
            }
        },
    },
    data() {
        const max_ram = 512;
        const max_cpu_cores = 64;
        const max_gpu_cores = 1000;
        return {
            max_ram,
            max_cpu_cores,
            max_gpu_cores,
            cpu_cores_input: 1,
            ram_input: 1,
            gpu_cores_input: 1
        }
    }
}
</script>

<style scoped>

</style>