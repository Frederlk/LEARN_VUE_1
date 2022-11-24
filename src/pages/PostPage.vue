<template>
    <div>
        <h1>Posts Page</h1>
        <MyInput v-model="searchQuery" placeholder="Search" />

        <div class="app__buttons">
            <MyButton @click="showDialog">Create Post</MyButton>
            <MySelect v-model="selectedSort" :options="sortOptions" />
        </div>

        <PostList v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
        <div v-else>Loading...</div>

        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost" />
        </MyDialog>

        <div
            v-intersection="{ func: loadMorePosts, page: page, totalPages: totalPages }"
            ref="observer"
            class="observer"
        ></div>
        <!-- <Pagging :page="page" :totalPages="totalPages" :changePage="changePage"/> -->
    </div>
</template>

<script>
import axios from "axios";

import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import Pagging from './components/Pagging.vue';

export default {
    components: {
        PostForm,
        PostList,
        // Pagging
    },
    data() {
        return {
            posts: [],
            page: 0,
            limit: 10,
            totalPages: 1,
            dialogVisible: false,
            modificatorValue: "",
            isPostsLoading: false,
            searchQuery: "",
            selectedSort: "",
            sortOptions: [
                { value: "title", name: "By Title" },
                { value: "body", name: "By Description" },
            ],
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },
        // async fetchPosts() {
        //     try {
        //         this.isPostsLoading = true;
        //         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        //             params: {
        //                 _page: this.page,
        //                 _limit: this.limit,
        //             }
        //         });
        //         this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        //         this.posts = response.data;
        //     } catch (e) {
        //         alert('Error');
        //     } finally {
        //         this.isPostsLoading = false
        //     }
        // }
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    },
                });
                this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert("Error");
            }
        },
    },
    mounted() {
        this.loadMorePosts();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]));
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter((post) =>
                post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    },
};
</script>

<style>
.observer {
    height: 30px;
    background-color: aquamarine;
}
</style>
