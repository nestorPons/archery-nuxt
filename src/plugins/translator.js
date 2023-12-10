// plugins/global-translator.ts
import { defineNuxtPlugin } from 'nuxt/app';
import es from '../lang/es.json'; 

export default defineNuxtPlugin((nuxtApp) => {
  // Inyecta la funcionalidad de traducción en el contexto global
  return {
    provide:{
      text : key => es[key] || key
    }
  }
});
