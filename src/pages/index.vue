<script setup>
import { computed } from 'vue';
import { useLocalStorage } from '~/composables/useLocalStorage';

const age = useLocalStorage('age');
const height = useLocalStorage('height');
const gender = useLocalStorage('gender');


const recommendedPower = computed(() => rangeWeigth(age.value, gender.value));


function rangeWeigth(age, gender)
{
    console.log(age)
    console.log(gender)
    let a = parseInt(age)
    switch (true){
        case a <= 12: 
            return '10-15'    
        case a > 12 & a <= 15:
            return '15-20'
        case gender == 2:
            return '20-25'
        case gender == 1:
            return '20-30'
        default:
            return 'S/N'
    }
} 

</script>
<style lang="less" scoped>
.container {
    padding: 1rem;
    width: 100%;

    .title {
        text-transform: uppercase;
        padding: 1rem;
        width: 100%;
        text-align: center;
    }

    .label {
        display: block;
        text-transform: uppercase;
        /* uppercase */
        color: #4a5568;
        /* text-gray-700 */
        font-size: 0.75rem;
        /* text-xs */
        font-weight: bold;
        /* font-bold */
        margin-bottom: 0.5rem;
        /* mb-2 */
    }

    .form {

        &-container {
            margin: auto;
            width: 350px;
        }

        &-group {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            margin-right: -1rem;
            margin-left: -1rem;
            margin-bottom: 1.5rem;
        }

        &-input {
            appearance: none;
            display: block;
            width: 100%;
            background-color: #e2e8f0;
            /* bg-gray-200 */
            color: #4a5568;
            /* text-gray-700 */
            border: 1px solid #e2e8f0;
            /* border-gray-200 */
            border-radius: 0.25rem;
            /* rounded */
            padding-top: 0.75rem;
            /* py-3 */
            padding-bottom: 0.75rem;
            /* py-3 */
            padding-left: 1rem;
            /* px-4 */
            padding-right: 1rem;
            /* px-4 */
            line-height: 1.25;

            /* leading-tight */
            &:focus {
                outline: none;
                /* focus:outline-none */
                background-color: #ffffff;
                /* focus:bg-white */
                border-color: #a0aec0;
                /* focus:border-gray-500 */
            }
        }

        &-element {
            position: relative;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            margin-bottom: 1.5rem;

            .caption {
                text-transform: lowercase;
                position: absolute;
                top: 2.2rem;
                right: 3rem;
                color: gray;
            }
        }
    }

    .select {
        &-container {
            display: inline-block;
            position: relative;
            width: 100%;
        }

        &-decorator {
            fill: currentColor;
            height: 1rem;
            /* Equivalente a h-4 en Tailwind */
            width: 1rem;

            /* Equivalente a w-4 en Tailwind */
            &-container {
                pointer-events: none;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                display: flex;
                align-items: center;
                padding-left: 0.5rem;
                /* Equivalente a px-2 */
                padding-right: 0.5rem;
                /* Equivalente a px-2 */
                color: #4a5568;
            }
        }

        display: block;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        background-color: #ffffff;
        /* bg-white */
        border: 1px solid #d1d5db;
        /* border-gray-400 */
        padding: 0.5rem 1rem;
        /* py-2 px-4 */
        padding-right: 2rem;
        /* pr-8 */
        border-radius: 0.25rem;
        /* rounded */
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
        /* shadow */
        line-height: 1.25;

        /* leading-tight */
        &:hover {
            border-color: #a0aec0;
            /* hover:border-gray-500 */
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
            /* focus:shadow-outline */
        }
    }


}
</style>

<template>
    <div class="container">
        <h1 class="title">{{ $text('Personal characteristics') }}</h1>
        <form class="form-container">
            <div class="form-group">
                <div class="form-element">
                    <label class="">
                        <span class="label">{{ $text('Age') }}</span>
                        <input class="form-input" v-model="age" type="number" min=3 max=100>
                        <span class="caption">{{ $text('Years') }}</span>

                    </label>
                </div>
                <div class="form-element">
                    <label class="">
                        <span class="label">{{ $text('Gender') }}</span>
                        <div class="select-container">
                            <select class="select" v-model="gender">
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
                <div class="form-element">
                    <label>
                        <span class="label">{{ $text('Height') }}</span>
                        <input class="form-input" v-model="height" type="number" placeholder="">
                        <span class="caption">{{ $text('cm') }}</span>
                    </label>
                </div>
            </div>
        </form>
        <div class="card">
            <h2>{{$text('Recommended power noob')}}:</h2>
            <span>{{ recommendedPower }}</span>

        </div>
    </div>
</template>