<script setup>
import { storeToRefs } from "pinia";
import { useDisplay } from 'vuetify'
import { computed } from "vue";
import { useMenuStore } from "@/stores/menu.js";

const { name } = useDisplay()
const useMenu = useMenuStore();
// Store Menu
const { changeDrawer } = useMenu;
const { drawer } = storeToRefs(useMenu);

const height = computed(() => {
    switch (name.value) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
        case 'xxl': return 1200
    }
    return undefined
})
</script>

<template>
    <v-app-bar :elevation="0" density="compact" flat floating style="background: transparent;" app>
        <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="height < 600" @click="changeDrawer(!drawer)"></v-app-bar-nav-icon>
        </template>
    </v-app-bar>
</template>