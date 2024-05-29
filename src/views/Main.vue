<script setup>
</script>

<template>
  <v-main class="my-3 scrollable-content" style="min-height: 300px;">
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