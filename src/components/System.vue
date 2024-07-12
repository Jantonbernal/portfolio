<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { name } = useDisplay()
const systems = ref([])

onMounted(() => {
    systems.value.push({
        id: 1,
        title: 'Aplicación Web - Playa de Estacionamiento',
        year: 2024,
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'Consulta DNI/RUC & Placa', icon: null, color: null },
        ],
        uri: 'https://youtu.be/0BLet4K40ac',
        image: 'garage.png',
        alt: 'Imagen de la aplicación Playa de Estacionamiento'
    })

    systems.value.push({
        id: 1,
        title: 'Aplicación Web - Courier',
        year: 2024,
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'Facturación Electronica', icon: null, color: null },
            { name: 'Consulta DNI/RUC', icon: null, color: null },
        ],
        uri: 'https://youtu.be/0BLet4K40ac',
        image: 'courier.png',
        alt: 'Imagen de la aplicación Playa de Courier'
    })
})

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

const getImageUrl = (name) => {
    return new URL(`../assets/images/systems/${name}`, import.meta.url).href
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in systems" :key="index" class="mx-auto mb-5"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" max-width="400" min-height="380"
            :href="item.uri" target="_blank" variant="plain">
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" :alt="item.alt"
                loading="lazy" cover>
            </img>
            <v-card-title class="wrap" v-text="item.title"></v-card-title>
            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                    v-for="(skill, x) in item.skills" :key="x">
                    <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color" start></v-icon>
                    <p v-if="skill.name"> {{ skill.name }} </p>
                </v-chip>
            </div>
        </v-card>
    </v-container>
</template>

<style>
.wrap {
    white-space: wrap;
}
</style>