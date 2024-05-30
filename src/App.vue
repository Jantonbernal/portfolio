<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
// import { followingDotCursor } from 'cursor-effects';

onMounted(() => {
  // new followingDotCursor({particles: 15});
});

const cursorX = ref(0);
const cursorY = ref(0);

const handleMouseMove = (event) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

</script>

<template>
  <v-app id="app" @mousemove="handleMouseMove" class="app">
    <!-- Cursor personalizado -->
    <div class="cursor" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
    <!-- Superposición de margen redondo -->
    <div class="overlay" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>

    <router-view v-slot="{ Component }">
      <transition :name="'slide-fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  /* Evitar el desplazamiento de la barra de desplazamiento */
  background-color: #f0f0f0;
  /* Color de fondo */
}

.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* Evitar el desplazamiento de la barra de desplazamiento */
}

.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: #00000056;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.overlay {
  position: fixed;
  width: 20vw;
  height: 20vh;
  background-color: rgba(104, 111, 175, 0.5);
  /* Color de superposición semitransparente */
  border-radius: 30%;
  /* Borde redondeado */
  pointer-events: none;
  filter: blur(190px);
  /* Desenfoque */
  transition: 0.2s ease;
  /* Transición suave */
  transform: translate(-50%, -50%);
  z-index: 9998;
  /* Debajo del cursor */
}
</style>