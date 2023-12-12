// composables/useLocalStorage.js
import {
    ref,
    onMounted,
    watch
} from 'vue';

export function useLocalStorage(key, defaultValue = '') {
    const storedValue = ref(defaultValue);

    onMounted(() => {
        // Acceder a localStorage solo después de que el componente se haya montado
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            storedValue.value = savedValue;
        }

        // Observa los cambios en la variable y actualiza localStorage
        watch(storedValue, (newValue) => {
            localStorage.setItem(key, newValue);
        });
    });

    return storedValue;
}