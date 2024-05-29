<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { followingDotCursor } from 'cursor-effects';

onMounted(() => {
  new followingDotCursor({particles: 15});

});

</script>

<template>
  <v-app>
    <!-- Navigation -->
    <router-view v-slot="{ Component }">
      <transition :name="'slide-fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>
