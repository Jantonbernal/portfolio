<script setup>
import { watch, reactive, computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import Swal from 'sweetalert2'
import '@sweetalert2/theme-wordpress-admin/wordpress-admin.scss';
import axios from "axios";

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
        console.log(received);
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
        <v-card class="mx-auto hover" prepend-icon="mdi mdi-email-arrow-right-outline"
            title="Escribeme, con mucho gusto te atenderé">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="5">
                        <div :class="{ error: v$.form.email.$errors.length }">
                            <v-text-field v-model="form.email"
                                :error-messages="v$.form.email.$errors.map(e => e.$message)"
                                @blur="v$.form.email.$touch" @input="v$.form.email.$touch" label="Ingrese su Email"
                                variant="solo-filled" color="primary"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                        <div :class="{ error: v$.form.subject.$errors.length }">
                            <v-text-field v-model="form.subject"
                                :error-messages="v$.form.subject.$errors.map(e => e.$message)"
                                @blur="v$.form.subject.$touch" @input="v$.form.subject.$touch" label="Asunto"
                                variant="solo-filled" color="primary"></v-text-field>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div :class="{ error: v$.form.body.$errors.length }">
                            <v-textarea v-model="form.body" :error-messages="v$.form.body.$errors.map(e => e.$message)"
                                @blur="v$.form.body.$touch" @input="v$.form.body.$touch" label="Cuerpo del Mensaje"
                                variant="solo-filled" color="primary" rows="1" auto-grow></v-textarea>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider class="mt-3"></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn prepend-icon="mdi mdi-email-arrow-right-outline" block @click="save" :disabled="loading">
                    <template v-slot:prepend>
                        <v-icon color="primary"></v-icon>
                    </template>
                    Enviar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>