<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";
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

</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <p class="font-weight-bold" :class="[
                    currentTheme == 'dark' ? 'text-important-dark' : 'text-important-light',
                    height <= 400 ? 'text-h4' : 'text-h1'
                ]">
                    Juan Manuel Antón
                </p>
                <code class="text-h5 my-4" :class="currentTheme == 'dark' ? 'bg-code-dark' : 'bg-code-light'">
                    <div>
                        <p class="typingEffect">
                            console.log("Soy Desarrollador Web")
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
                <img class="profile" :width="height <= 400 ? '60%' : '80%' " src="@/assets/images/profile-2.png" alt="Foto Perfil" loading="lazy" cover />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
code {
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 100%;
}

.bg-code-dark {
    color: rgb(var(--v-theme-on-surface)) !important;
    background-color: rgb(var(--v-theme-surface)) !important;
}

.bg-code-light {
    color: rgb(var(--v-theme-on-surface)) !important;
    background-color: rgb(var(--v-theme-surface)) !important;
}

.typingEffect {
    width: 0;
    overflow: hidden;
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

.profile {
    filter: drop-shadow(11px 12px 11px rgb(var(--v-theme-surface)))
}
</style>