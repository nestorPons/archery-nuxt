<style scoped lang="less">
/* Estilos para la transición de deslizamiento */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease-in-out;
    /* Ajusta la duración y la función de tiempo aquí */
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
    /* Desplaza el menú completamente fuera de la pantalla */
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    /* Restaura el menú a su posición original */
}
</style>
<template>
    <nav class="bg-cyan-950 py-4">
        <div class="mx-auto  px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-15 w-auto" src="/img/logo-light.png" alt="Your Company">
                    </div>

                    <div class="hidden sm:ml-6 sm:block sm:flex md:flex lg:flex">
                        <div class="m-auto ">
                            <NuxtLink to="/"
                                class="text-blue-300 hover:bg-cyan-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                @click="closeMobileMenu">
                                {{ $text('features') }}
                            </NuxtLink>
                            <NuxtLink to="/recommendations"
                                class="text-blue-300 hover:bg-cyan-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                @click="closeMobileMenu">
                                {{ $text('recommendatios') }}
                            </NuxtLink>

                        </div>
                    </div>
                </div>
                <div>
                    <ClientOnly>
                        <UButton :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" color="gray"
                            variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                    </ClientOnly>
                </div>

            </div>
        </div>
        <transition name="slide">
            <div class="sm:hidden" id="mobile-menu" v-show="isMobileMenuOpen">
                <div class="space-y-1 px-2 pb-3 pt-2">
                    <NuxtLink to="/"
                        class="bg-cyan-950 text-white block rounded-md px-3 py-2 text-base font-medium"
                        @click="closeMobileMenu">
                        {{ $text('features') }}
                    </NuxtLink>
                    <NuxtLink to="/recommendations"
                        class="bg-cyan-950 text-white block rounded-md px-3 py-2 text-base font-medium"
                        @click="closeMobileMenu">
                        {{ $text('recommendations') }}
                    </NuxtLink>

                </div>
            </div>
        </transition>

    </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMobileMenuOpen = ref(false);
function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}

const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

