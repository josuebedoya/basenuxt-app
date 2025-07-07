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
const postsData = await ref(apiPosts?.value || []);

if (postsData.value.length > 0) {
  posts.value = postsData.value.map((post: any) => {

    return {
      img: post.mediaFiles?.mainimage?.path,
      title: post.title,
      summary: post.summary,
      category: post.category,
      url: post.url
    };
  });
}

// Get active category
const activeCategory = await getActiveCategory(categories.value);
if (activeCategory) {

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

        <div class="top-section tw-pb-5">
          <h2 class="tw-text-center tw-text-4xl tw-mb-4 tw-font-bold">Titulo</h2>
        </div>

        <ItemPost :posts="posts"/>

      </div>
    </div>
  </div>
</template>
