<template>
  <MenuNavigation />
  <RouterView />
  <ScrollTop />
  <BottomFooter />
</template>

<script setup lang="ts">
import MenuNavigation from '@/common/components/MenuNavigation.vue'
import BottomFooter from '@/common/components/BottomFooter.vue'
import ScrollTop from 'primevue/scrolltop'
</script>

<style lang="css" scoped>
.p-scrolltop {
  background-color: var(--p-amber-200) !important;
  border-color: var(--p-amber-300) !important;
}
</style>
