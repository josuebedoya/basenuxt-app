<script setup>
const items = [
  {
    name: 'Tienda',
    to: '/products'
  },
  {
    name: 'Categorias',
    to: '/b/'
  }
]
</script>

<template>
  <div class="header tw-shadow-gray-300 tw-shadow-md tw-bg-white tw-p-4">
    <div class="tw-container tw-flex tw-flex-row tw-gap-4 tw-justify-between tw-align-center">
      <div class="logo">
        <nuxt-link to="/" class="logo-link">
          <img src="../../../iauth/assets/images/red-logo-imagina.png" alt="Logo"/>
        </nuxt-link>
      </div>
      <nav class="nav">
        <ul class="nav-list tw-flex tw-flex-row tw-gap-4">
          <li v-for="item in items" :key="item.name">
            <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>