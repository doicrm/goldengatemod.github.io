<script lang="ts" setup>
import { ref } from 'vue'

const oldMembers = ref([
  { id: 1, nickname: 'Rathgar', role: '3D, 2D, HTML' },
  { id: 2, nickname: 'Xardas17', role: 'skrypty, 3D' },
  { id: 3, nickname: 'Kereth', role: 'spacer' },
  { id: 4, nickname: 'Bucik', role: 'skrypty' },
  { id: 5, nickname: 'Creenthe', role: '2D, 3D' },
  { id: 6, nickname: 'Gumen', role: '3D' },
  { id: 7, nickname: 'Cor Anghar VII', role: 'spacer' },
  { id: 8, nickname: 'Bagwell', role: 'filmy' },
  { id: 9, nickname: 'Dagonet', role: '3D' },
  { id: 10, nickname: 'Damianx', role: '3D' },
  { id: 11, nickname: 'Herszt', role: '3D' },
  { id: 12, nickname: 'Lord', role: 'spacer' },
  { id: 13, nickname: 'The Snajper', role: '3D, spacer' },
  { id: 14, nickname: 'Wowoz', role: '2D' },
  { id: 15, nickname: 'Vader', role: 'spacer' },
  { id: 16, nickname: 'Famas', role: 'muzyka' },
  { id: 17, nickname: 'Revolution', role: '3D' },
  { id: 18, nickname: 'Bragamus', role: 'scenarzysta' },
  { id: 19, nickname: 'damdan', role: 'spacer' },
  { id: 20, nickname: 'Sier4a', role: 'spacer' },
  { id: 21, nickname: 'Fahren Imi', role: '3D' },
  { id: 22, nickname: 'FraseR', role: 'spacer' },
  { id: 23, nickname: 'Rinz', role: 'obsługa techniczna serwera multiplayer' },
  { id: 24, nickname: 'Adrian "VEQ" Fałkowski', role: '2D, 3D' },
  { id: 25, nickname: 'Żelazko', role: 'tłumacz' },
  { id: 26, nickname: 'Ksondar', role: 'spacer' },
  { id: 27, nickname: 'Dragomir', role: '3D' },
  { id: 28, nickname: 'Jedaith', role: '2D, 3D' },
  { id: 29, nickname: 'Adanos', role: 'skrypty, fabuła' },
  { id: 30, nickname: 'Avallach', role: '2D, 3D' },
  { id: 31, nickname: 'mark56', role: 'animacje' },
  { id: 32, nickname: 'Gornos', role: 'spacer' },
  { id: 33, nickname: 'Martinos', role: 'dubbing, spacer' },
  { id: 34, nickname: 'Szynalone', role: 'tłumacz, 3D' },
  { id: 35, nickname: 'Kuba Czaker', role: 'fabuła' },
  { id: 36, nickname: 'Vanarius', role: 'spacer' },
  { id: 37, nickname: 'Xankir', role: 'spacer' },
  { id: 38, nickname: 'Duch', role: 'scenarzysta' },
  { id: 39, nickname: 'Zavima', role: 'scenarzysta' },
  { id: 40, nickname: 'RychuKapucino', role: '3D' },
  { id: 41, nickname: 'Avanqes', role: 'scenarzysta' },
  { id: 42, nickname: 'Marcin "Ronczo" Jarosiński', role: 'skrypty' },
  { id: 43, nickname: 'schody100', role: 'scenarzysta' },
  { id: 44, nickname: 'Król_Koboldów', role: 'scenarzysta' },
  { id: 45, nickname: 'Snorri', role: 'scenarzysta' },
  { id: 46, nickname: 'drock', role: 'skrypty' },
  { id: 47, nickname: 'Marlena', role: 'scenarzystka' },
  { id: 48, nickname: 'Rey', role: 'spacer' },
  { id: 49, nickname: 'KwiatekTV', role: 'spacer' },
  { id: 50, nickname: 'Setrox', role: 'testy' }
])
</script>

<template>
  <div class="container mx-auto max-w-screen-lg pt-6">
    <h2 class="text-2xl font-bold mb-6">Współpracowali z nami:</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="oldMember in oldMembers" :key="oldMember.id">
        <h5 class="text-l font-semibold mb-2">
          {{ oldMember.nickname }}
          <p class="text-gray-700">{{ oldMember.role }}</p>
        </h5>
      </div>
    </div>
  </div>
</template>
