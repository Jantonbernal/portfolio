import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useTheme } from 'vuetify'

export const useThemeStore = defineStore('theme', () => {
    const theme = useTheme();

    const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    const iconTheme = computed(() => {
        if (theme.global.name.value == 'light') {
            return 'mdi-weather-sunny'
        }
        return 'mdi mdi-weather-night'
    })

    const colorTheme = computed(() => {
        if (theme.global.name.value == 'light') {
            return 'yellow'
        }
        return 'black'
    })

    return {
        theme,
        toggleTheme,
        iconTheme,
        colorTheme
    }
})