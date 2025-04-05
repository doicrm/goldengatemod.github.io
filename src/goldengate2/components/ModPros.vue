<template>
  <section id="pros">
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="(benefit, index) in pros"
        :key="index"
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
        class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
      >
        <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
          <i class="pi pi-star !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">{{ t(benefit) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const pros = ref([
  'goldenGate2.pros.0',
  'goldenGate2.pros.1',
  'goldenGate2.pros.2',
  'goldenGate2.pros.3',
  'goldenGate2.pros.4'
]);
</script>
  