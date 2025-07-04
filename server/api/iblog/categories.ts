import apiRoutes from "~/modules/iblog/config/apiRoutes";

export default defineCachedEventHandler(async (e) => {

        const config = useRuntimeConfig()
        const apiRoute = `${config.public.apiRoute}/api`

        let api = `${apiRoute}${apiRoutes.categories}`

        const params = {
            take: 60,
            page: 1,
            filter: {
                ///parentId: constants.cagtegories.mainCategoryId,
                order: {
                    field: "created_at",
                    way: "desc"
                }
            }
        }

        const data = await $fetch(`${api}`, {params})
            .then(res => res?.data || null)

        return data;
    },
    {
        group: 'iblog',
        name: 'categories',
        maxAge: 360 * 1.1,  //minimun time,
        //staleMaxAge: -1, // sent to the client while the cache updates in the background.
        //swr: false
        getKey: (event) => 'categories'
    })