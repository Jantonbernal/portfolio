<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify'

import { useThemeStore } from "@/stores/theme.js";
import { useMenuStore } from "@/stores/menu.js";

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

const loadMenu = () => {
    options.value.push({
        'link': 'About',
        'name': "echo 'Sobre mi'",
        'print': ''
    })
    options.value.push({
        'link': 'Experience',
        'name': "echo 'Experiencia'",
        'print': ''
    })
    options.value.push({
        'link': 'Project',
        'name': "echo 'Proyectos'",
        'print': ''
    })
    options.value.push({
        'link': 'Courses',
        'name': "echo 'Cursos'",
        'print': ''
    })
    options.value.push({
        'link': 'System',
        'name': "echo 'Sistemas'",
        'print': ''
    })
    options.value.push({
        'link': 'Contact',
        'name': "echo 'Contacto'",
        'print': ''
    })
}

loadMenu()

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

</script>

<template>
    <v-navigation-drawer v-model="drawer" class="pa-8" floating app :width="height >= 500 ? 320 : 257">
        <div class="d-flex flex-column justify-space-between align-center">
            <v-btn @click="toggleTheme" :icon="iconTheme"
                :class="currentTheme == 'dark' ? 'hover-dark' : 'hover-light'" variant="text" size="x-large"></v-btn>
            <v-list v-for="(item, index) in options" :key="index" class="cursor-pointer pt-0 mt-5 text-center"
                density="compact" nav>
                <v-list-item :class="currentTheme == 'dark' ? 'hover-dark' : 'hover-light'" density="comfortable" exact
                    variant="text" tile :to="{ name: item.link }">
                    <v-list-item-title class="typingEffect text-caption">
                        {{ item.print }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="d-flex flex-row mt-16">
                <v-btn v-for="(item, index) in socialMedia" :key="index" :icon="item.icon" :href="item.link"
                    target="_blank" :class="currentTheme == 'dark' ? 'hover-dark' : 'hover-light'" variant="text"
                    size="large"></v-btn>
            </div>
        </div>
    </v-navigation-drawer>
</template>

<style scoped>
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
</style>

<!-- <style>
html,
body,
#app,
.v-application {
    height: 100%;
}

.v-application--wrap {
    min-height: 100%;
}
</style> -->