<script lang="ts" setup>
import {getActivePost} from "~/modules/iblog/helpers/posts/helpers";

const {data: posts} = await useAsyncData('posts',
    () => $fetch('/api/iblog/posts')
)

const post = ref(null);

if (posts.value.length > 0) {
  post.value = getActivePost(posts.value)[0];
}

</script>

<template>
  <div class="index-post" v-if="post">
    <div class="container mx-auto tw-py-20 tw-px-4">

      <div v-if="post.title" class="tw-pb-10">
        <h1 class="tw-text-4xl tw-font-bold tw-text-center tw-mb-4">{{ post.title }}</h1>
      </div>

      <div v-if="post.mediaFiles?.mainimage?.path"
           class="tw-flex tw-justify-center tw-items-center tw-pb-10">
        <q-img
            class="tw-rounded-2xl !tw-max-w-[800px]"
            :src="post.mediaFiles.mainimage.path"
            :alt="post.title"
            style="max-width: 100%; height: auto;"
            :ratio="16/9"
        />
      </div>

      <div v-if="post.description"
           class="tw-text-lg tw-text-gray-700 tw-mb-4 tw-max-w-[1100px] tw-mx-auto tw-px-4 tw-text-center"
      >
        <div v-html="post.description"/>
      </div>

    </div>
  </div>
</template>
