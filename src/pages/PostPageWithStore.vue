<template>
    <div>
        <h1>Страница с постами</h1>
        <MyInput
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск...."
            v-focus
        />
        <div class="app__btns">
            <MyButton @click="showDialog"> Создать пользователя </MyButton>
            <MySelect
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost" />
        </MyDialog>
        <PostList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="page__wrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{
                    'current-page': page === pageNumber,
                }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    methods: {
        ...mapMutations({
            setPage: "post/setPage",
            setSearchQuery: "post/setSearchQuery",
            setSelectedSort: "post/setSelectedSort",
        }),
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPosts: "post/fetchPosts",
        }),
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
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            isPostsLoading: (state) => state.post.isPostsLoading,
            selectedSort: (state) => state.post.selectedSort,
            searchQuery: (state) => state.post.searchQuery,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
            sortOptions: (state) => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: "post/sortedPosts",
            sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
        }),
    },
};
</script>

<style>
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 2px solid teal;
}
.observer {
    height: 30px;
    background: green;
}
</style>
