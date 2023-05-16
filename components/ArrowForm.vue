<template>
    <div class="flex flex-col items-center">
        <h2 class="text-4xl uppercase font-bold mb-4 pb-10 text-center">Formulario de Selección de Flechas</h2>
        <form @submit.prevent="submitForm" class="w-1/3">
            <label for="edad" class="mb-2">Edad:</label>
            <input type="number" v-model="edad" required
                class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <label for="longitud" class="mb-2">Longitud de la Flecha:</label><span class="text-xs">Cómo medir
                correctamente</span>

            <fa-icon :icon="['fas', 'coffee']" />

            <input type="number" v-model="longitud" required
                class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <img src="~/assets/medicion.png" />
            <label for="tipoArco" class="mb-2">Tipo de Arco:</label>
            <select v-model="tipoArco" required
                class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Seleccionar</option>
                <option value="Recurvo">Recurvo</option>
                <option value="Compuesto">Compuesto</option>
            </select>

            <label for="potencia" class="mb-2">Peso de Dibujo del Arco:</label>
            <input type="number" v-model="potencia" required
                class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </form>

        <p>Edad: {{ edad }}</p>
        <p>Longitud: {{ longitud }}</p>
        <p>Tipo de arco: {{ tipoArco }}</p>
        <p>Potencia: {{ potencia }}</p>
        <div v-if="flechaRecomendada" class="mt-8">
            <h3 class="text-xl font-bold mb-2">Flecha Recomendada:</h3>

            <p>{{ flechaRecomendada }}</p>
        </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  const edad = ref(null);
  const longitud = ref(null);
  const tipoArco = ref('');
  const potencia = ref(null);
  const flechaRecomendada = ref(null);
  
  function submitForm(event) {
    // Aquí puedes realizar la lógica para calcular la flecha recomendada
    // basada en los valores del formulario y asignarla a la propiedad flechaRecomendada
  }
  </script>
  
<style lang="less" scoped>
* {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
        width: 100%;

    }
}

.items-center {
    padding: 1rem;
}

input,
select {
    border: 1px;
    padding: 1rem;
    border: 1px solid orangered;
}</style>

