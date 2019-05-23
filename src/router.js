import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Resume from './components/resume.pdf';
import pageNotFound from './views/404.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'app',
            component: App,
        },
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        },
        {
            path: '*',
            name: '404',
            component: pageNotFound,
        },
    ],
});