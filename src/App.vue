<template>
    <Navbar></Navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    export default {
        components: { Navbar }
    }
</script>

<style>
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    .app {
        padding: 10px 15px;
        margin: 15px 0 30px 0;
        overflow: hidden;
    }

    .app__buttons {
        display: flex;
        justify-content: space-between;
    }

</style>