<script setup>
import { computed, watch, ref } from 'vue';
import { useLocalStorage } from '~/composables/useLocalStorage';
import { useNuxtApp } from '#app';

const { $text } = useNuxtApp();

const items = [{
    label: $text('personal features'),
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
    slot: 'personal'
}, {
    label: $text('data bow'),
    icon: 'i-heroicons-bow',
    defaultOpen: false,
    slot: 'bow'
}, {
    label: $text('data arrow'),
    icon: 'i-heroicons-eye-dropper',
    defaultOpen: false,
    slot: 'arrow'

}]
const age = useLocalStorage('age');
const length = useLocalStorage('length');
const gender = useLocalStorage('gender');
const span = useLocalStorage('span');
const bowSize = length => length / 2.5
const bowType = useLocalStorage('bowType');
const power = useLocalStorage('power');
const showHelp = ref(false);
const lenghtUnit = ref(0);
const pointWeight = useLocalStorage('pointWeight');
const fismele = useLocalStorage('fismele');
const level = useLocalStorage('level');
const material = useLocalStorage('material');
let storedArrowLength = 0.0
const long = reactive({
    in: storedArrowLength,
    cm: (storedArrowLength * 2.54).toFixed(2)
})
const recommendedPower = computed(() => {
    let a = parseInt(age.value)
    switch (true) {
        case a <= 12:
            return '10-15'
        case a > 12 & a <= 15:
            return '15-20'
        case gender.value == 2:
            return '20-25'
        case gender.value == 1:
            return '20-35'
        default:
            return 'S/N'
    }
});
const recommendedLength = computed(() => bowSize(length.value));
const recommendedFismele = computed(() => {
    switch (bowType.value) {
        case 'recurve': return 8.5
        case 'longbow': return 7
        case 'traditional': return 5
        default: return 9
    }
})
const computedArrowLength = computed({
    get() {
        return lenghtUnit.value == 1 ? long.in : long.cm
    },
    set(value) {
        if (lenghtUnit.value == 1) {
            // Pulgadas
            long.in = value;
            long.cm = (value * 2.54).toFixed(2)
            long.value = value
        } else {
            // Centimetros
            long.in = (value / 2.54).toFixed(2)
            long.cm = value;
            long.value = value
        }

    }
});

watch(computedArrowLength, () => {
    localStorage.setItem('arrowLength', long.in);
});

watch(recommendedPower, (newValue) => {
    localStorage.setItem('recommendedPower', newValue);
});

watch(recommendedLength, (newValue) => {
    localStorage.setItem('recommendedBowLength', newValue);
});

const textChangeUnit = computed(() =>
    lenghtUnit.value == 1 ?
        `${long.cm}  ${$text('centimeters')}` :
        `${long.in} ${$text('inches')}`
)
const totalPower = computed((power) => {
    if (bowType == 'compound') {
        // Suplemento de 5lbs si la suelta es con los dedos
        const supSuelta = suelta.value == 1 ? 5 : 0;
        // Suplemento de 3lbd por cada 25 grains a partir de 100 grains 
        const suppointWeight = Math.ceil((pointWeight.value - 100) / 25) * 3;
        const supFismele = fismele.value < 6.5 ? 5 : 0;
        return power + supSuelta + suppointWeight + supFismele
    } else {
        return power
    }
})

onMounted(() => {
    if (process.client) {
        const value = localStorage.getItem('arrowLength')
        storedArrowLength = value ? parseFloat(value).toFixed(2) : 0
        long.in = storedArrowLength
        long.cm = (storedArrowLength * 2.54).toFixed(2)
    }
});
</script>
<template>
    <UAccordion :items="items" class="mt-1 max-w-sm m-auto my-2 bg-zinc-900">
        <template #personal>
            <div class="container">
                <div class="component">
                    <label class="">
                        <span class="label">{{ $text('age') }}</span>
                        <input class="form-input" v-model="age" type="number" min=3 max=100>
                        <span class="caption">{{ $text('Years') }}</span>

                    </label>
                </div>
                <div class="component">
                    <label class="">
                        <span class="label">{{ $text('Gender') }}</span>
                        <div class="select-container">
                            <select class="select form-input" v-model="gender">
                                <option value="1">{{ $text('Man') }}</option>
                                <option value="2">{{ $text('Woman') }}</option>
                            </select>
                            <div class="select-decorator-container">
                                <svg class="select-decorator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                    </label>
                </div>
                <div class="component">
                    <label>
                        <span class="label">{{ $text('length') }}</span>
                        <input class="form-input" v-model="length" type="number" placeholder="">
                        <span class="caption">{{ $text('cm') }}</span>
                    </label>
                </div>
                <div class="component">
                    <label>
                        <span class="label">{{ $text('Span') }}</span>
                        <input class="form-input" v-model="span" type="number" placeholder="">
                        <span class="caption">{{ $text('cm') }}</span>
                    </label>
                </div>
                <div class="component">
                    <label class="">
                        <span class="label">{{ $text('level') }}</span>
                        <div class="select-container">
                            <select class="select form-input" v-model="level">
                                <option value="beginner">{{ $text('beginner') }}</option>
                                <option value="amateur">{{ $text('amateur') }}</option>
                            </select>
                            <div class="select-decorator-container">
                                <svg class="select-decorator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>

                    </label>
                </div>
            </div>
        </template>

        <template #bow>
            <div class="container">
                <div class="component">
                    <div class="mb-3">
                        <label class="">
                            <span class="label">{{ $text('modality') }}</span>
                            <div class="select-container">
                                <select class="select form-input" v-model="bowType">
                                    <option value="recurve">{{ $text('recurve') }}</option>
                                    <option value="compound">{{ $text('compound') }}</option>
                                    <option value="longbow">{{ $text('longbow') }}</option>
                                    <option value="traditional">{{ $text('traditional') }}</option>
                                </select>
                                <div class="select-decorator-container">
                                    <svg class="select-decorator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div v-if="bowType == 'recurve'">

                    </div>
                    <div v-if="bowType == 'compound'">
                        <label>
                            <span class="label">{{ $text('type release') }}</span>
                            <select v-model="suelta" class="w-full form-input">
                                <option value="">Seleccionar</option>
                                <option value="1">Con los dedos</option>
                                <option value="2">Con disparador</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div class="component">
                    <label>
                        <span class="label">{{ $text('fismele') }}</span>
                        <input type="number" v-model="fismele" class="form-input" :placeholder=recommendedFismele>
                    </label>
                </div>
            </div>
        </template>

        <template #arrow>
            <div class="container">
                <div class="form-group">
                    <div class="component">
                        <label class="">
                            <span class="label">{{ $text('power') }}</span>
                            <input class="form-input" v-model="power" type="number" :placeholder="recommendedPower">
                            <span class="caption">{{ $text('lb') }}</span>
                        </label>
                    </div>
                    <div class="component">
                        <div class="width-arrow">
                            <label for="longitud" class="label">{{ $text('draw length') }}:</label>
                            <div class="medition" @click="showHelp = !showHelp">
                                <div class="icon-question">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" class="question">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                    <span class="text-xs flex ">{{ $text('How to measure correctly') }}</span>
                                </div>
                            </div>
                            <transition>
                                <img v-if="showHelp" src="/img/medicion.png" />
                            </transition>
                        </div>
                        <div class="arrow-long">
                            <input type="number" v-model="computedArrowLength" class="form-input">
                            <div class="sel-width radio-options">
                                <label>
                                    <input id="unit0" type="radio" name="unit-width" value="0" v-model="lenghtUnit">
                                    <span for="unit0">{{ $text('Centimeters') }}</span>
                                </label>
                                <label>
                                    <input id="unit1" type="radio" name="unit-width" value="1" v-model="lenghtUnit">
                                    <span for="unit1">{{ $text('Inches') }}</span>
                                </label>
                            </div>
                            <p class="other-unit">{{ textChangeUnit }}</p>
                        </div>

                    </div>
                    <div class="component">
                        <label>
                            <span class="label">{{ $text('arrowhead weight') }}</span>
                            <input type="number" v-model="pointWeight" class="form-input">
                        </label>
                    </div>
                    <div class="component">
                        <div class="mb-3">
                            <label class="">
                                <span class="label">{{ $text('material') }}</span>
                                <div class="select-container">
                                    <select class="select form-input" v-model="material">
                                        <option value="">{{ $text('select one element') }}</option>
                                        <option value="carbon">{{ $text('carbon') }}</option>
                                        <option value="alumminium">{{ $text('alumminium') }}</option>
                                        <option value="wood">{{ $text('wood') }}</option>
                                        <option value="traditional">{{ $text('traditional') }}</option>
                                    </select>
                                    <div class="select-decorator-container">
                                        <svg class="select-decorator" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </UAccordion>
</template>

