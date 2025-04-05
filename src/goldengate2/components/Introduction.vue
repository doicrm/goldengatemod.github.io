<template>
  <section id="introduction">
    <div class="container mx-auto max-w-screen-lg pt-8">
      <img
        class="h-auto max-w-lg rounded-lg mx-auto"
        src="../../assets/images/goldengate2/ZW2_biglogo.webp"
        alt="image description"
      />
      <p class="mb-3 text-gray-500 dark:text-gray-200">
        {{ t('goldenGate2.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
