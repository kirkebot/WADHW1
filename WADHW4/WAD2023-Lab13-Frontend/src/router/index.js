import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";




const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/api/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/api/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;