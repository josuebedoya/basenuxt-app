const layout = 'iblog';

const pages = [
    {
        name: 'iblog,categories',
        path: '/iblog/c/:slug?',
        page: 'pages/categories/index.vue',

        meta: {
            layout,
            title: 'iblog.categories.title',
            breadcrumb: 'Categorias',
        }
    },
    {
        name: 'iblog.posts',
        path: '/iblog/p/:slug?',
        page: 'pages/posts/index.vue',

        meta: {
            layout,
            title: 'iblog.posts.title',
            breadcrumb: ':slug',
        }
    }
]

export default pages;