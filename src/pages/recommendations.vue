<script setup>
import { useLocalStorage } from '~/composables/useLocalStorage';
const recommendedPower = useLocalStorage('recommendedPower');
const recommendedLength = useLocalStorage('recommendedLength');
</script>
<template>
    <div class="container">
        <div>
            <span class="label">{{$text('Recommended power')}}:</span>
            <span class="output-text">{{ recommendedPower }}</span>
            <span class="m-3">lb</span>
        </div>
        <div>
            <span class="label">{{$text('Recommended length')}}:</span>
            <span class="output-text">{{ recommendedLength }}</span>
            <span class="m-3">"</span>
        </div>
    </div>
</template>