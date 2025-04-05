<template>
  <section id="faq">
    <Accordion :value="0">
      <AccordionPanel v-for="(item, index) in faq" :key="index" :value="index.toString()">
        <AccordionHeader>{{ t(item.question) }}</AccordionHeader>
        <AccordionContent>
          <p class="m-0">{{ t(item.answer) }}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </section>
</template>
  
<script setup lang="ts">
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const faq = ref([
  { question: 'goldenGate2.faq.0.question', answer: 'goldenGate2.faq.0.answer' },
  { question: 'goldenGate2.faq.1.question', answer: 'goldenGate2.faq.1.answer' },
  { question: 'goldenGate2.faq.2.question', answer: 'goldenGate2.faq.2.answer' },
  { question: 'goldenGate2.faq.3.question', answer: 'goldenGate2.faq.3.answer' },
  { question: 'goldenGate2.faq.4.question', answer: 'goldenGate2.faq.4.answer' },
  { question: 'goldenGate2.faq.5.question', answer: 'goldenGate2.faq.5.answer' },
  { question: 'goldenGate2.faq.6.question', answer: 'goldenGate2.faq.6.answer' },
  { question: 'goldenGate2.faq.7.question', answer: 'goldenGate2.faq.7.answer' },
  { question: 'goldenGate2.faq.8.question', answer: 'goldenGate2.faq.8.answer' },
  { question: 'goldenGate2.faq.9.question', answer: 'goldenGate2.faq.9.answer' },
  { question: 'goldenGate2.faq.10.question', answer: 'goldenGate2.faq.10.answer' },
  { question: 'goldenGate2.faq.11.question', answer: 'goldenGate2.faq.11.answer' },
  { question: 'goldenGate2.faq.12.question', answer: 'goldenGate2.faq.12.answer' }
])
</script>
  