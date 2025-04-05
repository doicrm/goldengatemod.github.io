<template>
  <section id="locations">
    <Tabs v-model:value="selectedTab" scrollable>
      <TabList>
        <Tab v-for="(location, index) in locations" :key="index" :value="index">
          {{ t(location.title) }}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="(location, index) in locations" :key="index" :value="index">
          <p class="m-0">{{ t(location.description) }}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
</template>
  
<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const selectedTab = ref(0)

const locations = ref([
  { title: 'goldenGate2.world.locations.town.title', description: 'goldenGate2.world.locations.town.description' },
  { title: 'goldenGate2.world.locations.huntersCamp.title', description: 'goldenGate2.world.locations.huntersCamp.description' },
  { title: 'goldenGate2.world.locations.banditsCamp.title', description: 'goldenGate2.world.locations.banditsCamp.description' },
  { title: 'goldenGate2.world.locations.hasisRuins.title', description: 'goldenGate2.world.locations.hasisRuins.description' },
  { title: 'goldenGate2.world.locations.gereza.title', description: 'goldenGate2.world.locations.gereza.description' },
  { title: 'goldenGate2.world.locations.lumberjackCamp.title', description: 'goldenGate2.world.locations.lumberjackCamp.description' },
  { title: 'goldenGate2.world.locations.swamps.title', description: 'goldenGate2.world.locations.swamps.description' }
])
</script>
  