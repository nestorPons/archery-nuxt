<script setup>
import { useLocalStorage } from '~/composables/useLocalStorage';

const age = useLocalStorage('age');
const height = useLocalStorage('height');

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
                    <label>
                        <span class="label">{{ $text('Height') }}</span>
                        <input class="form-input" v-model="height" type="number" placeholder="">
                        <span class="caption">{{ $text('cm') }}</span>
                    </label>
                </div>
            </div>
        </form>
    </div>
</template>