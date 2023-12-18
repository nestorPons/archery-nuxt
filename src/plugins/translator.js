// plugins/global-translator.ts
import {
    defineNuxtPlugin
} from 'nuxt/app';
import es from '../lang/es.json';

function capitalize(text) {
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);
    return firstLetter.toUpperCase() + rest;
}

export default defineNuxtPlugin((nuxtApp) => {
    // Inyecta la funcionalidad de traducción en el contexto global
    return {
        provide: {
            text: key => {
                let k = key.toLowerCase()
                let r = es[k] || key
                return capitalize(r)
            }
        }
    }
});