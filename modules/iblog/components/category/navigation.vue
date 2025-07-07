<template>
  <nav class="nav">
    <q-list
        dense
        class="tw-flex tw-no-wrap tw-gap-2 tw-border-b tw-border-gray-300 tw-pb-2 tw-pt-4 overflow-x-auto"
    >

      <q-item
          v-for="category in  categories"
          dense
          :key="category.slug"
          :class="'tw-capitalize text-dark text-md hover:tw-bg-red-500 hover:!tw-text-white tw-rounded-xl tw-font-semibold' + (activeSlug === category.slug ? ' tw-bg-gray-500 !tw-text-white' : '')"
          :active="activeSlug === category.slug"
      >

        <q-item-section v-if="category.title">
          <nuxt-link :to="`/iblog/c/${category.slug}`">
            {{ category.title }}
          </nuxt-link>
        </q-item-section>

      </q-item>

    </q-list>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})


const router = useRoute();
const activeSlug = ref(router.params.slug);

const categories = ref([])

if (props.categories && props.categories.length > 0) categories.value = props.categories;

</script>
