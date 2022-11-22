<template>
    <div class="post">
        <div>
            <div><strong>ID:</strong> {{post.id}}</div>
            <div><strong>Title:</strong> {{post.title}}</div>
            <div><strong>Description:</strong> {{post.body}}</div>
        </div>
        <div class="post__btns">
            <MyButton @click="$router.push('/posts/' + post.id)">More</MyButton>
            <MyButton @click="$emit('remove', post)">Remove</MyButton>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        border: 2px solid black;
        margin-bottom: 15px;
    }
</style>