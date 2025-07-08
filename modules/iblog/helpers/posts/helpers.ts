import {useRoute} from 'vue-router';

const getPosts = {

    async byCategory(id: number | string, params: Object) {

        const api = `/api/iblog/posts`
        const data = await $fetch(api, {
                method: "GET",
                params: {
                    categoryId: id,
                    take: params?.take || 60,
                    page: params?.page || 10,
                    ...params
                }
            }
        )
            .then(res => res);

        return data?.map((post: any) => {
            return {
                img: post.mediaFiles?.mainimage?.path,
                title: post.title,
                summary: post.summary,
                category: post.category,
                url: '/p/' + post.category.slug + '/' + post.slug
            };
        }) || null;
    }
}

const getActivePost = (posts: any[]): any => {

    const route = useRoute();

    if (!posts) return null;

    const activeCategory = posts.filter(p => p.slug === route.params.slug);

    return activeCategory || [];

}

export {getActivePost};
export default getPosts;