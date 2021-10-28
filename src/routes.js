import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';
const routerHistory = createWebHashHistory();

import Test from '@/test';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import NotFoundPage from '@/pages/NotFound'
const routers = createRouter({
    history: routerHistory,
    routes:[{
        path: '/',
        name:'main',
        component: HomePage,
    },
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },
        {
            path: '/:CatchAll(.*)',
            name:'404',
            component: NotFoundPage
        }
        ],
});

export default routers;
