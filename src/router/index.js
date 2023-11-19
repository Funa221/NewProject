import {
    createRouter,
    // createWebHistory,
    createWebHashHistory,
} from "vue-router";


import HomeView from "../views/HomeView.vue";
import ContentWeb from "../components/content/ContentWeb.vue";


const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            children: [
              {
                name: "main",
                path: "main",
                component: ContentWeb,
              },
              ]
        }]
});
export default router;