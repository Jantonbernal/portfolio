const NotFound = () => import('@/views/Error.vue');
const Home = () => import('@/views/HomeView.vue');
const About = () => import('@/components/About.vue');
const Experience = () => import('@/components/Experience.vue');
const Project = () => import('@/components/Project.vue');
const Courses = () => import('@/components/Courses.vue');
const System = () => import('@/components/System.vue');
const Contact = () => import('@/components/Contact.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: '/',
                name: 'About',
                component: About,
                meta: {
                    requiresAuth: false,
                },
            },
            {
                path: '/experience',
                name: 'Experience',
                component: Experience,
                meta: {
                    requiresAuth: false,
                },
            },
            {
                path: '/projects',
                name: 'Project',
                component: Project,
                meta: {
                    requiresAuth: false,
                },
            },
            {
                path: '/courses',
                name: 'Courses',
                component: Courses,
                meta: {
                    requiresAuth: false,
                },
            },
            {
                path: '/systems',
                name: 'System',
                component: System,
                meta: {
                    requiresAuth: false,
                },
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact,
                meta: {
                    requiresAuth: false,
                },
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    },
]

export default routes