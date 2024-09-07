<script lang="ts" setup>
import { ref } from 'vue'

const members = ref([
  { id: 1, nickname: 'Sentarion', role: 'założyciel i szef grupy, fabuła, skrypty, spacer' },
  { id: 2, nickname: 'Rysa', role: '2D' },
  { id: 3, nickname: 'Adach', role: 'muzyka' },
  { id: 4, nickname: 'Fabiosek', role: 'skrypty' },
  { id: 5, nickname: 'MocnyFull', role: 'spacer' },
  { id: 6, nickname: 'wogsel', role: 'scenarzysta' },
  { id: 7, nickname: 'Montresor', role: 'scenarzysta' },
  { id: 8, nickname: 'Avgust', role: '3D' },
  { id: 9, nickname: 'Nashadu', role: 'spacer' },
  { id: 10, nickname: 'Doic', role: 'skrypty, spacer' },
  { id: 11, nickname: 'Yorick', role: 'scenarzysta' },
  { id: 12, nickname: 'Zirael', role: 'scenarzysta, 2D' },
  { id: 13, nickname: 'Jugoslavia', role: 'scenarzysta' },
  { id: 14, nickname: 'kedart', role: '3D' },
  { id: 15, nickname: 'Rafiss', role: 'skrypty' },
  { id: 16, nickname: 'Damianut', role: 'skrypty' }
])
</script>

<template>
  <div class="container mx-auto max-w-screen-lg pt-6">
    <h2 class="text-2xl font-bold mb-6">Złote Wrota Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="member in members" :key="member.id">
        <h5 class="text-l font-semibold mb-2">
          {{ member.nickname }}
          <p class="text-gray-700">{{ member.role }}</p>
        </h5>
      </div>
    </div>
  </div>
</template>
