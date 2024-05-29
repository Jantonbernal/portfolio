import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => {
    const drawer = ref(false);
    const menus = ref([]);

    const changeDrawer = (value) => {
        drawer.value = value;
    }

    return {
        drawer,
        menus,
        changeDrawer
    }
})