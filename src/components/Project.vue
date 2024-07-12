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
        company: 'Objetivo Virtual',
        year: 2024,
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
        uri: null,
        image: 'ombu.png',
        alt: 'Imagen del proyecto Ombu'
    })

    projects.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'PersonalsDates',
        year: 2024,
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
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
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
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
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: null, icon: 'mdi mdi-api', color: '#000000' },
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
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'SQLServer', icon: 'mdi mdi-database', color: '#4479A1' },
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
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
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
        <v-card v-for="(item, index) in projects" class="mx-auto mb-7 card"
            :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'" variant="plain"
            max-width="450" min-height="350" :href="item.uri" target="_blank">
            <img :src="getImageUrl(item.image)" class="align-end" width="100%" :alt="item.alt" loading="lazy" cover>
            </img>
            <div class="card__content">
                <v-card-title v-text="item.company"></v-card-title>

                <div class="px-4 mb-2">
                    <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                        v-for="(skill, x) in item.skills" :key="x">
                        <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color" start></v-icon>
                        <p v-if="skill.name"> {{ skill.name }} </p>
                    </v-chip>
                </div>
            </div>
        </v-card>
    </v-container>
</template>

<style scoped>
.card {
    position: relative;
    min-height: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card img {
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    opacity: 1;
    transform: rotateX(0deg);
}

.card:hover {
    transform: scale(1.05);
}

.card:hover img {
    scale: 0;
}
</style>