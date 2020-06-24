import Main from '@/components/layout/Main';


export default [
    {
        path: "*",
        redirect: "/404"
    },
    {
        path: '/404',
        name: "Not Found",
        hidden: true,
        component: () => import('@/views/error/404')
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/home',
                name: "首页",
                hidden: false,
                component: () => import('@/components/HelloWorld')
            },
            {
                path: '/rules/list',
                name: "角色管理",
                hidden: false,
                component: () => import('@/views/auth/rule/list')
            },
            {
                path: '/user/list',
                name: "用户管理",
                hidden: false,
                component: () => import('@/views/auth/user/list')
            }
        ]
    }]
