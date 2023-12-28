<script setup>

import { useLocalStorage } from '~/composables/useLocalStorage';

const arrowLength = useLocalStorage('arrowLength');
const carbonSpines = ref([]);
const power = useLocalStorage('power')
const recommendedPower = useLocalStorage('recommendedPower');
const humanSpan = useLocalStorage('span')


onMounted(async() => {
    const {data} = await useFetch('/api/dataCarbonRecurveSpine')
    carbonSpines.value = data.value;
});

const recommendedArrowLegthCm = computed(() => (parseFloat(recommendedArrowLegth.value) * 2.54).toFixed(2))
const recommendedArrowLegth = computed(() =>  (parseFloat(arrowLength.value) + 1.44).toFixed(2))
const recommendedBowLegth = computed(() => {
    const span = (humanSpan.value / 2.5).toFixed(0)
    switch (true) {
        case span < 28: return '62-66'
        case span >= 28: return '66-70'
    }
})
const recommendedSpine = computed(() => {
    const powerValue = parseInt(power.value)
    const spanInches = arrowLength.value
    const spanInchesRound = parseFloat(spanInches).toFixed(0)
    if (carbonSpines.value && carbonSpines.value.length > 0) {
        for (const item of carbonSpines.value) {
            const split = item[""].split('-')
            const min = parseInt(split[0])
            const max = parseInt(split[1])
            console.log(max, min, powerValue, spanInchesRound)
            if( powerValue >= min && powerValue <= max){
                console.log(item[spanInchesRound])
                return item[spanInchesRound]
            }
        }
    }
    return 0
})



</script>
<style lang="less">
.title {
    margin-bottom: 2rem;
}

.grouped {
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    margin-bottom: 3rem;

    .title {
        position: absolute;
        top: -2rem;
        left: -1rem;
        height: 2rem;
        display: flex;
        align-items: center;
    }
}
</style>
<template>
    <div class="container">
        <h1 class="title">{{ $text('recommend configuration') }}</h1>
        <div class="grouped">
            <div class="title">{{ $text('for you bow') }}</div>
            <div>
                <span class="label">{{ $text('Recommended power') }}:</span>
                <span class="output-text">{{ recommendedPower }}</span>
                <span class="m-1">lb</span>
            </div>
            <div>
                <span class="label">{{ $text('Recommended legth') }}:</span>
                <span class="output-text">{{ recommendedBowLegth }}</span>
                <span class="m-1">"</span>

            </div>
        </div>
        <div class="grouped">
            <div class="title">{{ $text('for you arrows') }}</div>

            <div>
                <span class="label">{{ $text('Recommended length') }}:</span>
                <span class="output-text">{{ recommendedArrowLegth }}</span>
                <span class="m-1">"</span>
                <span> → </span>
                <span class="output-text">{{ recommendedArrowLegthCm }}</span>
                <span class="m-1">cm</span>

            </div>

            <div>
                <span class="label">{{ $text('spine') }}:</span>
                <span class="output-text">{{ recommendedSpine }}</span>
            </div>
        </div>
    </div>
</template>