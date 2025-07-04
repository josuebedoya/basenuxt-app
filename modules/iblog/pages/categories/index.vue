<script lang="ts" setup>
import apiRoutes from "~/modules/iblog/config/apiRoutes";

const categories = [
  {
    name: 'Technology',
    slug: 'technology'
  },
  {
    name: 'Health',
    slug: 'health',
  },
  {
    name: 'Lifestyle',
    slug: 'lifestyle',

  },
  {
    name: 'Travel',
    slug: 'travel'
  },
  {
    name: 'Food',
    slug: 'food'
  }
]

const posts = [
  {
    title: 'Post 1',
    category: 'technology',
    summary: 'Content for post 1',
    button: 'Ver más'
  },
  {
    title: 'Post 2',
    category: 'health',
    summary: 'Content for post 2',
    button: 'Ver más'
  },
  {
    title: 'Post 3',
    category: 'lifestyle',
    summary: 'Content for post 3',
    button: 'Ver más'
  },
  {
    title: 'Post 4',
    category: 'travel',
    summary: 'Content for post 4',
    button: 'Ver más'
  },
  {
    title: 'Post 5',
    category: 'food',
    summary: 'Content for post 5',
    button: 'Ver más'
  }
]

const config = useRuntimeConfig()
const apiRoute = `${config.public.apiRoute}/api`

let api = `${apiRoute}${apiRoutes.categories}`

const {data: apiCategories} = await useAsyncData('iblog-categories',
    () => $fetch(`https://dev-jako.ozonohosting.com/api/iblog/v1/posts?page=1&take=2`)
);
console.info(apiCategories)
</script>

<template>
  <div class="categories-page">
    <div class="nav">
      <q-list
          dense
          class="tw-flex tw-no-wrap tw-gap-2 tw-border-b tw-border-gray-300 tw-pb-2 tw-pt-4 overflow-x-auto"
      >

        <q-item
            v-for="category in categories"
            dense
            :key="category.slug"
            class="tw-capitalize text-dark text-md hover:tw-bg-red-500 hover:!tw-text-white tw-rounded-xl tw-font-semibold"
        >

          <q-item-section>
            <nuxt-link :to="`/iblog/c/${category.slug}`">
              {{ category.name }}
            </nuxt-link>
          </q-item-section>

        </q-item>

      </q-list>
    </div>

    <div class="content tw-py-10">
      <div class="container">

        <div class="top-section tw-pb-5">
          <h2 class="tw-text-center tw-text-4xl tw-mb-4 tw-font-bold">Titulo</h2>
        </div>

        <div class="items tw-grid tw-grid-cols-4 tw-gap-5">
          <q-card class="tw-col-span-1 tw-rounded-lg te-cursor-pointer tw-shadow-lg"
                  v-for="post in posts"
          >
            <q-card-section class="tw-pb-0">
              <h3 class="tw-text-xl tw-font-semibold tw-capitalize">{{ post.title }}</h3>
            </q-card-section>

            <q-card-section class="tw-pb-0">
              <div class="tw-text-md tw-font-light tw-text-justify">{{ post.summary }}</div>
            </q-card-section>

            <q-card-section class="tw-pb-4">
              <h6 class="tw-text-[11px] tw-font-semibold tw-text-primary text-uppercase">{{ post.category }}</h6>
            </q-card-section>

            <q-card-section>
              <q-btn
                  rounded
                  color="primary"
                  padding="3px 25px"
                  push
                  :label="post.button"
                  class="tw-font-semibold tw-text-sm tw-capitalize"
              />
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </div>
</template>
