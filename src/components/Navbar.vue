<template>
    <nav class="navbar">
        <div  @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <MyButton @click="$router.push('/posts')">Posts</MyButton>
            <MyButton @click="$router.push('/about')">About</MyButton>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        padding: 0 15px;
        height: 50px;
        background-color:burlywood;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        gap: 10px;
        align-items:center;
    }
    .navbar__btns  {
        margin-left: auto;
    }
</style>