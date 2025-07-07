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
        return data || null;
    }
}
export default getPosts;