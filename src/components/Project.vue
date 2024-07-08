<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { name } = useDisplay()
const projects = ref([])

onMounted(() => {
    projects.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'PersonalsDates',
        year: 2024,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'JWT'
        ],
        uri: 'https://personalsdates.com/',
        image: 'personalsdate.png',
        alt: 'Imagen del proyecto PersonalsDates'
    })

    projects.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'TouchClick',
        year: 2024,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'Git'
        ],
        uri: 'https://www.limatours.com.pe/',
        image: 'limatours.png',
        alt: 'Imagen del proyecto TouchClick'
    })

    projects.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Lustro EIRL',
        year: 2021,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'API',
            'APISPERU',
            'PipeDrive',
            'Git'
        ],
        uri: 'https://larebaja.pe/',
        image: 'lustro.png',
        alt: 'Imagen del proyecto Lustro EIRL'
    })

    projects.value.push({
        id: 1,
        title: 'Analista Desarrollador',
        company: 'Sociedad Automotores Inka SAC',
        year: 2018,
        uri: null,
        skills: [
            'PHP',
            'Laravel',
        ],
        image: 'saisac.png',
        alt: 'Imagen del proyecto SAISAC'
    })

    projects.value.push({
        id: 1,
        title: 'Desarrolldor Web',
        company: 'Colegio de Estadisticos del Perú',
        year: 2018,
        uri: 'https://coespela.org.pe/',
        skills: [
            'PHP',
            'Laravel',
        ],
        image: 'coespe.png',
        alt: 'Imagen del proyecto COESPE'
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
    return new URL(`../assets/images/projects/${name}`, import.meta.url).href
}

</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in projects" class="mx-auto mb-5"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" variant="plain" max-width="450"
            min-height="350" :href="item.uri" target="_blank">
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" :alt="item.alt"
                loading="lazy">
            <v-card-title v-text="item.company"></v-card-title>
            </img>

            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                    v-for="(skill, x) in item.skills" :key="x">
                    <p class="font-weight-bold"> {{ skill }} </p>
                </v-chip>
            </div>
        </v-card>
    </v-container>
</template>