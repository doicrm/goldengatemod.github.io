<template>
  <div class="container mx-auto max-w-screen-lg pt-6">

    <h1 class="text-3xl text-amber-300 font-bold mb-6">{{ t('footer.goldenGateTeam') }}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <img src="../../assets/GG_Icon_Big.webp" alt="" class="m-auto" width="75%" height="75%" />
      <div>
        <Timeline :value="activeMembers">
          <template #opposite="slotProps">
            <span class="font-bold text-amber-300">{{ slotProps.item.nickname }}</span>
          </template>
          <template #content="slotProps">
            {{ slotProps.item.role }}
          </template>
        </Timeline>
      </div>
    </div>

    <h2 class="text-2xl text-amber-300 font-bold mt-12 mb-6">Współpracowali z nami:</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="member in inactiveMembers" :key="member.id" class="p-4">
        <span class="font-bold text-lg text-amber-200">{{ member.nickname }}</span>
        <p class="text-sm">{{ member.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from 'primevue/timeline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const members = ref([
  { id: 1, nickname: 'Sentarion', role: 'Założyciel i szef grupy, fabuła, skrypty, Spacer', active: true },
  { id: 2, nickname: 'Rysa', role: '2D', active: true },
  { id: 3, nickname: 'Adach', role: 'Muzyka', active: true },
  { id: 4, nickname: 'Fabiosek', role: 'Skrypty', active: true },
  { id: 5, nickname: 'MocnyFull', role: 'Spacer', active: true },
  { id: 6, nickname: 'wogsel', role: 'Scenarzysta', active: true },
  { id: 7, nickname: 'Montresor', role: 'Scenarzysta', active: true },
  { id: 8, nickname: 'Avgust', role: '3D', active: true },
  { id: 9, nickname: 'Nashadu', role: 'Spacer', active: true },
  { id: 10, nickname: 'Doic', role: 'Skrypty, Spacer', active: true },
  { id: 11, nickname: 'Yorick', role: 'Scenarzysta', active: true },
  { id: 12, nickname: 'Zirael', role: 'Scenarzysta, 2D', active: true },
  { id: 13, nickname: 'Jugoslavia', role: 'Scenarzysta', active: true },
  { id: 14, nickname: 'kedart', role: '3D', active: true },
  { id: 15, nickname: 'Rafiss', role: 'Skrypty', active: true },
  { id: 16, nickname: 'Damianut', role: 'Skrypty', active: true },
  { id: 17, nickname: 'Rathgar', role: '3D, 2D, HTML', active: false },
  { id: 18, nickname: 'Xardas17', role: 'Skrypty, 3D', active: false },
  { id: 19, nickname: 'Kereth', role: 'Spacer', active: false },
  { id: 20, nickname: 'Bucik', role: 'Skrypty', active: false },
  { id: 21, nickname: 'Creenthe', role: '2D, 3D', active: false },
  { id: 22, nickname: 'Gumen', role: '3D', active: false },
  { id: 23, nickname: 'Cor Anghar VII', role: 'Spacer', active: false },
  { id: 24, nickname: 'Bagwell', role: 'Filmy', active: false },
  { id: 25, nickname: 'Dagonet', role: '3D', active: false },
  { id: 26, nickname: 'Damianx', role: '3D', active: false },
  { id: 27, nickname: 'Herszt', role: '3D', active: false },
  { id: 28, nickname: 'Lord', role: 'Spacer', active: false },
  { id: 29, nickname: 'The Snajper', role: '3D, Spacer', active: false },
  { id: 30, nickname: 'Wowoz', role: '2D', active: false },
  { id: 31, nickname: 'Vader', role: 'Spacer', active: false },
  { id: 32, nickname: 'Famas', role: 'Muzyka', active: false },
  { id: 33, nickname: 'Revolution', role: '3D', active: false },
  { id: 34, nickname: 'Bragamus', role: 'Scenarzysta', active: false },
  { id: 35, nickname: 'damdan', role: 'Spacer', active: false },
  { id: 36, nickname: 'Sier4a', role: 'Spacer', active: false },
  { id: 37, nickname: 'Fahren Imi', role: '3D', active: false },
  { id: 38, nickname: 'FraseR', role: 'Spacer', active: false },
  { id: 39, nickname: 'Rinz', role: 'Obsługa techniczna serwera multiplayer', active: false },
  { id: 40, nickname: 'Adrian "VEQ" Fałkowski', role: '2D, 3D', active: false },
  { id: 41, nickname: 'Żelazko', role: 'Tłumacz', active: false },
  { id: 42, nickname: 'Ksondar', role: 'Spacer', active: false },
  { id: 43, nickname: 'Dragomir', role: '3D', active: false },
  { id: 44, nickname: 'Jedaith', role: '2D, 3D', active: false },
  { id: 45, nickname: 'Adanos', role: 'Skrypty, fabuła', active: false },
  { id: 46, nickname: 'Avallach', role: '2D, 3D', active: false },
  { id: 47, nickname: 'mark56', role: 'Animacje', active: false },
  { id: 48, nickname: 'Gornos', role: 'Spacer', active: false },
  { id: 49, nickname: 'Martinos', role: 'Dubbing, Spacer', active: false },
  { id: 50, nickname: 'Szynalone', role: 'Tłumacz, 3D', active: false },
  { id: 51, nickname: 'Kuba Czaker', role: 'Fabuła', active: false },
  { id: 52, nickname: 'Vanarius', role: 'Spacer', active: false },
  { id: 53, nickname: 'Xankir', role: 'Spacer', active: false },
  { id: 54, nickname: 'Duch', role: 'Scenarzysta', active: false },
  { id: 55, nickname: 'Zavima', role: 'Scenarzysta', active: false },
  { id: 56, nickname: 'RychuKapucino', role: '3D', active: false },
  { id: 57, nickname: 'Avanqes', role: 'Scenarzysta', active: false },
  { id: 58, nickname: 'Marcin "Ronczo" Jarosiński', role: 'Skrypty', active: false },
  { id: 59, nickname: 'schody100', role: 'Scenarzysta', active: false },
  { id: 60, nickname: 'Król_Koboldów', role: 'Scenarzysta', active: false },
  { id: 61, nickname: 'Snorri', role: 'Scenarzysta', active: false },
  { id: 62, nickname: 'drock', role: 'Skrypty', active: false },
  { id: 63, nickname: 'Marlena', role: 'Scenarzystka', active: false },
  { id: 64, nickname: 'Rey', role: 'Spacer', active: false },
  { id: 65, nickname: 'KwiatekTV', role: 'Spacer', active: false },
  { id: 66, nickname: 'Setrox', role: 'Testy', active: false }
])

const activeMembers = computed(() => members.value.filter(member => member.active));
const inactiveMembers = computed(() => members.value.filter(member => !member.active));
</script>
