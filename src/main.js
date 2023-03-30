import { createApp } from 'vue';
import {createRouter, createWebHistory } from "vue-router"

import Home from "@/components/Home/index";
// import Login from "@/components/Login/index";
// import Auth from "@/components/Auth/index";


const routes = [
    {path: "/",component: Home},
    // {path: "/login", component: Login},
    // {path: "/auth", component: Auth},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
import App from './App.vue';





createApp(App).use(router).mount('#app')
