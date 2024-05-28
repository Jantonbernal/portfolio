<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'

const { name } = useDisplay()
const projects = ref([])

onMounted(() => {
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
        image: 'limatours.png'
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
        image: 'lustro.png'
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
        image: 'saisac.png'
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
        image: 'coespe.png'
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
            <v-col cols="auto" v-for="(item, index) in projects" :key="index">
                <v-card :class="height > 400 ? ' mr-5' : ''" class="mx-auto hover" variant="plain" max-width="450"
                    min-height="350" :href="item.uri" target="_blank" hover>
                    <img :src="'/portfolio/src/assets/images/projects/' + item.image" class="align-end" height="200px"
                        width="100%" cover>
                    <v-card-title v-text="item.company"></v-card-title>
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