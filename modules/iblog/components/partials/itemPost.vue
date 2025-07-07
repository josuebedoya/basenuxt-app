<template>
  <div class="items tw-grid tw-grid-cols-4 tw-gap-5">
    <q-card
        class="tw-col-span-1 tw-rounded-lg tw-cursor-pointer tw-shadow-lg"
        v-for="post in posts"
        :key="post.id || post.title"
    >

      <q-card-section v-if="post.img"
                      class="tw-p-0"
      >
        <q-img
            :src="post.img"
            :alt="post.title"
            :ratio="16 / 13"
            class="tw-w-full tw-h-full tw-max-h-[200px] tw-object-cover tw-rounded-t-lg"
        />
      </q-card-section>

      <q-card-section v-if="post.title"
                      class="tw-pb-0">
        <h3 class="tw-text-xl tw-font-semibold tw-capitalize tw-line-clamp-2 tw-min-h-[56px]">{{ post.title }}</h3>
      </q-card-section>

      <q-card-section v-if="post.summary"
                      class="tw-pb-0">
        <div class="tw-text-md tw-font-light tw-text-justify tw-line-clamp-3 tw-min-h-[64px]">{{ post.summary }}</div>
      </q-card-section>

      <q-card-section v-if="post.category"
                      class="tw-pb-4">
        <h6 class="tw-text-[11px] tw-font-semibold tw-text-primary text-uppercase">{{ post.category.title }}</h6>
      </q-card-section>

      <q-card-section v-if="post.url"
                      class="tw-flex tw-justify-start tw-pb-2">
        <q-btn
            rounded
            color="primary"
            padding="3px 25px"
            push
            :label="t('iblog.posts.button')"
            class="tw-font-semibold tw-text-sm tw-capitalize tw-mb-5"
        />
      </q-card-section>

    </q-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const posts = ref([]);

if (props.posts && props.posts.length > 0) {
  posts.value = props.posts;
}

const {t} = useI18n({
  useScope: 'local'
})
</script>
