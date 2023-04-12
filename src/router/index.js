import { createWebHistory , createRouter } from "vue-router"
import Home from "@/views/Home"
import Contact from "@/views/Contact"
import About from "@/views/About"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    
];

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;


