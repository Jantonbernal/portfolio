<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import '@sweetalert2/theme-wordpress-admin/wordpress-admin.scss';

const dataEndPoint = ref(null);
const errorEndPoint = ref(null);

const reset = () => {
    dataEndPoint.value = null;
    errorEndPoint.value = null;
}

watch(errorEndPoint, (received) => {
    if (received) {
        console.log(received);
        Swal.fire({
            title: "Error!",
            text: "Ocurrio un error al obtener la frase celebre",
            icon: "error",
            timer: 2000
        });
    }
})
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <p class="text-h1 font-weight-bold text-important">Juan Manuel Antón</p>
                <code class="text-h5 my-4">
                    <div>
                        <p class="typingEffect">
                            console.log('Soy Desarrollador Web')
                        </p>
                    </div>
                </code>
                <p class="text-subtitle-1 mt-10 description">
                    Soy Desarrollador Web, dedicado al desarrollo y enseñanza de tecnologías web, mayormente
                    Javascript
                    con <span class="text-important"> VueJS </span> y PHP con
                    <span class="text-important"> Laravel. </span>
                    Con mas de 6 años de experiencia en desarrollo web profesional y múltiples proyectos web con Laravel
                    y VueJS,
                    estos proyectos los puedes observar en la sección
                    <span class="text-important">
                        <v-btn variant="plain" size="small" density="compact" :to="{ name: 'Project' }">
                            proyectos.
                        </v-btn>
                    </span>
                </p>
            </v-col>
            <v-col cols="12" md="6" class="d-flex justify-center align-center align-self-center">
                <v-avatar rounded="0" size="350">
                    <img width="100%" src="@/assets/images/profile-2.png" cover alt="user" />
                </v-avatar>
            </v-col>
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