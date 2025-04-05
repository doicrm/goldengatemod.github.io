<template>
  <section id="gallery">
    <Galleria
      v-model:activeIndex="activeIndex"
      v-model:visible="displayCustom"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="7"
      containerStyle="max-width: 60%;"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="{ item }">
        <img :src="item.itemImageSrc" :alt="item.alt" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="{ item }">
        <img :src="item.thumbnailImageSrc" :alt="item.alt" style="display: block" />
      </template>
    </Galleria>
  </section>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria'

interface ImageItem {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
}

const images = ref<ImageItem[]>([])
const activeIndex = ref(0)
const displayCustom = ref(false)

const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 5 },
  { breakpoint: '768px', numVisible: 3 },
  { breakpoint: '560px', numVisible: 1 },
]

const loadImages = async () => {
  const imageFiles = import.meta.glob('@/assets/images/goldengate2/preview/*.webp')
  console.log('Pliki znalezione przez import.meta.glob():', Object.keys(imageFiles))

  const loadedImages: ImageItem[] = [];

  for (const path in imageFiles) {
    try {
      const imageUrl = await imageFiles[path](); 
      console.log(`Załadowano: ${imageUrl.default}`);

      loadedImages.push({
        itemImageSrc: imageUrl.default, 
        thumbnailImageSrc: imageUrl.default,
        alt: path.split('/').pop() || 'Screenshot'
      });
    } catch (error) {
      console.error(`Błąd ładowania obrazu: ${path}`, error)
    }
  }

  images.value = loadedImages
  console.log('Obrazy:', images.value)
};

onMounted(() => {
  loadImages()
});
</script>
