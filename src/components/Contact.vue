<script setup>
import { watch, reactive, computed, ref } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import Swal from 'sweetalert2'
import axios from "axios";
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from 'pinia';

// Store Theme
const useTheme = useThemeStore();
const { currentTheme } = storeToRefs(useTheme);

// Formulario
const form = reactive({
    email: null,
    subject: null,
    body: null,
})

const dataEndPoint = ref(null);
const errorEndPoint = ref(null);
const loading = ref(false);

const reset = () => {
    v$.value.$reset()
    form.email = null
    form.subject = null
    form.body = null
    dataEndPoint.value = null;
    errorEndPoint.value = null;
}

// Definir reglas de validación
const rules = computed(() => ({
    form: {
        email: {
            required: helpers.withMessage('Ingrese un Email, es requerido', required),
            minLength: helpers.withMessage(
                ({
                    $params,
                }) => `El Email debe tener como mínimo ${$params.min} caracteres`, minLength(13)
            ),
            email: helpers.withMessage('Ingrese un Email válido', email)
        },
        subject: {
            required: helpers.withMessage('El asunto es requerido', required),
            minLength: helpers.withMessage(
                ({
                    $params,
                }) => `El asunto debe tener como mínimo ${$params.min} caracteres`, minLength(5)
            )
        },
        body: {
            required: helpers.withMessage('El cuerpo es requerido', required),
        }
    }
}))

// Inicializar validaciones
const v$ = useVuelidate(rules, { form })

// Guardar
const save = async () => {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    sendEmail()
}

const sendEmail = async () => {
    var data = {
        service_id: 'service_yku7wlm',
        template_id: 'template_vpyzbda',
        user_id: 'rhFrQbO0ZM5nXm0qc',
        template_params: {
            'content': 'Recibió un mensaje desde el Email ',
            'email': form.email,
            'subject': form.subject,
            'message': form.body,
        }
    };

    try {
        loading.value = true;
        const res = await axios({
            method: 'POST',
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            data: JSON.stringify(data),
        });
        dataEndPoint.value = res.data;
        errorEndPoint.value = null
    } catch (e) {
        errorEndPoint.value = e.response
    } finally {
        loading.value = false;
    }
}

watch(dataEndPoint, (received) => {
    if (received) {
        Swal.fire({
            title: "Listo!",
            text: "Su mensaje fue enviado con éxito",
            icon: "success",
            timer: 2000
        });
        reset()
    }
})

watch(errorEndPoint, (received) => {
    if (received) {
        Swal.fire({
            title: "Error!",
            text: "Ocurrio un error, vuelva intentar lo mas tarde o comuniquese conmigo por alguna de mis redes sociales",
            icon: "error",
            timer: 2000
        });
        reset()
    }
})

</script>

<template>
    <v-container>
        <v-card class="mx-auto" prepend-icon="mdi mdi-email-arrow-right-outline"
            title="Hola, si necesitas ayuda, escríbeme con mucho gusto te puedo ayudar">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="5">
                        <div :class="{ error: v$.form.email.$errors.length }">
                            <v-text-field v-model="form.email"
                                :error-messages="v$.form.email.$errors.map(e => e.$message)"
                                @blur="v$.form.email.$touch" @input="v$.form.email.$touch" label="Ingrese su Email"
                                variant="solo-filled"
                                :color="currentTheme == 'dark' ? 'primary' : 'info'"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                        <div :class="{ error: v$.form.subject.$errors.length }">
                            <v-text-field v-model="form.subject"
                                :error-messages="v$.form.subject.$errors.map(e => e.$message)"
                                @blur="v$.form.subject.$touch" @input="v$.form.subject.$touch" label="Asunto"
                                variant="solo-filled"
                                :color="currentTheme == 'dark' ? 'primary' : 'info'"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div :class="{ error: v$.form.body.$errors.length }">
                            <v-textarea v-model="form.body" :error-messages="v$.form.body.$errors.map(e => e.$message)"
                                @blur="v$.form.body.$touch" @input="v$.form.body.$touch" label="Cuerpo del Mensaje"
                                variant="solo-filled" :color="currentTheme == 'dark' ? 'primary' : 'info'" rows="1"
                                auto-grow></v-textarea>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider class="mt-3"></v-divider>
            <v-card-actions class="d-flex justify-center align-center">
                <button class="button-send" @click="save" :disabled="loading">
                    Enviar Mensaje
                    <v-icon icon="mdi mdi-email-arrow-right-outline" size="large"></v-icon>
                </button>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<style scoped>
.button-send {
    height: 2.8em;
    width: 60%;
    background: transparent;
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
    border: 2px solid rgb(var(--v-theme-primary));
    outline: none;
    color: rgb(var(--v-theme-primary));
    cursor: pointer;
    font-size: 17px;
}

.button-send:hover {
    background: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-surface));
    animation: squeeze3124 0.9s both;
}

@keyframes squeeze3124 {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}
</style>