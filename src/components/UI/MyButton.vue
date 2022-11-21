<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style scoped>
    .btn {
        height: 40px;
        width: 100px;
        }
</style>