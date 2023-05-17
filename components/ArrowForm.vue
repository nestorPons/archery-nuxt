<template>
    <div class="flex flex-col items-center">
        <h2 class="text-xl uppercase font-bold mb-4 pb-10 text-center">Formulario de Selección de Flechas</h2>
        <form @submit.prevent="submitForm" class="w-1/3">
            <div class="component">
                <label for="edad" class="mb-2">Edad:</label>
                <input type="number" v-model="edad" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="component">
                <div class="width-arrow">
                    <label for="longitud" class="mb-2">Longitud de la Flecha:</label>
                    <div class="medition" @click="showHelp = !showHelp">
                        <div class="icon-question">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" class="question">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                            <span class="text-xs flex ">Cómo medir correctamente</span>
                        </div>
                    </div>
                    <transition>
                        <img v-if="showHelp" src="~/assets/medicion.png" />
                    </transition>

                </div>
                <input type="number" v-model="longitud" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div class="sel-width">
                    <label>
                        <input type="radio" name="unit-width" value="0"  v-model="lenghtUnit">
                        <span>Centímetros</span>
                    </label>
                    <label>
                        <input type="radio" name="unit-width" value="1" v-model="lenghtUnit">
                        <span>Puldadas</span>
                    </label>
                    <p>
                        <span>
                            {{ textChangeUnit }}.
                        </span>
                    </p>
                </div>

            </div>
            <div class="component">
                <label for="tipoArco" class="mb-2">Tipo de Arco:</label>
                <select v-model="tipoArco" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="Recurvo">Recurvo</option>
                    <option value="Compuesto">Compuesto</option>
                </select>
            </div>
            <div class="component">
                <label for="potencia" class="mb-2">Peso de Dibujo del Arco:</label>
                <input type="number" v-model="potencia" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

        </form>

        <p>Edad: {{ edad }}</p>
        <p>Longitud: {{ longitud }}</p>
        <p>Unidad de longitud: {{ lenghtUnit }}</p>
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
  const longitud = ref(72);
  const tipoArco = ref('');
  const potencia = ref(null);
  const flechaRecomendada = ref(null);
  const showHelp = ref(false);
  const lenghtUnit = ref(0);
  const textChangeUnit = computed(() => {
    return lenghtUnit.value == 1 ? 
        `${(longitud.value * 2.54).toFixed(2)} centimetros` : 
        `${(longitud.value / 2.54).toFixed(2)} pulgadas` ;
  })

  function submitForm(event) {
    // Aquí puedes realizar la lógica para calcular la flecha recomendada
    // basada en los valores del formulario y asignarla a la propiedad flechaRecomendada
  }
  </script>
  
<style lang="less" scoped>
.component {
    min-width: 350px;
    margin-bottom: 1rem;

    input,
    select {
        margin-top: .3rem;
    }
}

.v-enter-from {
    opacity: 0
}

.v-enter-to {
    opacity: 1
}

.v-enter-active,
.v-leave-active {
    transition: opacity .5s ease
}

.v-leave-from {
    opacity: 1
}

.v-leave-to {
    opacity: 0
}

* {
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
}

.width-arrow {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    label {
        width: 50%;
        margin: 0;
    }

    .medition {
        width: 50%;
        cursor: pointer;

        &:hover {
            color: blue;
        }

        .icon-question {
            display: flex;
            column-gap: .5rem;
            margin-top: 1rem;
            margin-bottom: 0;

            svg {
                max-width: 1rem;
                max-height: 1rem;
            }
        }


    }

    img {
        margin: auto;
        height: 100%;
    }
}

.sel-width {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: flex-end;
    flex-direction: row;
    width: 100%;
    label {
        cursor: pointer;
        width: 30%;
        input {
            margin-right: 1rem;
            height: 1rem;
            width: 1rem;
            color: red;
            fill: red;
            border: 1px solid red;
            font-size: 3rem;
        }
    }
}
</style>

