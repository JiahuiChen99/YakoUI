<template>
    <button class="flex w-fit h-fit rounded-lg p-0.5">
        <SvgIcon :path="icon" type="mdi"/>
    </button>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";

/**
 * IButton component is a button with an icon
 */
export default {
    name: "IButton",
    props: ['icon'],
    components: {
        SvgIcon
    }
}
</script>

<style scoped>

</style>