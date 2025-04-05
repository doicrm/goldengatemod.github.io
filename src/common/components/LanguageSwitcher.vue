<template>
  <Select
    v-model="locale"
    :options="availableLocales"
    @update:modelValue="onLanguageChange"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value">
        <img
          :alt="slotProps.value.label"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`flag flag-${slotProps.value?.toLowerCase()}`"
        />
      </div>
    </template>
    <template #option="slotProps">
      <div>
        <img
          :alt="slotProps.option.label"
          src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
          :class="`flag flag-${slotProps.option?.toLowerCase()}`"
        />
      </div>
    </template>
  </Select>
</template>

<script setup lang="ts">
import Select from 'primevue/select'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()

onMounted(() => {
  const savedLocale = localStorage.getItem('locale') || 'pl'
  locale.value = savedLocale
})

const onLanguageChange = () => {
  localStorage.setItem('locale', locale.value)
}
</script>

<style lang="scss" scoped>
.p-select {
  background: none;
  border: 0;
}
:deep(.p-select-dropdown) {
    display: none;
}
</style>
