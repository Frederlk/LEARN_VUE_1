import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";
import About from "@/pages/About.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/posts",
        component: PostPage,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/posts/:id",
        component: PostIdPage,
    },
    {
        path: "/store",
        component: PostPageWithStore,
    },
    {
        path: "/composition",
        component: PostPageCompositionApi,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
