<script setup>
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { name } = useDisplay()
const courses = ref([])

onMounted(() => {
    courses.value.push({
        id: 1,
        title: 'Creación de aplicaciones web modernas con Laravel y Vuejs',
        year: 2020,
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
        uri: 'https://www.udemy.com/course/creacion-de-aplicaciones-web-modernas-con-laravel-y-vuejs/learn/lecture/20336329?referralCode=C4B970DD2B737A4B03F6#overview',
        image: 'course-1.jpg',
        alt: 'Imagen del curso Creación de aplicaciones web modernas con Laravel y Vuejs'
    })

    courses.value.push({
        id: 1,
        title: 'Consumo de APIS con Laravel y Vuejs',
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
        uri: 'https://www.udemy.com/course/consumo-de-apis-con-laravel-vuejs/learn/lecture/42643848?referralCode=0C089591919EBF55675C#overview',
        image: 'course-2.png',
        alt: 'Imagen del curso Consumo de APIS con Laravel y Vuejs'
    })
})

const getImageUrl = (name) => {
    return new URL(`../assets/images/courses/${name}`, import.meta.url).href
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in courses" :key="index" class="mx-auto mb-5"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" variant="plain" max-width="400"
            min-height="380" :href="item.uri" target="_blank">
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" :alt="item.alt"
                loading="lazy">
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