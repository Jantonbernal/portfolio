<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'

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
</script>

<template>
    <v-container fluid>
        <v-row align="center" justify="center" dense>
            <v-col cols="auto" v-for="(item, index) in courses" :key="index">
                <v-card :class="height > 400 ? ' mr-5' : ''" class="mx-auto hover" variant="plain" max-width="400" min-height="380" :href="item.uri"
                    target="_blank" hover>
                    <img :src="'/portfolio/src/assets/images/courses/' + item.image" class="align-end" height="200px" width="100%"
                        cover>
                    <v-card-title class="wrap" v-text="item.title"></v-card-title>
                    </img>

                    <div class="px-4 mb-2">
                        <v-chip color="primary ma-2" v-for="(skill, x) in item.skills" :key="x">
                            <p class="font-weight-bold text-caption"> {{ skill }} </p>
                        </v-chip>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.wrap {
    white-space: wrap;
}
</style>