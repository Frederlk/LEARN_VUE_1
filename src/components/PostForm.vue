<template>
    <form @submit="prevent" class="form">
        <h4>Post Creator</h4>
        <MyInput 
            v-focus
            v-model="post.title"
            placeholder="title" 
            name="title" />
        <MyInput 
            v-model="post.body"
            placeholder="description" 
            name="description" />
        <MyButton 
            @click="createPost" 
            type="button" 
            style="align-self: flex-end; margin-top: 15px;"
        >
            Add
        </MyButton>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: "",
                    body: ""
                }
            };
        },
        methods: {
            createPost() {
                this.post.id = Date.now();
                this.$emit("create", this.post);
                this.post = {
                    title: "",
                    body: ""
                };
            }
        },
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }
</style>