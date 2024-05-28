<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app class="general">
    <!-- Navigation -->
    <router-view v-slot="{ Component }">
      <transition :name="'slide-fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>
