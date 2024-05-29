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
        year: 2020,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'API',
            'Git',
            'Consulta DNI/RUC & Placa'
        ],
        uri: 'https://youtu.be/0BLet4K40ac',
        image: 'garage.png'
    })

    systems.value.push({
        id: 1,
        title: 'Aplicación Web - Courier',
        year: 2024,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'API',
            'Git',
            'Facturación Electronica',
            'Consulta DNI/RUC'
        ],
        uri: 'https://youtu.be/0BLet4K40ac',
        image: 'courier.png'
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
        <v-card v-for="(item, index) in systems" :key="index" class="mx-auto mb-5" :class="currentTheme == 'dark' ? 'hover-dark' : 'hover-light'" variant="plain" max-width="400"
            min-height="380" :href="item.uri" target="_blank" hover>
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" cover>
            <v-card-title class="wrap" v-text="item.title"></v-card-title>
            </img>

            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2" v-for="(skill, x) in item.skills" :key="x">
                    <p class="font-weight-bold text-caption"> {{ skill }} </p>
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