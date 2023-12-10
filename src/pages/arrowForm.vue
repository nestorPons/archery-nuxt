<template>
    <div class="flex flex-col items-center">
        <h2 class="text-xl uppercase font-bold mb-4 pb-10 text-center">Formulario de Selección de Flechas</h2>
        <form @submit.prevent="submitForm" class="">
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
                <input type="number" v-model="longitudes" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div class="sel-width radio-options">
                    <label>
                        <input id="unit0" type="radio" name="unit-width" value="0" v-model="lenghtUnit">
                        <span for="unit0">Centímetros</span>
                    </label>
                    <label>
                        <input id="unit1" type="radio" name="unit-width" value="1" v-model="lenghtUnit">
                        <span for="unit1">Puldadas</span>
                    </label>
                    <p>{{ textChangeUnit }}</p>
                </div>

            </div>
            <div class="component">
                <label for="potencia" class="mb-2">Potencia en libras:</label>
                <input type="number" v-model="potencia" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="component">
                <label for="tipoArco" class="mb-2">Tipo de Arco:</label>
                <select v-model="tipoArco" required
                    class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccionar</option>
                    <option value="1">Recurvo</option>
                    <option value="2">Compuesto</option>
                </select>
                <div v-if="tipoArco==1">
                    <label>
                        <span>Apertura en pulgadas:</span>
                        <input type="number" v-model="apertura"
                            class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </label>
                </div>
                <div v-if="tipoArco==2">
                    <label>
                        <span>Suelta</span>
                        <select v-model="suelta"
                            class="w-full border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Seleccionar</option>
                            <option value="1">Con los dedos</option>
                            <option value="2">Con disparador</option>
                        </select>
                    </label>
                    <label>Peso de la punta</label>
                    <input type="number" v-model="pesoPunta"
                        class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">

                    <label>Fismele</label>
                    <input type="number" v-model="fismele"
                        class="w-full border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
            </div>
        </form>
        <div class="border-2 drop-shadow bg-red p-5 w-100">
            <p>Edad: {{ edad }}</p>
            <p>Longitud: {{ longitudes.cm }}</p>
            <p>Unidad de longitud: {{ lenghtUnit }}</p>
            <p>Tipo de arco: {{ tipoArco }}</p>
            <p>Potencia: {{ potenciaTotal }}</p>
            <div v-if="flechaRecomendada" class="mt-8">
                <h3 class="text-xl font-bold mb-2">Flecha Recomendada:</h3>
                <p>{{ flechaRecomendada }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  const long = reactive({
    in: 28.35, 
    cm: 72
  })
  const edad = ref(30);
  const longitudes = computed({
    get(){
        return lenghtUnit.value == 1 ? long.in : long.cm
    },
    set(value){
        if(lenghtUnit.value == 1 ){
            // Pulgadas
            long.in = value; 
            long.cm = (value * 2.54).toFixed(2)
            long.value = value
        }else{
            // Centimetros
            long.in = (value / 2.54).toFixed(2)
            long.cm = value; 
            long.value = value
        }
        
    }
  });
  const tipoArco = ref(1);
  const potencia = ref(30);
  const showHelp = ref(false);
  const lenghtUnit = ref(0);
  const suelta = ref(1);
  const pesoPunta = ref(100);
  const fismele = ref(6.5);
  const flechaRecomendada = ref(null);
  const textChangeUnit = computed(() => 
    lenghtUnit.value == 1 ? 
        `${long.cm} centímetros` : 
        `${long.in} pulgadas` 
  )    
  const potenciaTotal = computed(()=>{
    if (tipoArco.value==2 ){
        // Suplemento de 5lbs si la suelta es con los dedos
        const supSuelta =  suelta.value == 1 ? 5 : 0;
        // Suplemento de 3lbd por cada 25 grains a partir de 100 grains 
        const supPesoPunta = Math.ceil((pesoPunta.value - 100) / 25) * 3 ;
        const supFismele = fismele.value < 6.5 ? 5 : 0 ;
        return potencia.value + supSuelta + supPesoPunta + supFismele
    }else{
        return potencia.value
    }
  })
  const apertura = ref(long.in);
  function submitForm(event) {
    // Aquí puedes realizar la lógica para calcular la flecha recomendada
    // basada en los valores del formulario y asignarla a la propiedad flechaRecomendada
  }
  </script>
  
<style lang="less" scoped>
.component {
    width: 350px;
    margin-bottom: 1rem;

    h3 {
        font-size: 1.2rem;
        text-transform: uppercase;
        width: 100%;
        margin-bottom: .5rem;
    }

    input,
    select {
        margin-top: .3rem;
    }

    .radio-options {
        label {
            cursor: pointer;
        }

        input {
            margin-right: 1rem;
            height: 1rem;
            width: 1rem;
            font-size: 3rem;
        }
    }

    input,
    select {
        border: 1px;
        padding: 1rem;
        border: 1px solid gray;
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


.items-center {
    padding: 1rem;
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
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;

    p {
        width: 100%;
    }
}
</style>

