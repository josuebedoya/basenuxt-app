<script lang="ts" setup>
import ItemPost from "../../components/partials/itemPost.vue";
import Navigation from "../../components/category/navigation.vue";
import getActiveCategory from "../../helpers/categories/helpers";
import getPosts from "../../helpers/posts/helpers";

// Get posts data
const {data: apiCategories} = await useAsyncData('categories',
    () => $fetch(`/api/iblog/categories`)
);
const categories = await ref(apiCategories?.value || []);

// Get posts data
const {data: apiPosts} = await useAsyncData('posts',
    () => $fetch(`/api/iblog/posts`)
);
const posts = ref([]);

if (apiPosts.value.length > 0) {
  posts.value = apiPosts.value.map((post: any) => {
    return {
      img: post.mediaFiles?.mainimage?.path,
      title: post.title,
      summary: post.summary,
      category: post.category,
      url: '/p/' + post.category.slug + '/' + post.slug
    };
  });
}

// Get active category
const activeCategory = await getActiveCategory(categories.value);

if (activeCategory.length > 0) {
  posts.value = await getPosts.byCategory(activeCategory?.[0].id);
}

</script>

<template>
  <div class="categories-page">
    <div class="menu">
      <Navigation :categories="categories"/>
    </div>

    <div class="content tw-py-10">
      <div class="container">

        <div class="top-section tw-pb-5" v-if="activeCategory.length > 0">
          <h2 class="tw-text-center tw-text-4xl tw-mb-4 tw-font-bold">{{ activeCategory[0].title }}</h2>
        </div>

        <div class="=tems tw-grid tw-grid-cols-4 tw-gap-5">
          <ItemPost
              v-for="(post, index) in posts"
              :key="index"
              :post="post"
          />
        </div>

      </div>
    </div>
  </div>
</template>
