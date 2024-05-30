<script setup>
import { computed, onMounted, ref } from 'vue';
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
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'Git'
        ],
        uri: 'https://www.udemy.com/course/creacion-de-aplicaciones-web-modernas-con-laravel-y-vuejs/learn/lecture/20336329?referralCode=C4B970DD2B737A4B03F6#overview',
        image: 'course-1.jpg'
    })

    courses.value.push({
        id: 1,
        title: 'Consumo de APIS con Laravel y Vuejs',
        year: 2024,
        skills: [
            'JavaScript',
            'PHP',
            'VueJS',
            'Laravel',
            'API',
            'Git'
        ],
        uri: 'https://www.udemy.com/course/consumo-de-apis-con-laravel-vuejs/learn/lecture/42643848?referralCode=0C089591919EBF55675C#overview',
        image: 'course-2.png'
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
    return new URL(`../assets/images/courses/${name}`, import.meta.url).href
}
</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in courses" :key="index" class="mx-auto mb-5" :class="currentTheme == 'dark' ? 'hover-dark' : 'hover-light'" variant="plain" max-width="400"
            min-height="380" :href="item.uri" target="_blank" hover>
            <img :src="getImageUrl(item.image)" class="align-end" height="200px" width="100%" cover>
            <v-card-title class="wrap" v-text="item.title"></v-card-title>
            </img>

            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2" v-for="(skill, x) in item.skills" :key="x">
                    <p class="font-weight-bold"> {{ skill }} </p>
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