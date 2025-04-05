<template>
  <Menubar :model="items" class="sticky-menubar">
    <template #start>
      <img src="../../assets/gg-logo.png" width="48" height="48" />
    </template>
    <template #item="{ item, props }">
      <a
        class="flex items-center"
        v-bind="props.action"
        :href="item.url"
        :class="{ 'active-tab': isActive(item.url) }"
      >
        <span>{{ te(item.label) ? t(item.label) : item.label }}</span>
      </a>
    </template>
    <template #end>
      <LanguageSwitcher />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import LanguageSwitcher from '@/common/components/LanguageSwitcher.vue'
import type { MenuItem } from 'primevue/menuitem'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, te } = useI18n()
const route = useRoute()

const items = ref<MenuItem[]>([
  {
    label: 'navigation.goldenGate2',
    // url: '/',
    items: [
      {
        label: 'Cechy modyfikacji',
        url: '/#pros'
      },
      {
        label: 'Lore',
        url: '/#lore'
      },
      {
        label: 'goldenGate2.world.title',
        url: '/#locations'
      },
      {
        label: 'goldenGate2.hero.title',
        url: '/#hero'
      },
      {
        label: 'goldenGate2.npcs.title',
        url: '/#npcs'
      },
      {
        label: 'goldenGate2.quests.title',
        url: '/#quests'
      },
      {
        label: 'goldenGate2.music.title',
        url: '/#music'
      },
      {
        label: 'Dubbing',
        url: '/#dubbing'
      },
      {
        label: 'goldenGate2.mechanics.title',
        url: '/#mechanics'
      },
      {
        label: 'goldenGate2.visuals.title',
        url: '/#visuals'
      },
      {
        label: 'FAQ',
        url: '/#faq'
      },
    ]
  },
  {
    label: 'navigation.goldenGate',
    url: '/golden-gate',
    disabled: true,
  },
  {
    label: 'navigation.team',
    url: '/team',
  },
  {
    label: 'navigation.joinUs',
    url: '/join-us',
  },
])

const isActive = (url: string) => route.path === url
</script>

<style lang="css" scoped>
.sticky-menubar {
  position: sticky;
  top: 0;
  z-index: 1000;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--p-amber-300);
}

.active-tab {
  font-weight: bold;
  color: var(--p-amber-200);
}
</style>
