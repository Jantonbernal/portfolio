<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import '@sweetalert2/theme-wordpress-admin/wordpress-admin.scss';
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify'

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

const { name } = useDisplay()

const reset = () => {
    dataEndPoint.value = null;
    errorEndPoint.value = null;
}

const height = computed(() => {
    switch (name.value) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
        case 'xxl': return 1200
    }
    return 0
})

// const phrase = ref('');
// const author = ref('');

// const fetchPhrase = async () => {
//     try {
//         const response = await axios.get('api/phrase');
//         phrase.value = response.data.phrase;  // Asegúrate de acceder al campo correcto en el objeto de respuesta
//         author.value = response.data.author;
//     } catch (error) {
//         console.error('Error fetching phrase:', error);
//     }
// };

// onMounted(fetchPhrase);
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <p class="font-weight-bold" :class="[
                    currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light',
                    height <= 400 ? 'text-h4' : 'text-h1'
                ]">
                    Juanma
                </p>
                <code class="text-h5 my-4">
                    <div>
                        <p class="typingEffect">
                            console.log('Soy Desarrollador Web')
                        </p>
                    </div>
                </code>
                <p class="mt-10 description">
                    Soy Desarrollador Web, dedicado al desarrollo y enseñanza de tecnologías web, mayormente
                    Javascript
                    con <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'"> VueJS
                    </span> y PHP con
                    <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'"> Laravel.
                    </span>
                    Con mas de 6 años de experiencia en desarrollo web profesional y múltiples proyectos web con Laravel
                    y VueJS,
                    estos proyectos los puedes observar en la sección
                    <span :class="currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light'">
                        <v-btn variant="plain" size="small" density="compact" :to="{ name: 'Project' }">
                            proyectos.
                        </v-btn>
                    </span>
                </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center align-self-center">
                <v-avatar rounded="0" :size="height <= 400 ? 190 : 350">
                    <img width="100%" src="@/assets/images/profile-2.png" alt="Perfil" loading="lazy" cover />
                </v-avatar>
            </v-col>
            <!-- <v-col cols="12" v-if="phrase && height > 400">
                <div class="d-flex flex-column justify-center align-center mt-7">
                    <p>La frase del día: </p>
                    <p style="width:50%" class="text-center">
                        {{ phrase }}
                    </p>
                    <p class="text-caption">
                        "{{ author }}"
                    </p>
                </div>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<style scoped>
code {
    background-color: #202129;
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 100%;
}

.typingEffect {
    width: 0;
    overflow: hidden;
    /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white;
    /* The cursor*/
    font-size: 16px;
    white-space: nowrap;
    /* Keeps the text on a single line */
    animation: typing 2s steps(30) forwards, blink 1s infinite;
}

/* The typing animation */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink {

    0%,
    45% {
        border-color: transparent;
    }

    50%,
    100% {
        border-color: white;
    }
}
</style>