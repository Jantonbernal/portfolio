<script setup>
import { onMounted, ref } from 'vue';
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const loading = ref(false)
const experiences = ref([])

onMounted(() => {
    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Objetio Virtual',
        country: 'Argentina',
        from: '2024 AGO',
        to: '2024 SEP',
        description: 'Desarrolle el panel de administración de la empresa, en la cual lleva el control de ingresos/egresos de la misma, realizan cotizaciones, proyectos, emision de comprobantes, pagos, generación de reportes, etc',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Objetio Virtual',
        country: 'Argentina',
        from: '2024 JUN',
        to: '2024 JUL',
        description: 'Desarrolle el sitio web administrable OMBU, donde el cliente puede visualizar productos, tiene un apartado que una vez iniciado sesión pueda ver diferentes detalles de los productos solo accesibles estando logueado, todo el contenido es administrable',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'PersonalsDates',
        country: 'USA',
        from: '2024 JUN',
        to: '2024 JUL',
        description: 'Desarrollo del sitio web de citas PersonalsDates administrable, los usuarios subir imagenes, videos, tiene un editor de texto para ingresar el contenido de su bio de la manera mas personalizada posible',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Team Leader',
        company: 'DATAMATRIX',
        country: 'México',
        from: '2024 ABRI',
        to: 'actual',
        description: 'Analisis de requerimientos, diseño de base de datos y gestión de proyectos de software',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'Trello', icon: 'mdi mdi-trello', color: '#0079BF' },
            { name: 'LucidChart', icon: null, color: '#ED8B00' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'TouchClick',
        country: 'Perú',
        from: '2024 ENE',
        to: '2024 ABRI',
        description: 'Colaboración con el equipo para conocer los requisitos y las especificaciones de los clientes, HelpDesk a los usuarios de aplicación respecto a fallos y funcionalidades de la aplicación web, Validaciones y nuevas funcionalidades sobre la reserva de paquetes de hotelería ',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Lustro EIRL',
        country: 'Perú',
        from: '2021 AGO',
        to: '2023 DIC',
        description: 'Desarrolle la aplicación web SGC (Sistema de Gestión Comercial), desarrollado con Laravel 8 y Vuejs 2, Exponer APIS para la aplicación movil y el sitio web de Lustro, Diseño, desarrollo y mantenimiento de la aplicación web, Integración de servicios externos, como correo electrónico, facturación electrónica, embudo de ventas con pipedrive. ',
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
    })

    experiences.value.push({
        id: 1,
        title: 'Analista Desarrollador',
        company: 'Sociedad Automotores Inka SAC',
        country: 'Perú',
        from: '2018 AGO',
        to: '2020 JUN',
        description: 'Desarrolle la aplicación web de cotización, compra y venta de vehículos automotores a nivel nacional (Chiclayo, Lima, Trujillo), Aplicación web multi empresa / multi sucursal, Desarrollado con Laravel y Vuejs, integrando los procesos de la aplicación web con el ERP SAP Business ONE - SAP Hana, utilizando SQL Server 2012 como SGBD, Participación en reuniones y presentaciones técnicas',
        skills: [
            { name: 'Javascript', icon: 'mdi mdi-language-javascript', color: '#F7DF1E' },
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'VueJS', icon: 'mdi mdi-vuejs', color: '#4FC08D' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'Git', icon: 'mdi mdi-git', color: '#F05032' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
            { name: 'JWT', icon: null, color: '#000000' },
            { name: 'SAP BUSINESS ONE', icon: null, color: '#0FAAFF' },
        ],
    })

    experiences.value.push({
        id: 1,
        title: 'Desarrollador Web',
        company: 'Colegio de Estadisticos del Perú',
        country: 'Perú',
        from: '2018 ENE',
        to: '2018 MAR',
        description: 'Desarrolle el sitio web oficial del colegio de estadísticos del Perú – región Lambayeque',
        skills: [
            { name: 'PHP', icon: 'mdi mdi-language-php', color: '#777BB4' },
            { name: 'Laravel', icon: 'mdi mdi-laravel', color: '#FF2D20' },
            { name: 'MySQL', icon: 'mdi mdi-database', color: '#4479A1' },
        ],
    })
})

</script>

<template>
    <v-container fluid>
        <v-card v-for="(item, index) in experiences" :key="index" class="mx-auto mb-15"
            :class="currentTheme == 'dark' ? 'card-dark' : 'card-light'" max-width="550" variant="plain">
            <v-card-item>
                <v-card-title>
                    {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                    <span class="me-1">
                        {{ item.company }}
                    </span>
                </v-card-subtitle>
            </v-card-item>

            <v-card-text>
                <div class="text-subtitle-1">
                    {{ item.country }} | {{ item.from }} - {{ item.to }}
                </div>
                <div>
                    {{ item.description }}
                </div>
            </v-card-text>

            <div class="px-4 mb-2">
                <v-chip label :class="currentTheme == 'dark' ? 'primary' : 'info'" class="ma-2"
                    v-for="(skill, x) in item.skills" :key="x" :color="!skill.icon ? skill.color : ''">
                    <v-icon v-if="skill.icon" :icon="skill.icon" :color="skill.color" :size="!skill.name ? 'large' : 'default'" start></v-icon>
                    <p v-if="skill.name"> {{ skill.name }} </p>
                </v-chip>
            </div>
        </v-card>
    </v-container>
</template>