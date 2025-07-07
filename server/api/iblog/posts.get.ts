import apiRoutes from "~/modules/iblog/config/apiRoutes";


export default defineCachedEventHandler(async (event) => {

        const queries = getQuery(event);

        const config = useRuntimeConfig();
        const apiRoute = `${config.public.apiRoute}`;

        let api = `${apiRoute}${apiRoutes.posts}`;

        const params = {
            take: 60,
            page: 1,
            filter: {
                categoryId: queries.categoryId,
                order: {
                    field: "created_at",
                    way: "asc"
                }
            },
            lazy: false
        }

        const data = await $fetch(`${api}`, {params})
            .then(res => res?.data || null);

        return data;
    }, {
        group: "iblog",
        name: "iblog_posts_by_category",
        maxAge: 60 * 2, // 2 minutes

        getKey: (event) => `category${getQuery(event)?.categoryId || ''}`
    }
)