<template>
  <section id="locations">
    <Tabs v-model:value="selectedTab" scrollable>
      <TabList>
        <Tab v-for="(npc, index) in npcs" :key="index" :value="index">
          {{ npc.title }}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="(npc, index) in npcs" :key="index" :value="index">
          <p class="m-0">{{ t(npc.description) }}</p>
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

const npcs = ref([
  { title: 'Alrik', description: 'goldenGate2.npcs.list.alrik' },
  { title: 'Ramsey', description: 'goldenGate2.npcs.list.ramsey' },
  { title: 'Ashton', description: 'goldenGate2.npcs.list.ashton' },
  { title: 'Olsa', description: 'goldenGate2.npcs.list.olsa' },
  { title: 'Sylvia', description: 'goldenGate2.npcs.list.sylvia' }
])
</script>
    