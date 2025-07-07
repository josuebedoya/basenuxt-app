import {useRoute} from 'vue-router';

const getActiveCategory = (categories: any[]): any => {

    const route = useRoute();

    if (!categories) return null;

    const activeCategory = categories.filter(c => c.slug === route.params.slug);

    return activeCategory || [];

}

export default getActiveCategory;