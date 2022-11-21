<template>
    <div class="app">
        <h1>Posts Page</h1>
        <div>
            <MyButton style="margin: 15px 0 30px 0" @click="showDialog">Create Post</MyButton>
        </div>

        <PostList v-if="!isPostsLoading" :posts="posts" @remove="removePost"/>
        <div v-else>Loading...</div>

        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost" />
        </MyDialog>
    </div>
</template>

<script>
    import axios from 'axios'
    
    import PostForm from './components/PostForm.vue';
    import PostList from './components/PostList.vue';

    export default {
        components: {
            PostForm,
            PostList,
        },
        data() {
            return {
                posts: [],
                dialogVisible: false,
                modificatorValue: '',
                isPostsLoading: false,
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true
            },
            async fetchPosts() {
                try {
                    this.isPostsLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                } catch (e) {
                    alert('Error');
                } finally {
                    this.isPostsLoading = false
                }
            }
        },
        mounted() {
            this.fetchPosts()
        }
 
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
    }
</style>