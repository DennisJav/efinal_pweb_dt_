import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: "/estudiante",
        component: () => import("../modules/pages/EstudiantesPage.vue"),
    },
    {
        path: "/token",
        component: () => import("../modules/pages/GenerarToken.vue"),
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
