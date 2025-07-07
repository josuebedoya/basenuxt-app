import {createResolver, defineNuxtModule, extendPages, addLayout} from '@nuxt/kit'

import pagesConfig from './config/pages.ts'

export default defineNuxtModule({
    meta: {
        name: 'iblog'
    },
    setup(options) {
        const resolver = createResolver(import.meta.url)

        extendPages((pages) => {

            pagesConfig.forEach((page) => {
                pages.unshift({
                    name: page.name,
                    path: page.path,
                    /* file is the component/page to render */
                    file: resolver.resolve(page.page),  // when the page is in inside the module
                    //file: '~/pages/coffee.vue',  //when the page is  in absolute route
                    meta: page?.meta || {}
                })

            })
        })

        // Cretate layout to Module
        addLayout({
            write: true,
            filename: 'iblog.vue',

            // If the next Route exist in /layouts/iblog.vue, This will be ignored
            src: resolver.resolve('./layouts/iblog.vue'),
        }, 'iblog')
    }
})