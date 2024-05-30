<script setup>
import { onMounted, ref } from 'vue';

const smoothScroll = (element, delta) => {
  const scrollDuration = 1500; // Duración del scroll en milisegundos
  const scrollStep = delta / 30; // Ajusta la velocidad del scroll
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    element.scrollTop += scrollStep * progress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  return {
    step,
  };
};

const scrollable = ref(null);
let handleWheel;

onMounted(() => {
  scrollable.value = document.querySelector('.scrollable-content');

  handleWheel = (event) => {
    event.preventDefault();
    smoothScroll(scrollable.value, event.deltaY).step(performance.now());
  };

  if (scrollable.value) {
    scrollable.value.addEventListener('wheel', handleWheel);
  }
})

</script>

<template>
  <v-main class="my-3 scrollable-content" ref="scrollable">
    <v-container fluid>
      <!-- Navigation -->
      <router-view v-slot="{ Component }">
        <transition :name="'slide-up'">
          <!-- <keep-alive> -->
          <component :is="Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </v-container>
  </v-main>
</template>