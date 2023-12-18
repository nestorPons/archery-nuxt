<script setup>
import { useLocalStorage } from '~/composables/useLocalStorage';
const power = useLocalStorage('power');
const recommendedPower = useLocalStorage('recommendedPower');
const modality = useLocalStorage('modality')
</script>
<template>
    <div class="container">
        <h1 class="title">{{ $text('Arch Configuration') }}</h1>
        <form action="" class="form-container">
            <div class="form-group">
                <div class="form-element">
                    <label class="">
                        <span class="label">{{ $text('power') }}</span>
                        <input class="form-input" v-model="power" type="number" :placeholder="recommendedPower">
                        <span class="caption">{{ $text('lb') }}</span>
                    </label>
                </div>
            </div>
            <div class="form-group">
                <div class="form-element">
                    <label class="">
                        <span class="label">{{ $text('modality') }}</span>
                        <div class="select-container">
                            <select class="select" v-model="modality">
                                <option value="recurve">{{ $text('recurve bow') }}</option>
                                <option value="compound">{{ $text('compound bow') }}</option>
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
        </form>
    </div>
</template>