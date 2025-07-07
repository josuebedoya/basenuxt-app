<template>
  <q-layout>
    <div class="tw-bg-stone-100 tw-flex tw-flex-col tw-h-screen">

      <div class="iblog-header">
        <HeaderApp/>
      </div>

      <div class="iblog-content tw-flex-1 tw-px-[5vw]">
        <slot/>
      </div>

      <div class="iblog-footer">
        <FooterApp/>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import HeaderApp from '../components/header/index.vue';
import FooterApp from '../components/footer/index.vue';
</script>