<script setup>
import SideBar from './SideBar.vue';
import TopBar from './TopBar.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
</script>

<template>
    <v-layout ref="app" class="rounded rounded-md" color="blue-grey-lighten-4">
        <SideBar />
        <TopBar />
        <Main />
        <!-- <Footer /> -->
    </v-layout>
</template>
