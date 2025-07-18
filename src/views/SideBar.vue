<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router";
import { useDisplay } from 'vuetify'

import { useThemeStore } from "@/stores/theme.js";
import { useMenuStore } from "@/stores/menu.js";

const router = useRouter();

const { name } = useDisplay()
// Store Theme
const useTheme = useThemeStore();
const { toggleTheme } = useTheme;
const { iconTheme, colorTheme, currentTheme } = storeToRefs(useTheme);
// Store de menus
const useMenu = useMenuStore();
const { drawer, menus } = storeToRefs(useMenu);

const options = ref([])
const socialMedia = ref([])

onMounted(() => {
    socialMedia.value.push({
        'icon': 'mdi mdi-github',
        'link': 'https://github.com/Jantonbernal',
    })
    socialMedia.value.push({
        'icon': 'mdi mdi-linkedin',
        'link': 'https://www.linkedin.com/in/juanmanuelantonbernal/',
    })
    socialMedia.value.push({
        'icon': 'mdi mdi-youtube',
        'link': 'https://www.youtube.com/@jantongcode',
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
    return 0
})

watch(height, (value) => {
    if (value <= 500) {
        drawer.value = false
    } else {
        drawer.value = true
    }
})

const verifyToShowMenu = () => {
    switch (name.value) {
        case 'xs': return drawer.value = false
        case 'sm': return drawer.value = false
        case 'md': return drawer.value = false
        case 'lg': return drawer.value = true
        case 'xl': return drawer.value = true
        case 'xxl': return drawer.value = true
    }
}

verifyToShowMenu()

// Carga los menus
const loadMenu = () => {
    options.value.push({
        'link': 'About',
        'name': "echo 'Sobre mi'",
        'description': 'Ir a la página de Sobre mi',
        'print': ''
    })
    options.value.push({
        'link': 'Experience',
        'name': "echo 'Experiencia'",
        'description': 'Ir a la página de Experiencia',
        'print': ''
    })
    options.value.push({
        'link': 'Project',
        'name': "echo 'Proyectos'",
        'description': 'Ir a la página de Proyectos',
        'print': ''
    })
    options.value.push({
        'link': 'Courses',
        'name': "echo 'Cursos'",
        'description': 'Ir a la página de Cursos',
        'print': ''
    })
    options.value.push({
        'link': 'System',
        'name': "echo 'Sistemas'",
        'description': 'Ir a la página de Sistemas',
        'print': ''
    })
    options.value.push({
        'link': 'Contact',
        'name': "echo 'Contacto'",
        'description': 'Ir a la página de Contacto',
        'print': ''
    })
}

loadMenu()

// Genera la animación
const iterateMenu = () => {
    if (options.value.length > 0) {
        options.value.forEach((element, index) => {
            if (element.print.length < element.name.length) {
                element.print += element.name.charAt(element.print.length);
                setTimeout(iterateMenu, 100);
            }
        });
    }
}

iterateMenu()

const goTo = (data = null) => {
    console.log(data);
    router.push({ name: data });
}

</script>

<template>
    <v-navigation-drawer v-model="drawer" class="pa-8" floating app :width="height >= 500 ? 320 : 257">
        <div class="d-flex flex-column justify-space-between align-center">
            <div class="wrapper">
                <input type="checkbox" name="checkbox" class="switch" @click="toggleTheme">
            </div>

            <ul class="ul">
                <li v-for="(item, index) in options" :key="index" class="pt-0 mt-5 text-center li"
                    @click.prevent="goTo(item.link)">
                    <button class="button typingEffect text-caption" aria-label="Menú princiapl del sitio web">
                        <p class="p">
                            {{ item.print }}
                        </p>
                    </button>
                </li>
            </ul>
            <div class="d-flex flex-row mt-16">
                <v-btn v-for="(item, index) in socialMedia" :key="index" :href="item.link" target="_blank"
                    :class="['mx-3', currentTheme === 'dark' ? 'card-dark' : 'card-light']" icon>
                    <v-icon :icon="item.icon" />
                </v-btn>
            </div>
        </div>
    </v-navigation-drawer>
</template>

<style scoped>
/**
 * Efecto de Tipeo
 *
 */
.typingEffect {
    width: 0;
    overflow: hidden;
    /* Ensure the text is not visible until the typewriter effect*/
    /* The cursor*/
    font-size: 16px;
    white-space: nowrap;
    /* Keeps the text on a single line */
    animation: typing 2s steps(30) forwards;
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

/**
 * SideBar
 *
 */
.ul {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    list-style: none;
}

.li {
    margin-bottom: 0px;
}

.button {
    background-color: transparent;
    font-family: sans-serif;
    color: rgb(var(--v-theme-on-surface));
    border: none;
    font-size: 13px !important;
    font-weight: 700;
    padding: 10px 30px;
    position: relative;
    padding-left: 11px;
    text-align: center;
    transition: 0.1s;
    z-index: 1;
}

.p {
    z-index: 2;
    position: relative;
}

.button:hover {
    color: rgb(var(--v-theme-on-surface));
    text-align: center;
}

.button:hover::before {
    transform: rotate(0deg);
    width: 100%;
    height: 40px;
    top: 2px;
    border-radius: 3px;
    background-color: #75a5b823;
}

.button::before {
    content: "";
    border-radius: 1px;
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #75a5b823;
    left: -10px;
    top: 19px;
    transform: rotate(225deg);
    transition: 0.3s;
    z-index: -1;
}

.button:active::before {
    background-color: #75a5b823;
}

/**
 * Switch Theme
 */
.switch {
    position: relative;
    width: 110px;
    height: 40px;
    margin: 0px;
    appearance: none;
    -webkit-appearance: none;
    background-color: rgb(4, 52, 73);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 25px;
    transition: background-image .7s ease-in-out;
    outline: none;
    cursor: pointer;
    overflow: hidden;
}

.switch:checked {
    background-color: rgb(0, 195, 255);
    background-size: cover;
    transition: background-image 1s ease-in-out;
}

.switch:after {
    content: '';
    width: 36px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    transform: translateX(0px);
    animation: off .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes off {
    0% {
        transform: translateX(80px);
        width: 46px;
    }

    50% {
        width: 75px;
        border-radius: 25px;
    }

    100% {
        transform: translateX(0px);
        width: 36px;
    }
}

.switch:checked:after {
    animation: on .7s forwards cubic-bezier(.8, .5, .2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes on {
    0% {
        transform: translateX(0px);
        width: 46px;
    }

    50% {
        width: 75px;
        border-radius: 25px;
    }

    100% {
        transform: translateX(70px);
        width: 36px;
    }
}

.switch:checked:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 5px;
    transform-origin: 53px 10px;
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
    animation: sun .7s forwards ease;
}

@keyframes sun {
    0% {
        transform: rotate(170deg);
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }

    50% {
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }

    90% {
        background-color: #f5daaa;
        box-shadow: 0px 0px 10px #f5deb4,
            0px 0px 20px #f5deb4,
            0px 0px 30px #f5deb4,
            inset 0px 0px 2px #efd3a3;
        filter: blur(1px);
    }

    100% {
        transform: rotate(0deg);
        background-color: #f5daaa;
        box-shadow: 0px 0px 10px #f5deb4,
            0px 0px 20px #f5deb4,
            0px 0px 30px #f5deb4,
            inset 0px 0px 2px #efd3a3;
        filter: blur(1px);
    }
}

.switch:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 1px;
    top: 6px;
    filter: blur(1px);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4,
        0px 0px 20px #f5deb4,
        0px 0px 30px #f5deb4,
        inset 0px 0px 2px #efd3a3;
    transform-origin: 53px 10px;
    animation: moon .7s forwards ease;
}

@keyframes moon {
    0% {
        transform: rotate(0deg);
        filter: blur(1px);
    }

    50% {
        filter: blur(1px);
    }

    90% {
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }

    100% {
        transform: rotate(170deg);
        background-color: transparent;
        box-shadow: 5px -1px 0px #fff;
        filter: blur(0px);
    }
}
</style>